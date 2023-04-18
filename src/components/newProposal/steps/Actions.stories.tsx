/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * © Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Meta, StoryObj } from '@storybook/react';

import { Actions } from './Actions';
import { NewProposalFormProvider } from '@/src/pages/NewProposal';
import {
  StepThreeData,
  emptyMintTokenForm,
  emptyWithdrawForm,
} from '../newProposalData';

const meta: Meta<typeof Actions> = {
  component: Actions,
};

export default meta;
type Story = StoryObj<typeof Actions>;

const FormProviderDecoratorFactory = (data: StepThreeData): any => {
  // eslint-disable-next-line react/display-name
  return (Story: any) => (
    <NewProposalFormProvider step={3} dataStep3={data}>
      <Story />
    </NewProposalFormProvider>
  );
};

const emptyActions = {
  actions: [emptyMintTokenForm, emptyWithdrawForm],
};

export const Primary: Story = {
  decorators: [FormProviderDecoratorFactory(emptyActions)],
};

const mintTokensAction: StepThreeData = {
  actions: [
    { name: 'mint_tokens', wallets: [{ address: '0x123', amount: 1 }] },
  ],
};
export const MintTokensAction: Story = {
  decorators: [FormProviderDecoratorFactory(mintTokensAction)],
};
