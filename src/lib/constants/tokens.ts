/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * © Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * Contains the metadata about DAO tokens.
 * Similair to chains.ts.
 * */
export const TOKENS = {
  rep: {
    name: 'SecureSECO Reputation',
    symbol: 'SECOREP',
    decimals: 18,
  },
  secoin: {
    name: 'SecureSECO Coin',
    symbol: 'SECOIN',
    decimals: 18,
  },
} as const;
