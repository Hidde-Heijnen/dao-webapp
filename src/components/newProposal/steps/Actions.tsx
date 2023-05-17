/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * © Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { createContext } from 'react';
import {
  MergePRInput,
  ProposalFormMergeData,
  emptyMergeData,
} from '@/src/components/newProposal/actions/MergePRInput';
import {
  MintTokensInput,
  ProposalFormMintData,
  emptyMintData,
} from '@/src/components/newProposal/actions/MintTokensInput';
import {
  ProposalFormWithdrawData,
  WithdrawAssetsInput,
  emptyWithdrawData,
} from '@/src/components/newProposal/actions/WithdrawAssetsInput';
import { Button } from '@/src/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/src/components/ui/Dropdown';
import { Label } from '@/src/components/ui/Label';
import { ProposalFormAction, ACTIONS } from '@/src/lib/constants/actions';
import {
  StepNavigator,
  useNewProposalFormContext,
} from '@/src/pages/NewProposal';
import {
  FieldError,
  FieldErrors,
  FieldValues,
  FormProvider,
  Merge,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import { FaGithub } from 'react-icons/fa';
import { HiBanknotes, HiCircleStack, HiCog, HiPlus } from 'react-icons/hi2';

import {
  ChangeParamInput,
  ProposalFormChangeParamData,
  emptyChangeParameter,
} from '../actions/ChangeParamInput';
import { ACTIONS as actionMap } from '@/src/lib/constants/actions';

export type ProposalFormActionData =
  | ProposalFormWithdrawData
  | ProposalFormMintData
  | ProposalFormMergeData
  | ProposalFormChangeParamData;

export type ActionFormContextData = {
  index: number;
  prefix: `actions.${number}`;
  onRemove: () => void;
};
export const ActionFormContext = createContext<ActionFormContextData>(null!);

export interface ProposalFormActions {
  actions: ProposalFormActionData[];
}

export const Actions = () => {
  const { setStep, dataStep3, setDataStep3 } = useNewProposalFormContext();

  const methods = useForm<ProposalFormActions>({ defaultValues: dataStep3 });

  const { fields, append, remove } = useFieldArray<ProposalFormActions>({
    name: 'actions',
    control: methods.control,
  });

  const onSubmit = (data: ProposalFormActions) => {
    setDataStep3(data);
    setStep(4);
  };

  const handleBack = () => {
    const data = methods.getValues();
    setDataStep3(data);
  };

  return (
    <form
      onSubmit={methods.handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
    >
      <div className="space-y-2">
        <div className="flex flex-col gap-y-1">
          <Label tooltip="These actions can be executed after a vote successfully passes">
            Actions
          </Label>
          {fields.length === 0 ? (
            <p className="italic text-highlight-foreground/80">No actions</p>
          ) : (
            <>
              {/* List of proposal actions */}
              <FormProvider {...methods}>
                <div className="flex flex-col gap-6">
                  {fields.map((field: Record<'id', string>, index: number) => {
                    const prefix: `actions.${number}` = `actions.${index}`;
                    const action: ProposalFormActionData =
                      methods.getValues(prefix);
                    const context: ActionFormContextData = {
                      prefix: prefix,
                      index: index,
                      onRemove: () => remove(index),
                    };

                    return (
                      <ActionFormContext.Provider value={context}>
                        {SelectActionInput(action)}
                      </ActionFormContext.Provider>
                    );
                  })}
                </div>
              </FormProvider>
            </>
          )}
        </div>
        <AddActionButton append={append} actions={methods.getValues()} />
      </div>
      <StepNavigator onBack={handleBack} />
    </form>
  );
};

const SelectActionInput = (action: ProposalFormActionData) => {
  switch (action.name) {
    case 'withdraw_assets':
      return <WithdrawAssetsInput />;
    case 'mint_tokens':
      return <MintTokensInput />;
    case 'merge_pr':
      return <MergePRInput />;
    case 'change_param':
      return <ChangeParamInput />;
  }
};

export type ActionFormError<T extends FieldValues> =
  | Merge<FieldError, FieldErrors<NonNullable<T> | T>>
  | undefined;

/**
 * @param append function that is called with ActionFormData to be appended to some parent-like component.
 * @returns A dropdown component to add proposal action input cards
 */
export const AddActionButton = ({
  append,
  actions,
}: {
  // eslint-disable-next-line no-unused-vars
  append: (fn: ProposalFormActionData) => void;
  actions: ProposalFormActions;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" icon={HiPlus} label="Add action" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => append(emptyWithdrawData)}
            className="gap-x-2 hover:cursor-pointer"
          >
            <HiBanknotes className="h-5 w-5 shrink-0" />
            <span>Withdraw assets</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => append(emptyMintData)}
            className="gap-x-2 hover:cursor-pointer"
            disabled={
              actions?.actions?.some((x) => x.name == 'mint_tokens') ?? false
            }
          >
            <HiCircleStack className="h-5 w-5 shrink-0" />
            <span>Mint tokens</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => append(emptyMergeData)}
            className="gap-x-2 hover:cursor-pointer"
          >
            <FaGithub className="h-5 w-5 shrink-0" />
            <span>Merge pull request</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => append(emptyChangeParameter)}
            className="gap-x-2 hover:cursor-pointer"
          >
            <HiCog className="h-5 w-5 shrink-0" />
            <span>Change plugin parameter</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
