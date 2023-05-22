/**
 * Used to access the active toasts and create new ones.
 *
 * inspired by https://ui.shadcn.com/docs/primitives/toast
 */

import * as React from 'react';

import { ToastActionElement, type ToastProps } from '@/src/components/ui/Toast';
import { PREFERRED_NETWORK_METADATA } from '@/src/lib/constants/chains';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { ContractTransaction } from 'ethers';

const TOAST_LIMIT = 5;
const TOAST_REMOVE_DELAY = 3000;

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

// id property on ToasterToast is not required in upate function of specific toast
export type ToastUpdate = Partial<ToasterToast>;

const actionTypes = {
  ADD_TOAST: 'ADD_TOAST',
  UPDATE_TOAST: 'UPDATE_TOAST',
  DISMISS_TOAST: 'DISMISS_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
} as const;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}

type ActionType = typeof actionTypes;

type Action =
  | {
      type: ActionType['ADD_TOAST'];
      toast: ToasterToast;
    }
  | {
      type: ActionType['UPDATE_TOAST'];
      toast: Partial<ToasterToast>;
    }
  | {
      type: ActionType['DISMISS_TOAST'];
      toastId?: ToasterToast['id'];
    }
  | {
      type: ActionType['REMOVE_TOAST'];
      toastId?: ToasterToast['id'];
    };

interface State {
  toasts: ToasterToast[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: 'REMOVE_TOAST',
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case 'UPDATE_TOAST':
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };

    case 'DISMISS_TOAST': {
      const { toastId } = action;

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      };
    }
    case 'REMOVE_TOAST':
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

const listeners: Array<(state: State) => void> = [];

let memoryState: State = { toasts: [] };

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

interface Toast extends Omit<ToasterToast, 'id'> {}

/**
 * Update a toast with the given props and id. This will also set a timeout to dismiss the toast after the duration has passed,
 * overriding the pausing and resuming behavior of the default Toast (to avoid an error causing the toast to remain forever)
 */
const updateToast = (props: ToastUpdate, id: string) => {
  dispatch({
    type: 'UPDATE_TOAST',
    toast: { ...props, id },
  });
  // Dismiss toast after duration manually to avoid the shenanigens of radix ui toast, causing the toast to remain forever
  if (props.duration) {
    setTimeout(() => {
      dispatch({ type: 'DISMISS_TOAST', toastId: id });
    }, props.duration);
  }
};

/**
 * Show a toast with the given props
 * @param props Props for the toast, including duration, variant, title and description
 * @returns An object containing the id of the toast, a function to dismiss the toast and a function to update the toast
 */
function toast({ ...props }: Toast) {
  const id = genId();
  const dismiss = () => dispatch({ type: 'DISMISS_TOAST', toastId: id });

  dispatch({
    type: 'ADD_TOAST',
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update: (props: ToastUpdate) => updateToast(props, id),
  };
}

type PromiseToast = {
  loading: string;
  success: string;
  error: (err: any) => { title: string; description: string };
};

/**
 * Show a toast that will be updated when the promise resolves or rejects, using the provided content
 * @param promise The promise to update the toast based off of
 * @param props An object containing the content to show when the promise is loading, resolves (success) or rejects (error)
 * @returns An object containing the id of the toast
 */
function promise(promise: Promise<any>, props: PromiseToast) {
  const id = genId();

  const dismiss = () => dispatch({ type: 'DISMISS_TOAST', toastId: id });

  dispatch({
    type: 'ADD_TOAST',
    toast: {
      variant: 'loading',
      duration: Infinity,
      id,
      title: props.loading,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  promise.then(() => {
    updateToast(
      {
        variant: 'success',
        title: props.success,
        duration: 3000,
      },
      id
    );
  });
  promise.catch((e) => {
    const updateProps = props.error(e);

    updateToast(
      {
        variant: 'error',
        duration: 3000,
        ...updateProps,
      },
      id
    );
  });

  return {
    id: id,
  };
}

type ContractTransactionToastProps = {
  messages: {
    error: string;
    success: string;
  };
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
};

/**
 * Show a toast that will be updated based on interaction with a smart contract, using the provided content.
 * This will show a loading toast that says "Awaiting signature" until the user signs the transaction, after which
 * it will show a loading toast that says "Awaiting confirmation" until the transaction is confirmed. If it is successful, or an error occurs,
 * a toast with corresponding style and using the given content will be shown.
 * @param promise A promise that returns an ethers ContractTransaction object
 * @param props An object containing the content to show when an error is encountered, and when the transaction has is successful, plus optionally a callback function to call when the transation is finished (and confirmed)
 * @returns An object containing the id of the toast
 */
async function contractTransaction(
  promise: () => Promise<ContractTransaction>,
  props: ContractTransactionToastProps
) {
  const id = genId();

  const dismiss = () => dispatch({ type: 'DISMISS_TOAST', toastId: id });

  dispatch({
    type: 'ADD_TOAST',
    toast: {
      variant: 'loading',
      duration: Infinity,
      id,
      title: 'Awaiting signature...',
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  try {
    // Get block explorer url for the currently preferred network
    const explorerURL = PREFERRED_NETWORK_METADATA.explorer;
    const transaction = await promise();

    // Show link to transaction on block explorer
    updateToast(
      {
        title: 'Awaiting confirmation...',
        description: explorerURL ? (
          <a
            href={`${explorerURL}/tx/${transaction.hash}`}
            target="_blank"
            rel="noreferrer"
            className="flex flex-row items-center gap-x-1 text-xs text-primary"
          >
            View on block explorer
            <HiArrowTopRightOnSquare />
          </a>
        ) : (
          ''
        ),
      },
      id
    );

    // Await confirmation of the transaction
    await transaction.wait();
    // Call the given success callback function
    props.onSuccess && props.onSuccess();
    updateToast(
      {
        title: props.messages.success,
        description: '',
        variant: 'success',
        duration: 3000,
      },
      id
    );
  } catch (e) {
    // Call the given callback function
    props.onError && props.onError(e);
    // Will be shown when the user rejects transaction or another error occurs
    updateToast(
      {
        title: props.messages.error,
        description: '',
        variant: 'error',
        duration: 3000,
      },
      id
    );
  }
  return {
    id: id,
  };
}

/**
 * @returns An object containing the toasts, a function to show a toast, a function to show a promise toast and a function to dismiss a specific toast
 */
function useToast() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    toast,
    promise,
    dismiss: (toastId?: string) => dispatch({ type: 'DISMISS_TOAST', toastId }),
  };
}

export { useToast, toast, promise, contractTransaction };
