---
title: Developer docs
lang: en-US
---

Welcome to the Rollux developer docs!

Whether you're just looking to [deploy a basic contract](https://github.com/SYS-Labs/rollux-tutorial/tree/main/getting-started) or you're ready to [build a cross-chain app](./bridge/messaging.md), you'll be able to find everything you need to start building on Rollux within this section.

If you're looking for third-party tools that make building on Rollux easier, check out the [Tools for Developers](../useful-tools) section. Rollux is EVM-equivalent and uses the standard go-ethereum client, so any tool that works with Ethereum can work just as well on Rollux.

## Where should I start?

### Just getting started with Rollux?

If you're brand new to Rollux, we recommend checking out the [guide to deploying a basic contract](https://github.com/SYS-Labs/rollux-tutorial/tree/main/getting-started).
It'll get you familiar with the core steps required to get a contract deployed to the network.
Being EVM equivalent means it's 100% the same as deploying a contract to Ethereum.

If you're a bit more familiar with Rollux and Syscoin (or Ethereum), you can try walking through one of the various [tutorials](https://github.com/SYS-Labs/rollux-tutorial) put together by the Rollux community.
They'll help you get a headstart when building your first Rollux project.

### Ready to deploy a contract?

If you're looking to deploy your contracts to the Rollux mainnet or the Rollux Tanenbaum testnet, take a look at the [getting started tutorial](https://github.com/SYS-Labs/rollux-tutorial/tree/main/getting-started#development-stacks).
It contains sample configuration files for deploying your contracts from common frameworks like Hardhat, Truffle, and Brownie.

You might also want to check out our guides for [running a local development environment](./build/dev-node.md) or [running your own Rollux node](./build/run-a-node.md).
These guides are designed to help you feel totally confident in your Rollux deployment.

### Want to explore the cross-chain frontier?

We've got detailed guides for that.
If you want to bridge a token from Syscoin to Rollux (or vice versa!), you should learn more about our [Standard Token Bridge](./bridge/standard-bridge.md).
The Standard Token Bridge makes the process of moving tokens between chains as easy as possible.

If you're looking for something more advanced, we recommend reading through our page on [sending data between L1 and L2](./bridge/messaging.md).
Contracts on one chain can trigger contract functions on the other chain, it's pretty cool!
We even dogfood the same infrastructure and use it under the hood of the Standard Token Bridge.

## Still don't know where to look?

If you can't find the content you're looking for you've got a few options to get extra help.
We recommend first searching through this documentation (search bar at the top right).
If you've already done this and come up short, you can try [asking us a question in Discord](https://discord.gg/rollux), [checking the Help Center](https://rollux.com/help), or [making an issue on GitHub](https://github.com/SYS-Labs/community-hub/issues).
