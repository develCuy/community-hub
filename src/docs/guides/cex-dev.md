---
title: Adding Rollux to your centralized exchange
lang: en-US
---

## Connecting to Rollux

You connect to Rollux the same way you do to Syscoin NEVM or Ethereum, by connecting to a JSON RPC endpoint. 
The supported release for Rollux is Istanbul, so it supports EIP-1559.

### Endpoints

[Click here for the Rollux endpoints](../useful-tools/networks.md). You can choose between our public endpoints, which are rate limited, and [endpoints from infrastructure providers](../useful-tools/networks.md). Given rate throughput limits, we recommend using a private rpc provider like [Ankr](https://www.ankr.com) for both mainnet and testnet use cases. 

### SYS balance

In Rollux, SYS is used precisely the way that SYS is used in L1 Syscoin NEVM, and that ETH is used in Ethereum.

### Token addresses

The ERC-20 contract address for a token on Rollux may be different from the address for the same token on Syscoin.

To get the total balance of a user that uses Rollux, you need to:

1. Connect to a standard Syscoin L1 endpoint and submit a `balanceOf` query with the token contract address on Syscoin.
1. Connect to a Rollux endpoint and send a `balanceOf` query with the token contract address on Rollux.

<!---[The list of tokens and their addresses is here](https://static.optimism.io/optimism.tokenlist.json).

For example, looking at the **SNX** token, we get these addresses:

| ChainID | Network | Address |
| -: | - | - |
| 1  | Ethereum    | 0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f |
| 10 | Optimism    | 0x8700daec35af8ff88c16bdf0418774cb3d7599b4
| 5 | Goerli (test network) | 0x51f44ca59b867E005e48FA573Cb8df83FC7f7597
| 420 | Optimistic Goerli (test network) | 0x2E5ED97596a8368EB9E44B1f3F25B2E813845303

To get the total SNX balance of a user that uses Optimism you need to:

1. Connect to a standard Ethereum endpoint and send a `balanceOf` query to address `0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f`.
1. Connect to an Optimism endpoint and send a `balanceOf` query to address `0x8700daec35af8ff88c16bdf0418774cb3d7599b4`.

--->

## Deposits and withdrawals within Rollux

The ERC-20 contracts on Rollux function the same way they do on Syscoin NEVM and Ethereum, so you can use your existing code for withdrawals and deposits. Just connect to a Rollux endpoint.


### Transaction fees

Most of the cost of an Optimism transaction is not the gas consumed by the transaction itself, but the cost of writing the transaction to Syscoin. That cost is deducted automatically from the user's balance on Rollux. If you charge your users the cost of withdrawals, you have to account for it.

[You can read more about this subject here](../developers/build/transaction-fees.md).
The relevant code is [here](https://github.com/SYS-Labs/rollux-tutorial/tree/main/sdk-estimate-gas).


## Deposits and withdrawals across chains

As a centralized exchange, there will be times that withdrawals of SYS or an ERC-20 token on either Rollux or Syscoin NEVM exceed deposits and you need to transfer assets. 
To do that you use a bridge or a gateway. 
We have a [standard gateway](https://rollux.com/bridge) that receives assets on L1 (Syscoin NEVM mainnet), and mints the equivalent asset on Optimism. 
When a user wants to withdraw the assets back to L1, the bridge burns the asset on L2 and releases it to the user on L1. If you want to use this gateway automatically, [follow this tutorial for SYS](https://github.com/SYS-Labs/rollux-tutorial/tree/main/cross-dom-bridge-eth) or [this one for ERC-20 tokens](https://github.com/SYS-Labs/rollux-tutorial/tree/main/cross-dom-bridge-erc20).

Note that while L1 to L2 transactions typically take minutes, L2 to L1 transaction on the gateway require [a seven day challenge period](https://help.optimism.io/hc/en-us/articles/4411895558171-Why-do-I-need-to-wait-a-week-when-moving-assets-out-of-Optimism-).

Alternatively, you can use a [third party bridge](https://www.optimism.io/apps/bridges). These bridges usually rely on liquidity pools to allow for faster withdrawals and support multiple L2 chains. However, their token selection might be more limited and they are typically not as decentralized as our gateway.

When an ERC-20 token does not have a Rollux equivalent you can create one. 
If there is no need for custom business logic, you can [follow the steps in this tutorial](https://github.com/SYS-Labs/rollux-tutorial/tree/main/standard-bridge-standard-token).
If you need to implement some kind of custom logic, [see this tutorial](https://github.com/SYS-Labs/rollux-tutorial/tree/main/standard-bridge-custom-token).


## Audit reports

* For a full list of audit reports, visit [GitHub](https://github.com/SYS-Labs/rollux/tree/develop/technical-documents/security-reviews). 
