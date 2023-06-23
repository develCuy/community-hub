---
title: Bridging basics
lang: en-US
---

Although Rollux is an L2 (and therefore fundamentally connected to Syscoin), it's also a separate blockchain system.
App developers commonly need to move data and assets between Rollux and Syscoin.
We call the process of moving data and assets between the two networks "bridging".

## Sending tokens

For the most common usecase, moving tokens around, we've created the [Standard Token Bridge](./standard-bridge.md).
The Standard Token Bridge is a simple smart contract with all the functionality you need to move tokens between Rollux and Syscoin.
It also allows you to easily create L2 representations of existing tokens on Ethereum.

## Sending data

If the Standard Token Bridge doesn't fully cover your use case, you can also [send arbitrary data between L1 and L2](./messaging.md).
You can use this functionality to have a contract on Ethereum trigger a contract function on Rollux and vice versa.
We've made this process as easy as possible by giving developers a simple API for triggering a cross-chain function call.
We even [use this API under the hood](https://github.com/sys-labs/rollux/blob/a21cec6d3d00c9d7ed100c0257d4b966b034620f/packages/contracts/contracts/L1/messaging/L1StandardBridge.sol#L202) inside the Standard Token Bridge.
