---
title: Supporting Rollux in your wallet
lang: en-US
---

## Overview

This guide is intended for wallet developers who want to give their users the ability to send transactions on the Rollux network.
Rollux generally behaves like any other EVM-based chain with the exception of minor discrepancies related to [transaction fees](#transaction-fees).
These fee discrepancies are an inherent result of the fact that Rollux is a Layer 2 blockchain network that must publish transaction data to Syscoin.

## Connecting to Rollux

Rollux shares the [Ethereum JSON-RPC API](https://eth.wiki/json-rpc/API) with only [a few minor differences](../developers/build/json-rpc.md).
You'll find all of the important information about each Optimism network on [our Networks page](../useful-tools/networks.md).
You can choose to connect to Rollux via our rate-limited public endpoints, [private endpoints from infrastructure providers](../useful-tools/networks.md), or [by running your own node](../developers/build/run-a-node/).
Because of throughput limits, we recommend using private node providers or running your own node for production applications.

## Canonical token addresses

The ERC-20 contract address for a token on Rollux may be different from the address for the same token on Syscoin or Ethereum.
<!--- Rollux maintains [a token list](https://static.optimism.io/optimism.tokenlist.json) that includes known addresses for many popular tokens. -->

## Transaction status

A transaction in Rollux can be in one of two states:

1. **Sequencer Confirmed**: The transaction has been accepted by the sequencer on Rollux (L2)
2. **Confirmed On-Chain**: The transaction has been written to Syscoin (L1)

There is still work being done on the tooling to easily detect when a given transaction has been published to Syscoin.
For the moment, we recommend wallets consider transactions final after they are "Sequencer Confirmed".
Transactions are considered "Sequencer Confirmed" as soon as their transaction receipt shows at least one confirmation.

## Transaction fees

Rollux is based upon Optimism Bedrock which makes it near [EVM equivalent](https://medium.com/ethereum-optimism/introducing-evm-equivalence-5c2021deb306), meaning Rollux minimizes the differences between Rollux and Ethereum.
You can see a summary of the few differences between Rollux and Ethereum [here](../developers/build/differences.md).
One of the most important discrepancies can be found within the Rollux fee model.
As a wallet developer, you **must** be aware of this difference.

### Estimating total fees

Most of the cost of a transaction on Rollux comes from the cost of publishing the transaction to Syscoin.
This publication step is what makes Rollux a Layer 2 blockchain.
Unlike with the standard execution gas fee, users cannot specify a particular gas price or gas limit for this portion of their transaction cost.
Instead, this fee is automatically deducted from the user's SYS balance on Rollux when the transaction is executed.

[You can read more about this subject here](../developers/build/transaction-fees.md),
or use [this tutorial](https://github.com/syscoin/rollux-tutorial/tree/main/sdk-estimate-gas).
The total fee paid by a transaction will be a combination of the normal fee estimation formula (`gasPrice * gasLimit`) in addition to the estimated L1 fee.

### Displaying fees

We **highly recommend** displaying fees on Rollux as one unified fee to minimize user confusion.
You can do this by combining both portions of the fee (the L2 execution fee and the L1 data fee) into a single value presented to the end user.

### Sending "max" SYS

Many wallets allow users to send the maximum amount of SYS available in the user's balance.
Of course, this requires that the predicted fee for the send transaction be deducted from the SYS balance being sent.
You **MUST** deduct both the L2 execution fee and the L1 data fee or the charged fee plus the balance sent will exceed the user's balance and the transaction will fail.

### Displaying the gas prices

If you want to display the current gas prices, you can [use the `eth_gasPrice` RPC method](../developers/build/json-rpc.md#rollup-gasprices).
