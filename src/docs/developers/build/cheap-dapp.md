---
title: Making Rollux Dapps Even Cheaper
lang: en-US
---

The cost of using a decentralized application in Rollux is much lower than the cost of the equivalent application on L1 Syscoin (and Ethereum even more so).
However, with proper optimization, we can make our decentralized applications even cheaper.
Here are some strategies.


## Background

This is a basic introduction into some of the concepts you need to understand to fully optimise your contracts in the Rollux L2 environment.

### What are the transaction fees?

The cost of an L2 transaction on Rollux is composed of two components:

- L2 execution fee, which is proportional to the gas actually used in processing the transaction.
  Normally the cost of L2 gas is 0.001 gwei, but this may increase when the system is extremely congested. 
  Do not hardcode this value. 
  
- L1 data fee, which is proportional to:
  - The gas cost of settling the transaction's data with PoDA on L1
  - The cost of gas on L1.
    The cost of gas on L1 can be somewhat volatile. 
  
To retrieve current gas costs programatically, [see here](https://github.com/SYS-Labs/rollux-tutorial/tree/main/sdk-estimate-gas).

For a more in depth look at how transaction fees are calculated see our [fee documentation](transaction-fees.md).


## Modify the [ABI (application binary interface)](https://docs.soliditylang.org/en/latest/abi-spec.html)

[The standard ABI](https://docs.soliditylang.org/en/latest/abi-spec.html) was designed with L1 tradeoffs in mind. 
It uses four byte function selectors and pads values to a 32 byte size. 
Neither is optimal when using Rollux.

It is much more efficient to [create a shorter ABI with just the required bytes, and decode it onchain](https://ethereum.org/en/developers/tutorials/short-abi/).
All of your [`view`](https://docs.soliditylang.org/en/latest/contracts.html#view-functions) and [`pure`](https://docs.soliditylang.org/en/latest/contracts.html#pure-functions) functions can use the standard ABI at no cost.


## Use smaller values when possible

Your modified ABI is not going to pad values, so the less bytes you use the better.
For example, it is standard to use `uint256` for amounts.
This means that the highest number we can represent is 2<sup>256</sup>-1, or about 1.2*10<sup>77</sup>. 
When storing ETH balances, for example, using `uint256` is overkill as there are only [120 million ETH](https://ycharts.com/indicators/ethereum_supply). Thus, we can safely store SYS balances in `uint88` which is just eleven bytes.

Go through your contracts and identify any values that will never reach 32 bytes and reduce them to logical sizes. You can do this same process for ints, bytes and [other Solidity data types](https://docs.soliditylang.org/en/develop/types.html#types).

