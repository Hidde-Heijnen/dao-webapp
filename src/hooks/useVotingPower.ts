/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * © Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect, useState } from 'react';
import { useDiamondSDKContext } from '@/src/context/DiamondGovernanceSDK';
import { CONFIG } from '@/src/lib/constants/config';
import { Proposal } from '@secureseco-dao/diamond-governance-sdk';
import { BigNumber } from 'ethers';
import { useBalance } from 'wagmi';

export type UseVotingPowerData = {
  loading: boolean;
  error: string | null;
  // Voting power of given wallet
  votingPower: bigint;
  // Voting power of given wallet at the time of proposal creation
  proposalVotingPower: bigint | undefined;
  // Minimum voting power required to create a proposal
  minProposalVotingPower: bigint;
  getProposalVotingPower: (proposal: Proposal) => Promise<bigint>;
  refetch: () => void;
};

export type UseVotingPowerProps = {
  address: string | undefined;
  proposal?: Proposal;
  watch?: boolean;
};

/**
 * Hook to fetch the voting power (rep balance) of a given wallet
 * @param props.address Address of the wallet to fetch the voting power of
 * @returns Object containing the votingPower and a refetch function, as well as loading and error states
 */
export const useVotingPower = ({
  address,
  proposal,
  watch = false,
}: UseVotingPowerProps): UseVotingPowerData => {
  const [proposalVotingPower, setProposalVotingPower] =
    useState<BigNumber | null>(null);
  // ID of the proposal to which the proposalVotingPower applies
  const [proposalVotingPowerId, setProposalVotingPowerId] = useState<
    number | null
  >(null);
  const [minProposalVotingPower, setMinProposalVotingPower] =
    useState<BigNumber>(BigNumber.from(0));
  const { client } = useDiamondSDKContext();
  const {
    data: repData,
    error: repError,
    isLoading: repLoading,
    refetch,
  } = useBalance({
    address: address as `0x${string}` | undefined,
    token: CONFIG.DIAMOND_ADDRESS as `0x${string}` | undefined,
  });

  /**
   * Fetches the voting power of an address at the time of proposal creation through the Diamond Governance SDK.
   * Keeps into account the maximum voting power per wallet for the given proposal.
   * @param proposal Proposal to fetch the voting power of
   * @returns Voting power of the given wallet address at the time of proposal creation
   */
  const getProposalVotingPower = async (
    proposal: Proposal
  ): Promise<BigNumber> => {
    if (!client || !address) throw new Error('Client or address not set');

    const maxVotingPower = proposal.data.parameters.maxSingleWalletPower;

    const governance = await client.pure.IGovernanceStructure();
    const walletVotingPower = await governance.walletVotingPower(
      address,
      proposal.data.parameters.snapshotBlock
    );

    return walletVotingPower.gt(maxVotingPower)
      ? maxVotingPower
      : walletVotingPower;
  };

  // Update state variable for capped voting power
  const updateProposalVotingPower = async () => {
    if (!proposal) return;

    try {
      const cappedBal = await getProposalVotingPower(proposal);
      setProposalVotingPower(cappedBal);
      setProposalVotingPowerId(proposal.id);
    } catch (e) {
      console.error('Error fetching capped voting power', e);
    }
  };

  // Update state variable for minimum voting power required to create a proposal
  const updateMinProposalVotingPower = async () => {
    if (!client) return;

    try {
      const facet = await client.pure.IPartialVotingProposalFacet();
      const minVotingPowerData = await facet.getMinProposerVotingPower();
      setMinProposalVotingPower(minVotingPowerData);
    } catch (e) {
      console.error('Error fetching min proposal voting power', e);
    }
  };

  useEffect(() => {
    updateMinProposalVotingPower();
  }, [client, repData]);

  useEffect(() => {
    if (!proposal || proposal.id === proposalVotingPowerId) return;
    updateProposalVotingPower();
  }, [proposal]);

  return {
    loading: repLoading,
    error: repError?.message || '',
    votingPower: repData?.value || BigInt(0),
    proposalVotingPower: proposalVotingPower?.toBigInt(),
    minProposalVotingPower: minProposalVotingPower.toBigInt(),
    getProposalVotingPower: (proposal) =>
      getProposalVotingPower(proposal).then((res) => res.toBigInt()),
    refetch,
  };
};
