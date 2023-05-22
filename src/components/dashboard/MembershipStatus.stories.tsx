/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * © Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { addDays } from 'date-fns';

import { MembershipStatusView } from './MembershipStatus';
import { Stamp } from '@plopmenz/diamond-governance-sdk';
import { BigNumber } from 'ethers';

const meta: Meta<typeof MembershipStatusView> = {
  component: MembershipStatusView,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MembershipStatusView>;

const now = new Date();

const expiredStamp: Stamp = [
  'github',
  '0x000000',
  [BigNumber.from(Math.round(addDays(now, -1000).getTime() / 1000))],
];

const almostExpiredStamp: Stamp = [
  'github',
  '0x000000',
  [BigNumber.from(Math.round(addDays(now, -50).getTime() / 1000))],
];

const goodStamp: Stamp = [
  'github',
  '0x000000',
  [BigNumber.from(Math.round(addDays(now, -1).getTime() / 1000))],
];

export const NotConnected: Story = {
  args: { isConnected: false },
};

export const IncorrectNetworkCanNotSwitch: Story = {
  args: { isConnected: true, chainId: 0.01 },
};

export const IncorrectNetworkCanSwitch: Story = {
  args: {
    isConnected: true,
    chainId: 0.01,
    switchNetwork: (n) => {
      console.log(n);
    },
  },
};

export const NotMember: Story = {
  args: { isConnected: true },
};

export const AlmostExpired: Story = {
  args: {
    isConnected: true,
    stamps: [almostExpiredStamp],
  },
};

export const Expired: Story = {
  args: {
    isConnected: true,
    stamps: [expiredStamp],
  },
};

export const AllOk: Story = {
  args: {
    isConnected: true,
    stamps: [goodStamp],
  },
  decorators: [
    (Story) => (
      <div>
        This is just an empty element, nothing should be visible below this.
        <Story />
      </div>
    ),
  ],
};
