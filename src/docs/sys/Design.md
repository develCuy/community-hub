---
title: Overall System Design 
lang: en-US
---


## Overall System Design

Rollux aims to take the best of Bitcoin (security through merged mining), apply finality to solve for selfish-mining, and combine all of this with the best of Ethereum (its roadmap towards modularity — Optimistic and ZK Rollups), and Syscoin’s own efficient Layer 1 data availability in the form of [PoDA (Proof-of-Data-Availability)](PoDA.md) which is a stark contrast to Ethereum’s danksharding.

### Transactions

PoDA transactions are just regular transactions. Syscoin does not shard the data nor does it need a new honest majority assumption on the data nor its inclusion on the blockchain. The Syscoin layer 1 philosophy includes the idea of a full node only trusting itself, thus all full nodes review the entire data set for censorship resistant information of layer 2/layer 3 running on top of Syscoin NEVM. To do so, we use hash-based blobs (which we will expand on below). Not only is this performant enough to parameterize Syscoin for global adoption of secure, decentralized settlement of smart contracts, it also eliminates the need for trusted setups. Plus, finality is quantum-safe without introducing new/extra/unproven cryptographic assumptions.

### Block Size

Syscoin's NEVM chain was launched providing only an 8M gas limit on L1 blocks — half of Ethereum’s current gas limit, with a block target significantly longer at 2.5 minutes (of course dynamically adjustable by miners in majority). By this, we will prove you can scale up without requiring huge blocks on L1. State transitions of L2 are tiny. This means Syscoin will remain nimble, efficient, and easy for regular off-the-shelf computers to sync with, fostering decentralization.

Now, two very important concepts should be explained in regard to Syscoin’s design. These are [Finality](Finality.md) and [Data Availability](PoDA.md).

