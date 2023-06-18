---
title: Protocol specs
lang: en-US
---

Rollux is the optimistic rollup that serves as Syscoin's official Layer 2. Rollux is built by SYS Labs. Based upon Optimism Bedrock, Rollux provides [EVM equivalence](https://medium.com/ethereum-optimism/introducing-evm-equivalence-5c2021deb306) and is close to 1:1 parity with standard EVM. Rollux goes further than Optimism plus Ethereum by providing the security of Bitcoin’s mining network and Syscoin’s decentralized Layer 1 finality and data availability. Rollux also aims to solve for decentralized sequencing in a new and novel way. Also, Rollux itself already provides Layer 2 data availability natively, which means it is already primed to support Layer 3 and beyond for "fractal scaling". All of this means Rollux is secure, scalable, costs very little to use, and is a big leap toward making blockchain tech viable for global mass adoption.

For a high level overview of the current protocol version, see ['How Rollux works'](./2-rollup-protocol.md) section.

## Next gen fault proofs

As part of Rollux's OVM 2.0 upgrade, the **Rollux fault proof mechanism had to be temporarily disabled**. This means that users of the Rollux network currently need to trust the Sequencer node (run by Syscoin Foundation) to publish valid state roots to Syscoin. **You can read more about our security model [here](../security-model/README.md)**. 

The Optimism team continues to make progress on the upgraded fault proof mechanism and expects to productionize their work in 2023, at which point Rollux will likewise implement it. You can keep up with their developments in the [Cannon repository](https://github.com/ethereum-optimism/cannon/).


## Decentralizing the sequencer

Currently, the non-profit Syscoin Foundation runs the sole sequencer on Rollux. This does not mean that Syscoin Foundation can censor user transactions. However, it is still desirable to decentralize the sequencer over time, perhaps eliminating the foundation's role entirely by anyone having the ability to participate in the network as a block producer.

SYS Labs researchers are at work to solve decentralized sequencing in a new and novel way, and to implement it with Rollux. The overall goal is to support multiple concurrent sequencers in a manner that is Byzantine fault tolerant, with the same degree of decentralization offered by the L1 design, or as close as possible.
