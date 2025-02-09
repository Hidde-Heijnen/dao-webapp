/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * © Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect, useState } from 'react';
import { useDiamondSDKContext } from '@/src/context/DiamondGovernanceSDK';
import { getErrorMessage } from '@/src/lib/utils';
import { BigNumber } from 'ethers';

export type UseTotalVotingWeightData = {
  loading: boolean;
  error: string | null;
  totalVotingWeight: BigNumber;
  refetch: () => void;
};

export type UseTotalVotingWeightProps = {
  blockNumber: BigNumber | undefined;
  useDummyData?: boolean;
};

/**
 * @returns The total voting weight in the DAO
 */
export const useTotalVotingWeight = ({
  blockNumber,
  useDummyData = false,
}: UseTotalVotingWeightProps): UseTotalVotingWeightData => {
  const [totalVotingWeight, setTotalVotingWeight] = useState<BigNumber>(
    BigNumber.from(0)
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { anonClient } = useDiamondSDKContext();

  const fetchVotingWeight = async () => {
    if (!anonClient || !blockNumber) return;

    try {
      const governance = await anonClient.pure.IGovernanceStructure();
      const totalVotingWeightData =
        await governance.totalVotingPower(blockNumber);
      if (totalVotingWeightData) {
        setTotalVotingWeight(totalVotingWeightData);
        setLoading(false);
        setError(null);
      } else setTotalVotingWeight(BigNumber.from(0));
    } catch (e) {
      console.error(e);
      setError(getErrorMessage(e));
      setLoading(false);
    }
  };

  //** Set dummy data for development without querying Aragon API */
  const setDummyData = () => {
    setLoading(false);
    setError(null);
    setTotalVotingWeight(BigNumber.from('0x4563918244F40000'));
  };

  useEffect(() => {
    if (useDummyData) return setDummyData();
    if (anonClient) setLoading(true);
    fetchVotingWeight();
    setLoading(false);
  }, [anonClient, blockNumber]);

  return {
    loading,
    error,
    totalVotingWeight,
    refetch: () => (!useDummyData ? fetchVotingWeight() : void 0),
  };
};
