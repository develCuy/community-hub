# Key differences between Rollux and Optimism

In its current implementation as an optimistic rollup, Rollux draws some of its design from [Optimism Bedrock](https://github.com/ethereum-optimism/optimism). We are fans of Optimism and chose it as the basis of our L2 due to its relative maturity versus other rollup-based solutions, combined with the open source ethos of the OP Stack community.  

However, Rollux has differences that give the Rollux ecosystem and its users some significant advantages. These differences span the design of the rollup, how Rollux is supported by Layer 1 infrastructure, and how it provides data availability.   

| Area           | Optimism | Rollux |
| - | - | - |
| Layer 1 | Ethereum | [Syscoin NEVM](../sys) |
| L1 Data Availability | calldata/Danksharding | [PoDA](../protocol/2-rollup-protocol/#block-storage) |
| L1 Data Fee Market | Currently expensive | Very low cost |
| Ready for L3, L4 | No | [Yes](../protocol/2-rollup-protocol/#block-storage) |
| Native Coin (gas) | ETH | [SYS](https://coinmarketcap.com/currencies/syscoin/) |

Follow the links in the table to learn more about each area of difference.

For an in-depth firsthand view of these differences, you can view a full diff between the Rollux and Optimism code: [https://github.com/ethereum-optimism/optimism/compare/develop...sys-labs:rollux:develop](https://github.com/ethereum-optimism/optimism/compare/develop...sys-labs:rollux:develop).

## Roadmap to Decentralized Sequencing

SYS Labs researchers are at work to solve for decentralized sequencing in a new and novel way, and to implement it with Rollux. The overall goal is to support multiple concurrent sequencers in a manner that is Byzantine fault tolerant, with the same degree of decentralization offered by the L1 design, or as close as possible. We plan to share more about this soon.  

## Updates Underway
We are still expanding upon the summary of differences on this page!  Check back for new content.



<!---
### [Syscoin EVM integration](./changes.md)


### [Backend](./backend.md)


### [Bug fixes and miscellaneous](./misc.md)
--->