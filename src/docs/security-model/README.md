---
title: Rollux Mainnet Beta status
lang: en-US
---

Rollux — the first permissionless layer 2 rollup with EVM-equivalence backed by the security of Bitcoin's network — is live on mainnet. These are very exciting times, and we are just as thrilled as you are! Here are the things you should be mindful of in regard to Rollux mainnet being in its Beta phase currently.

## General Words Of Caution

### Software Bugs
SYS Labs' and Syscoin Foundation's implementation of Rollux has been carefully constructed, has been audited, and is continually audited, reviewed, and tested according to engineering best-practices. Rollux is also based upon Optimism Bedrock which is a continually-audited codebase.  That said, be aware that audits are not a stamp of approval and a complete audit does not mean that the audited codebase is free of bugs. There remains the possibility that our codebase contains some undiscovered vulnerabilities that can put user funds at risk. All users should carefully account for this risk in their decision to use Rollux, and in deciding how much of their value to introduce into the system.

### Scams
Rollux, like Ethereum and Syscoin NEVM, is permissionless. That means anybody can deploy any smart contract code they want. Users should treat interacting with contracts on Rollux exactly as they do with Ethereum or Syscoin NEVM. In other words, they should only do so if they have good reason to trust that the application is secure.

## The Rollux Mainnet Beta security model
Being an optimistic rollup, Rollux "piggy-backs" or inherits *external* security from the Syscoin L1. Even so, it is important to understand that Rollux is a work in progress. Improving the *internal* security guarantees that users have while using Rollux is a top priority. At the moment, it’s important to understand that the security of the Rollux blockchain is dependent on a multisig wallet managed by several anonymous individuals. This multisig wallet can be used to upgrade core Optimism smart contracts without upgrade delays.

### Security Model FAQ

### Does Rollux have fault proofs?

**No**, Rollux does not currently have fault proofs.
**Fault proofs do not meaningfully improve the security of a system if that system can be upgraded within the 7 day challenge window (”fast upgrade keys”)**.
A system with fast upgrade keys, such as Rollux, is fully dependent on the upgrade keys for security.
Rollux’s goal is to deploy fault proofs that can secure the system by themselves, without fast upgrade keys.

### Who manages the multisig?

The multisig is managed by an anonymous set of individuals.
Members are anonymous in order to make the multisig more difficult to compromise.

### How is Rollux planning to remove the multisig and introduce decentralized sequencing?

The path to decentralized Rollux infrastructure follows new and novel research by SYS Labs. In the future we will provide further details on the means that will enable the multisig to be removed, and make Rollux provide true fault proof security in a way that is decentralized and Byzantine fault tolerant.

### How can I help make Rollux more secure?

If you identify bugs or vulnerabilities in Rollux, report them at the [Rollux GitHub repository](https://github.com/SYS-Labs/rollux). If you discover a bug with a cause rooted in Optimism's codebase, you should also take advantage of the fact that [Optimism has one of the biggest bug bounties (ever)](https://community.optimism.io/docs/security-model/bounties/).
At the time of writing this, you can earn up to $2,000,042 by finding critical bugs in the Optimism codebase. Whether your bug is particular to Rollux or affects Optimism, do make the SYS Labs team aware of it via the [Rollux GitHub](https://github.com/SYS-Labs/rollux). 
