/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * © Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import MintAction from '@/src/components/proposal/actions/MintAction';
import { Accordion, AccordionItem } from '@/src/components/ui/Accordion';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: MintAction,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MintAction>;

export default meta;
type Story = StoryObj<typeof meta>;

// Required for BigInts to be serialized correctly
// Taken from: https://stackoverflow.com/questions/65152373/typescript-serialize-bigint-in-json
// @ts-ignore
BigInt.prototype.toJSON = function () {
  return this.toString();
};

export const Default: Story = {
  args: {
    action: {
      method: 'mint',
      interface: 'IMint',
      params: {
        to: [
          {
            to: '0x000000002',
            amount: 1000000000000000000n,
            tokenAddress: '0x000000002',
          },
          {
            to: '0x000000001',
            amount: 1000000000000000000n,
            tokenAddress: '0x000000001',
          },
        ],
      },
    },
  },
  decorators: [
    (Story) => (
      <Accordion type="single" collapsible>
        <AccordionItem value="first">
          <Story />
        </AccordionItem>
      </Accordion>
    ),
  ],
};
