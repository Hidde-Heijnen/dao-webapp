/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * © Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable no-unused-vars */

import { useState } from 'react';
import { CONFIG } from '@/src/lib/constants/config';
import { AddressPattern } from '@/src/lib/constants/patterns';
import { TokenType } from '@/src/lib/constants/tokens';
import { TokenInfo, fetchTokenInfo } from '@/src/lib/utils/token';
import { useProvider } from 'wagmi';

export type TokenFetch = (
  address?: string,
  tokenType?: TokenType
) => Promise<TokenInfo | null>;

/**
 * Hook that provides an efficient fetch for the info about a token, using caching.
 * @returns An object containing a funciton to fetch the token info of a givena address.
 * @see fetchTokenInfo
 */
export const useTokenFetch = () => {
  const provider = useProvider({
    chainId: CONFIG.PREFERRED_NETWORK_ID,
  });

  // Store the token info of addresses that have been fetched before
  // Null means that the token info could not be fetched before, so probably won't be able at all
  const [cache, setCache] = useState<Map<string, TokenInfo | null>>(new Map());

  async function getTokenInfo(
    address?: string,
    tokenType: TokenType = TokenType.ERC20
  ): Promise<TokenInfo | null> {
    if (!address) return null;
    const cleanAddress = address.toLowerCase().trim();
    if (!AddressPattern.test(cleanAddress)) return null;

    // Check address against the cache
    if (cache.has(cleanAddress)) {
      console.log('Cache hit for token info', cleanAddress);

      return cache.get(cleanAddress) as TokenInfo;
    }
    console.log('Cache miss for token info', cleanAddress);

    try {
      const info = await fetchTokenInfo(cleanAddress, provider, tokenType);
      setCache(cache.set(cleanAddress, info));
      return info;
    } catch (e) {
      console.error(e);
      setCache(cache.set(cleanAddress, null));
      return null;
    }
  }

  return { getTokenInfo };
};
