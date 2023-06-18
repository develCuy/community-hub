---
title: Rollup Protocol
lang: en-US
---

One of the big ideas that makes Rollux possible is the optimistic rollup.
We'll go through a brief explainer of *how* optimistic rollups work at a high level.
Then we'll explain *how* Rollux is built as an optimistic rollup and why we believe it's the best option for a system that addresses all of our design goals.

## optimistic rollups TL;DR

Rollux is an "optimistic rollup," which is basically just a fancy way of describing a blockchain that piggy-backs off of the security of another "parent" blockchain.
Specifically, optimistic rollups take advantage of the consensus mechanism (like PoW or PoS) of their parent chain instead of providing their own.
In Rollux's case this parent blockchain is Syscoin, which is PoW at its base.


## Block storage

<details>
<summary><b>Syscoin L1 Data Availability for Rollux</b></summary>
Unlike Optimism which must expensively store blocks on the Ethereum L1 as calldata, Rollux L2 blocks are stored via Syscoin's Layer 1 PoDA protocol (Proof-of-Data-Availability). A proof of the block is stored on Syscoin's native (UTXO) blockchain, and the entirety of the raw block data is stored in the cloud via Syscoin full nodes that also function as PoDA cloud clients.

We highly recommend referring to Syscoin's article ["Revealing the Method in the Madness"](https://syscoin.org/news/revealing-the-method-in-the-madness), sections "Optimistic Rollup with PoDA (Proof of Data Availability)" and "Proof of Data Availability (PoDA)" for a high level understanding of Syscoin PoDA and its benefits.

PoDA already provides a number of benefits over Ethereum's work-in-progress and future DA solution (proto-danksharding):


1. PoDA does not need to shard data. Every full node processes blobs fully.
   - Trust yourself only
   - Fewer attack vectors, more resistant to censorship
   - Data is simple to reproduce and check
   - Syscoin can prune data much quicker, and tie in pruning with finality + 6 hours.
2. PoDA uses Keccak-based blobs instead of KZG commitments.
   - No trusted setup
   - Quantum safe
   - Very performant

Go compare Rollux's and Optimism's approaches to data availability firsthand by viewing this Github commit: [https://github.com/sys-labs/rollux/commit/25a4c9410ddae31ff7195f67495491f71e684e03](https://github.com/sys-labs/rollux/commit/25a4c9410ddae31ff7195f67495491f71e684e03). You can also view the full diff here: [https://github.com/ethereum-optimism/optimism/compare/develop...sys-labs:rollux:develop](https://github.com/ethereum-optimism/optimism/compare/develop...sys-labs:rollux:develop).

</details>  

<details>
<summary><b>Rollux L2 Data Availability for supporting L3 and beyond (fractal scaling)</b></summary>

Another key differentiator in Rollux's favor is that it is already primed to support L3s and fractal scaling with proper data availability. This is because Rollux offers its own implementation of PoDA natively. This means other layers can use Rollux for data availability. Rollux PoDA handles data storage in a similar manner as Syscoin, with the added benefits of more throughput and even lower costs. Fractal layers using Rollux also inherit the security of Syscoin's L1, as Rollux stores its own block data there. 

</details>

## Block production

Rollux block production at present is primarily managed by a single party, called the "sequencer," which helps the network by providing the following services:

- Providing transaction confirmations and state updates.
- Constructing and executing L2 blocks.
- Submitting user transactions to L1.

Being based upon Optimism Bedrock, the sequencer does have a mempool, similar to Syscoin NEVM or Ethereum, but the mempool is private to avoid opening opportunities for MEV. Blocks are produced every two seconds, regardless of whether they are empty (no transactions), filled up to the block gas limit with transactions, or anything in between.

Transactions get to the sequencer in two ways:

1. Transactions submitted on L1 (called *deposits* whether they have assets attached or not) are included in the chain in the appropriate L2 block.
   Every L2 block is identified by the "epoch" (the L1 block to which it corresponds, which typically has happened a few minutes before the L2 block) and its serial number within that epoch.
   The first block of the epoch includes all the deposits that happened in the L1 block to which it corresponds.
   If the sequencer attempts to ignore a legitimate L1 transaction it ends up with a state that is inconsistent with the verifiers, same as if the sequencer tried to fake the state by other means.
   This provides Optimism with L1 Syscoin level censorship resistance.
   You can read more about this mechanism [is the protocol specifications](https://github.com/sys-labs/rollux/blob/develop/specs/derivation.md#deriving-the-transaction-list).

1. Transactions submitted directly to the sequnecer. 
   These transactions are a lot cheaper to submit (because you do not need the expense of a separate L1 transaction), but of course they cannot be made censorship resistant, because the sequencer is the only entity that knows about them.

For the moment, the non-profit Syscoin Foundation runs the only block producer. Refer to [Protocol specs](../protocol/README.md) section for more information about how we plan to decentralize the Sequencer role in the future.

## Block execution

The execution engine (implemented as the `op-geth` component) receive blocks using two mechanisms:

1. The execution engine can update itself using peer to peer network with other execution engines.
   This operates the same way that the L1 execution clients synchronize the state across the network.
   You can read more about it [in the specs](https://github.com/sys-labs/rollux/blob/develop/specs/exec-engine.md#happy-path-sync). 

1. The rollup node (implemented as the `op-node` component) derives the L2 blocks from L1.
   This mechanism is slower, but censorship resistant.
   You can read more about it [in the specs](https://github.com/sys-labs/rollux/blob/develop/specs/exec-engine.md#worst-case-sync).


## Bridging assets between layers

Rollux is designed so that users can send arbitrary messages between smart contracts on Rollux and Syscoin.
This makes it possible to transfer assets, including ERC20 tokens, between the two networks.
The exact mechanism by which this communication occurs differs depending on the direction in which messages are being sent.

Rollux uses this functionality in the Standard bridge to allow users to deposit assets (ERC20s and SYS) from Syscoin to Rollux and also allow withdrawals of the same from Rollux back to Syscoin.
See the [developer documentation and examples](../developers/bridge/standard-bridge/) on details on the inner workings of the Standard bridge.

### Moving from Syscoin to Rollux

In Rollux terminology, transactions going from Syscoin (L1) to Rollux (L2) are called *deposits*, even if they do not have any assets attached to them.

The contract interface for deposits is very similar, you use [`L1CrossDomainMessenger`](https://github.com/sys-labs/rollux-tutorial/tree/main/cross-dom-comm) or [`L1StandardBridge`](https://github.com/sys-labs/rollux/blob/develop/packages/contracts-bedrock/contracts/L1/L1StandardBridge.sol).
Deposit transactions become part of the canonical blockchain in the first L2 block of the "epoch" corresponding to the L1 block where the deposits were made. 
This L2 block will usually be created a few minutes after the corresponding L1 block.
You can read more about this [in the specs](https://github.com/sys-labs/rollux/blob/develop/specs/deposits.md).


### Moving from Rollux to Syscoin

Withdrawals (the term is used for any Rollux to Syscoin message, regardless of whether it has attached assets or not) have three stages:

1. You initialize withdrawals with an L2 transaction.

1. Wait for the next output root to be submitted to L1 (you can see this on [the SDK](../sdk/js-client.md)) and then submit the withdrawal proof using `proveWithdrawalTransaction`.
   This new step enables off-chain monitoring of the withdrawals, which makes it easier to identify incorrect withdrawals or output roots.
   This protects Optimism users against a whole class of potential bridge vulnerabilities.

1. After the fault challenge period ends (a week on mainnet, less than that on the test network), finalize the withdrawal.

[You can read the full withdrawal specifications here](https://github.com/sys-labs/rollux/blob/develop/specs/withdrawals.md)



## Fault proofs

In an optimistic rollup, state commitments are published to Syscoin without any direct proof of the validity of these commitments.
Instead, these commitments are considered pending for a period of time (called the "challenge window").
If a proposed state commitment goes unchallenged for the duration of the challenge window (currently set to 7 days), then it is considered final.
Once a commitment is considered final, smart contracts on Syscoin can safely accept withdrawal proofs about the state of Rollux based on that commitment.

When a state commitment is challenged, it can be invalidated through a "fault proof" ([formerly known as a "fraud proof"](https://github.com/ethereum-optimism/optimistic-specs/discussions/53)) process.
If the commitment is successfully challenged, then it is removed from the `StateCommitmentChain` to eventually be replaced by another proposed commitment.
It's important to note that a successful challenge does not roll back Rollux itself, only the published commitments about the state of the chain.
The ordering of transactions and the state of Rollux is unchanged by a fault proof challenge.

The fault proof process is currently undergoing major redevelopment as a side-effect of the November 11th [EVM Equivalence](https://medium.com/ethereum-optimism/introducing-evm-equivalence-5c2021deb306) update.
You can read more about this process within the [Protocol specs](../protocol/README.md) section of this website.

