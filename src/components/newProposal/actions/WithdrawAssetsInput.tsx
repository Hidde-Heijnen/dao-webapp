/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * © Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Input } from '../../ui/Input';
import { Label } from '../../ui/Label';
import { HiBanknotes, HiXMark } from 'react-icons/hi2';
import { Button } from '../../ui/Button';
import { AddressPattern, NumberPattern } from '@/src/lib/patterns';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { ErrorWrapper } from '../../ui/ErrorWrapper';
import { MainCard } from '../../ui/MainCard';
import { ActionFormError, ProposalFormActions } from '../steps/Actions';

export type ProposalFormWithdrawData = {
  name: 'withdraw_assets';
  recipient: string;
  tokenAddress: string;
  amount: string;
};

export type ProposalFormWithdraw = {
  amount: number;
  name: 'withdraw_assets';
  to: string;
  tokenAddress: string;
  tokenBalance: number;
  tokenDecimals: number;
  tokenImgUrl: string;
  tokenName: string;
  tokenSymbol: string;
  isCustomToken: boolean;
};

export const emptyWithdrawData: ProposalFormWithdrawData = {
  name: 'withdraw_assets',
  recipient: '',
  tokenAddress: '',
  amount: '',
};

export const emptyWithdraw: ProposalFormWithdraw = {
  amount: 0,
  name: 'withdraw_assets',
  to: '',
  tokenAddress: '',
  tokenBalance: 0,
  tokenDecimals: 0,
  tokenImgUrl: '',
  tokenName: '',
  tokenSymbol: '',
  isCustomToken: true,
};

/**
 * @returns Component to be used within a form to describe the action of withdrawing assets.
 */
export const WithdrawAssetsInput = ({
  register,
  setValue,
  prefix,
  errors,
  onRemove,
}: {
  register: UseFormRegister<ProposalFormActions>;
  setValue: UseFormSetValue<ProposalFormActions>;
  prefix: `actions.${number}`;
  errors: ActionFormError<ProposalFormWithdrawData>;
  onRemove: any;
}) => {
  return (
    <MainCard
      className="flex flex-col gap-4"
      header="Withdraw Assets"
      icon={HiBanknotes}
      variant="light"
      aside={
        <Button
          type="button"
          icon={HiXMark}
          onClick={onRemove}
          variant="ghost"
        />
      }
    >
      <div className="flex flex-col gap-y-1">
        <Label
          htmlFor="recipient"
          tooltip="Address of the wallet to receive the tokens"
        >
          Recipient
        </Label>
        <ErrorWrapper name="Recipient" error={errors?.recipient ?? undefined}>
          <Input
            {...register(`${prefix}.recipient`, { required: true })}
            type="text"
            id="recipient"
            pattern={AddressPattern}
            title="An address starting with 0x, followed by 40 address characters"
            error={errors?.recipient ?? undefined}
            placeholder="0x..."
          />
        </ErrorWrapper>
      </div>
      <div className="grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-2">
        <div className="flex flex-col gap-y-1 ">
          <Label tooltip="Token to withdraw" htmlFor="tokenAddress">
            Token
          </Label>
          {/* To be replaced with <Select> component, which is currently, conveniently located in another branch */}
          <ErrorWrapper name="Token" error={errors?.tokenAddress ?? undefined}>
            <Input
              {...register(`${prefix}.tokenAddress`, { required: true })}
              name="tokenAddress"
              pattern={AddressPattern}
              title="An address starting with 0x, followed by 40 address characters"
              error={errors?.tokenAddress ?? undefined}
            />
          </ErrorWrapper>
        </div>
        <div className="flex flex-col gap-y-1">
          <Label tooltip="Amount of tokens to withdraw" htmlFor="amount">
            Amount
          </Label>
          <ErrorWrapper name="Amount" error={errors?.amount ?? undefined}>
            <Input
              {...register(`${prefix}.amount`, { required: true })}
              type="number"
              id="amount"
              title="A number using a '.' as decimal place, e.g. '3.141'"
              pattern={NumberPattern}
              placeholder="0"
              error={errors?.amount ?? undefined}
            />
          </ErrorWrapper>
        </div>
      </div>
    </MainCard>
  );
};
