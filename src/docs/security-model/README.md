---
title: Rollux's Security Model
lang: en-US
---


Being an optimistic rollup, Rollux "piggy-backs" or inherits *external* security from the [Syscoin L1](../sys/README.md). Even so, it is important to understand that Rollux is a work in progress.
Improving the *internal* security guarantees that users have while using Rollux is a top priority.
At the moment, it’s important to understand that the security of the Rollux blockchain is dependent on a multisig wallet managed by several anonymous individuals.
This multisig wallet can be used to upgrade core Optimism smart contracts without upgrade delays.

Please also keep in mind that just like any other system, **the Rollux codebase may contain unknown bugs** that could lead to the loss of some or all of the assets held within the system.
[The Rollux smart contract codebase has been audited, and is based upon the continually-audited Optimism codebase](https://github.com/sys-labs/rollux/tree/develop/technical-documents/security-reviews) but **audits are not a stamp of approval** and **a completed audit does not mean that the audited codebase is free of bugs.**
It’s important to understand that using Rollux inherently exposes you to the risk of bugs within the Rollux or Optimism codebase, and that you use Rollux at your own risk.


## Security Model FAQ

### Does Rollux have fault proofs?

**No**, Rollux does not currently have fault proofs.
**Fault proofs do not meaningfully improve the security of a system if that system can be upgraded within the 7 day challenge window (”fast upgrade keys”)**.
A system with fast upgrade keys, such as Rollux, is fully dependent on the upgrade keys for security.
Rollux’s goal is to deploy fault proofs that can secure the system by themselves, without fast upgrade keys.

### Who manages the multisig?

The multisig is managed by an anonymous set of individuals.
Members are anonymous in order to make the multisig more difficult to compromise.

### How is Rollux planning to remove the multisig?

The path to decentralized Rollux infrastructure follows new and novel research by SYS Labs rather than directly copying Optimism's research and plans. In the future we will provide further details on how the multisig will be removed in a way that can make Rollux provide true fault proof security.

### How can I help make Rollux more secure?

If you identify bugs or vulnerabilities in Rollux, report them at the [Rollux GitHub repository](https://github.com/SYS-Labs/rollux). If you discover a bug with a cause rooted in Optimism's codebase, you should also take advantage of the fact that [Optimism has one of the biggest bug bounties (ever)](https://community.optimism.io/docs/security-model/bounties/).
At the time of writing this, you can earn up to $2,000,042 by finding critical bugs in the Optimism codebase. Whether your bug is particular to Rollux or affects Optimism, do make the SYS Labs team aware of it via the [Rollux GitHub](https://github.com/SYS-Labs/rollux). 

<!--- You can also [run your own verifier node](https://github.com/smartcontracts/simple-optimism-node/) to detect network faults. -->
