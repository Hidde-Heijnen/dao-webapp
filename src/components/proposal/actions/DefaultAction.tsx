/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * © Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IProposalAction } from '@/src/components/proposal/ProposalActions';
import ActionWrapper from '@/src/components/proposal/actions/ActionWrapper';
import { HiQuestionMarkCircle } from 'react-icons/hi2';

/**
 * Default action component, for when it has not yet been supported specifically
 * @returns Accordion showing a general action with its params
 */
const DefaultAction = ({ action }: { action: IProposalAction }) => {
  return (
    <ActionWrapper icon={HiQuestionMarkCircle} title="Unknown action">
      <p>This action is not supported in the web-app yet.</p>
    </ActionWrapper>
  );
};

export default DefaultAction;
