/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * © Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Meta, StoryObj } from '@storybook/react';

import { AddActionCard } from './AddActionCard';

const meta: Meta<typeof AddActionCard> = {
  component: AddActionCard,
};

export default meta;
type Story = StoryObj<typeof AddActionCard>;

export const Primary: Story = {
  render: () => <AddActionCard append={() => console.log('Adding actiong')} />,
};