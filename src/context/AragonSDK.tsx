/**
 * @see https://devs.aragon.org/docs/sdk/examples/ - Aragon SDK Context setup
 * Exports a React Context that provides the Aragon SDK Context and Client.
 * This context is used by the useAragonSDK hook.
 */

import { createContext, useContext, useEffect, useState } from 'react';
import {
  Client,
  Context,
  ContextParams,
  ContextPlugin,
  TokenVotingClient,
} from '@aragon/sdk-client';
import { useProvider, useSigner } from 'wagmi';
import { Contract } from 'ethers';
import { erc20ABI } from 'wagmi';

type SDKContext = {
  context?: Context;
  client?: Client;
  votingClient?: TokenVotingClient;
  votingPluginAddress?: string;
  repTokenContract?: Contract;
};

const AragonSDKContext = createContext<SDKContext>({});
const votingPluginAddress = '0xfc9ef7e0ea890e86864137e49282b21a0a1f6e5e';
const repTokenAddress = '0xdAC85cFabEF4da96D426185Ea050d9A947bE1C5f';

export function AragonSDKWrapper({ children }: any): JSX.Element {
  const [context, setContext] = useState<Context | undefined>(undefined);
  const [client, setClient] = useState<Client | undefined>(undefined);
  const [votingClient, setVotingClient] = useState<
    TokenVotingClient | undefined
  >(undefined);
  const [repTokenContract, setRepTokenContract] = useState<
    Contract | undefined
  >(undefined);

  const signer = useSigner().data || undefined;
  const provider = useProvider({
    chainId: import.meta.env.VITE_PREFERRED_NETWORK_ID,
  });

  // TODO: Add support for Polygon
  // e.g. for network: import.meta.env.DEV ? 'goerli' : 'polygon'
  useEffect(() => {
    // TODO: remove this line, but somehow still handle the case where signer is undefined, but we do want to fetch basic info from the DAO
    //if (!signer) return;

    const aragonSDKContextParams: ContextParams = {
      network: 'goerli',
      signer,
      daoFactoryAddress: '0x16B6c6674fEf5d29C9a49EA68A19944f5a8471D3', // Check active addresses here: https://github.com/aragon/osx/blob/develop/active_contracts.json
      web3Providers: ['https://rpc.ankr.com/eth_goerli'],
      ipfsNodes: [
        {
          url: 'https://testing-ipfs-0.aragon.network/api/v0',
          headers: { 'X-API-KEY': import.meta.env.VITE_IPFS_KEY || '' },
        },
      ],
      graphqlNodes: [
        {
          url: 'https://subgraph.satsuma-prod.com/qHR2wGfc5RLi6/aragon/osx-goerli/version/v1.1.0/api', //'https://subgraph.plopmenz.com/subgraphs/name/PlopGraph/version/v0.0.1/api'
        },
      ],
    };

    setContext(new Context(aragonSDKContextParams));
  }, [signer]);

  useEffect(() => {
    if (!context) return;
    setClient(new Client(context));
    const contextPlugin = ContextPlugin.fromContext(context);
    setVotingClient(new TokenVotingClient(contextPlugin));
  }, [context]);

  useEffect(() => {
    setRepTokenContract(new Contract(repTokenAddress, erc20ABI, provider));
  }, [provider]);

  return (
    <AragonSDKContext.Provider
      value={{
        context,
        client,
        votingClient,
        votingPluginAddress,
        repTokenContract,
      }}
    >
      {children}
    </AragonSDKContext.Provider>
  );
}

export function useAragonSDKContext(): SDKContext {
  return useContext(AragonSDKContext);
}
