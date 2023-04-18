/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * © Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * The MainCard module provides a customizable card component with an icon, header, and aside section.
 * It is designed to be used as a main container for other components and elements.
 */

import { HiArrowTopRightOnSquare, HiLink } from 'react-icons/hi2';
import { DefaultMainCardHeader, MainCard } from '../ui/MainCard';
import { Card } from '@/src/components/ui/Card';
import { ProposalResource } from '@/src/hooks/useProposal';

/**
 * MainCard component for displaying resources
 * @param props.resources List of resources to be displayed in the card
 * @param props.loading Whether or not the card should show a loading state
 */
export const ProposalResources = ({
  resources,
  loading = false,
  className,
}: {
  resources: ProposalResource[] | undefined;
  loading?: boolean;
  className?: string;
}) => {
  // Filter out empty entries in resources array
  const filtered = resources?.filter((resource) => resource.url !== '');

  return (
    <MainCard
      loading={loading ?? resources ? true : false}
      className={className + ' shrink'}
      icon={HiLink}
      header={
        <DefaultMainCardHeader
          value={resources?.length ?? 0}
          label="resources"
        />
      }
    >
      {!filtered || filtered.length === 0 ? (
        <div className="italic text-slate-500 dark:text-slate-400">
          No resources added
        </div>
      ) : (
        <ul className="space-y-2">
          {filtered.map((resource) => (
            <li key={resource.url}>
              <Card padding="sm" variant="light">
                <a
                  href={resource.url}
                  rel="noreferrer"
                  target="_blank"
                  className="flex flex-row items-center gap-x-2 font-medium text-primary-500 transition-colors duration-200 hover:text-primary dark:hover:text-primary-400"
                >
                  {resource.name}
                  <HiArrowTopRightOnSquare className="h-4 w-4 shrink-0" />
                </a>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {resource.url}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </MainCard>
  );
};
