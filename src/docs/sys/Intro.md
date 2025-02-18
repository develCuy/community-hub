---
title: Introduction to Syscoin
lang: en-US
---

Rollux is fast, crazy inexpensive, and attracts a lot of attention! Once you see *why* Rollux is built on Syscoin, and get an overview of what Syscoin has to offer, we think you will be just as excited about SYS. After all, the great things Rollux provides would not be achievable without the appropriate L1 supporting it from beneath. 

## Syscoin in a Nutshell

Syscoin is designed as the ideal L1 and data availability layer for modular scaling technologies like rollups. It provides a coordinated dual-chain stack;

1. Syscoin native (UTXO, Bitcoin-based)
2. Syscoin NEVM (Network-Enhanced Virtual Machine) which provides an EVM

**Syscoin makes rollups more secure with its Bitcoin auxPoW settlement, multi-quorum finality, and efficient data availability in the form of [PoDA (Proof-of-Data-Availability)](PoDA.md).** PoDA is the very first complete L1 data availability solution ever built and deployed to a main network. Furthermore, Syscoin provides finality in the form of a multi-quorum BLS signature scheme as an enhancement on top of Nakamoto consensus which adds resistance selfish mining, and keeps the chain resilient in the face of non-final scenarios by enabling the protocol to resolve down to pure Nakamoto consensus instead of forking/stopping in those situations, unlike Ethereum's Casper.

**PoDA and multi-quorum finality are unique innovations of Syscoin.**

<div align="center">
<img width="800" src="../../assets/docs/sys/overall.png">
</div>

## Super bullish on modularity

Syscoin NEVM was launched to mainnet with only an 8M gas limit on L1 blocks — less than half of Ethereum’s current gas limit. What's even wilder is NEVM's block target is 15 times longer than Ethereum's, at 2.5 minutes (of course dynamically adjustable by miners in majority). With this, Syscoin flexes that it can provide real scalability without requiring huge blocks on L1. It will remain nimble, efficient, and easy for regular off-the-shelf computers to sync with, even while supporting a great deal of demand. Talk about fostering decentralization. **How's that for making a statement?**  This also solves the contentious problem of proper incentives for proper usage. End-users will almost always opt to use Rollux instead of using the L1 directly, which means more real-estate for scaling layers to settle on Syscoin's L1.


## How does Syscoin help rollups work optimally?

Rollups are the first modular technology to viably help scale EVM computation to massive user demand. Rollups are also key to achieving a near-optimal scenario in the blockchain trilemma. Syscoin asserts this can only be achieved by supporting rollups with a holistically modular Layer 1 that offers proven security, data availability, and decentralization.

Syscoin is designed holistically with this in mind. All near-instant activity on Rollux inherits the full security of Syscoin’s L1 in the background, including finality.

Here are some ways Syscoin shines for rollups.

### Bitcoin Merge-Mined PoW
Syscoin is [merge-mined](https://docs.syscoin.org/docs/tech/merged-mining) by Bitcoin's own network of miners and inherits a significant portion of Bitcoin's hashrate (recently 20-30%) without imposing additional energy costs on miners and while incentivizing them with SYS. Syscoin asserts that Layer 1 security is fulfilled better by PoW than PoS for multiple reasons.

- Resilient to quantum stealth attacks
- Consensus resilient to more black swan risks (fiat hyper-inflation, internet censorship)
- Decentralized finality achievable without fault concerns
- Better survivability against irrationality

However, Syscoin does not mirror Bitcoin's economics and consensus rules. Syscoin's economy is utility-focused and based upon [EIP-1559](https://eips.ethereum.org/EIPS/eip-1559). We source Bitcoin’s network for the hardness it provides and pass that on to rollups! 

### [Finality](Finality.md) that is Decentralized and Fault Tolerant
Syscoin’s finality is sourced from a multi-quorum consisting of 4 groups of 400 masternodes (1,600) which are randomly selected among the entirety of the network (currently ~2,500 MNs). Each quorum is reformed every few hours. 3 out of 4 quorums must agree on a block in order to establish a chainlock.

This mechanism provides a high probability of finality. In the rare event that finality cannot be achieved on a block, the network falls back to the longest chain rule of Nakamoto consensus - a seamless and non-breaking event.

|             |Time to finality after block|Blocktime   |Resilience absent finality        |Mechanism     |
| :-----------|----------------------------|------------|----------------------------------|--------------|
|**Syscoin**  |~12.5 minutes               |2.5 minutes |Nakamoto longest chain rule       |PoW + Quorums |
|**Ethereum** |~14 minutes (~3 epochs)     |10 seconds  |None. No finality = breaking event|PoS + Casper  |


Every five blocks (total of 12.5 minutes based on average blocktime), a chainlock checkpoints the chain.

Syscoin’s finality provides effective resistance to 51%, malicious long-range MEV, and selfish mining attacks, while retaining PoW as the underlying consensus mechanism. Attackers must accomplish two expensive and challenging tasks to achieve a successful 51% attack: 1) Control greater than 50% of Bitcoin's hash power supplied to Syscoin, plus 2) Control a super-majority of Syscoin masternodes.

### Efficient Data Availability on Layer 1 with [PoDA](PoDA.md)
Data availability is required to exist within the security domain of Layer 1 in order for rollups to properly serve critical financial applications by securing users’ ability to exit to L1. Syscoin’s L1 DA solution is called PoDA (Proof of Data Availability). Syscoin’s PoDA differs from Ethereum’s danksharding in how data is stored, presented, pruned, and how fees are calculated. PoDA has characteristics that make it a valuable alternative to Ethereum’s work-in-progress data availability solution, Proto-Danksharding.

PoDA’s advantages can be summarized as:

- Cheaper transactions
- No data sharding required
- Greater data throughput with efficient Keccak data blobs
- Secured by Bitcoin’s own PoW plus Syscoin's finality
- More resilient to network-based outages/censorship
- Simpler data fee market based on Syscoin’s UTXO fee market
- Nakamoto Assumption: Only one honest node is needed to guarantee data

PoDA’s design considers proving and archiving as separate concerns. With PoDA, the succinct proof of data is stored on Layer 1, while an assumption is made that at least one honest party in the world will archive the raw data within a 6-hour window of time - similar to the honesty assumption made when syncing a Bitcoin node (at least one honest node). If desired, the raw data itself can be secured by Syscoin’s L1 network by reposting the data every 6 hours.

Validium (fully offchain DA) is also available as an alternative to PoDA for less-critical applications where the focus might be on even lower cost and higher throughput by trading-off Layer 1 data security. However, in the case of Syscoin PoDA, Layer 1 data security is quite affordable and PoDA nodes can store raw data offchain if they wish while still gaining the security of onchain state and proving.


### [Inherited L1 Security with L2 Variable Gas Rate Dominance](Gas.md)

With PoDA, savings in terms of gas units ranges from 315000x less gas than native Ethereum to 16500x cheaper than Optimism Bedrock on Ethereum today.


-----


Find out more about how Syscoin provides **[the most ideal L1 settlement for L2 solutions](https://jsidhu.medium.com/why-syscoin-is-the-ideal-layer-1-3ff690a7ef5f)**.


## FAQ

**Q."Does Syscoin Rollux require a separate gas token?"**   
A. No. It uses the native coin of Syscoin for gas - SYS, or TSYS in the case of testnet.


**Q."How do I get TSYS and/or move TSYS to the Rollux testnet?"**   
A. A bridge contract is available. You simply send TSYS to a contract address on the Tanenbaum L1, then it arrives at your address on Rollux. **[Refer to instructions](https://docs.syscoin.org/docs/guides/rollux/metamask)**.


**Q.“What is the blocktime of the Rollux optimistic rollup?”**  
A. 2 seconds


**Q. “At what frequency does the L2 settle bundled transactions on L1? What is the threshold that triggers settlement?”**   
A. The timing of settlement depends on the volume of network activity.  
Either of the following conditions can trigger settlement to L1:  

   - The data footprint of the batch of transactions on L2 amounts to at least 2MB  
   - At least 24 new blocks have been created on the L1 since the last L2 settlement  
    
More activity on the rollup brings faster settlement, to a max rate of once every L1 block.


**Q. "How do I set up a Rollux P2P replica node?"**  
A. **[Guide](https://github.com/sys-labs/rollux/blob/develop/ops-bedrock/P2P.md)** is available. Based on Optimism Bedrock requirements, the recommended hardware is a minimum of 16GB RAM and at least 100GB of free SSD space. In order to be accepted by the network you will need a P2P key, Peer IDs and their IPs. Reach out to Syscoin Foundation for this information.


**Q. "What RPC/WSS Methods/Subscriptions are available?**  
A. Same as Optimism Bedrock (Until we have completed our own Rollux doc portal, refer to: **https://community.optimism.io/docs/developers/build/json-rpc/#**)

**Q. Can you provide sample transactions of Rollux settling a batch on Syscoin NEVM and using PoDA on Syscoin Native (UTXO), and further info?**  
A. Yes. These are testnet transactions.  
NEVM: **<https://tanenbaum.io/tx/0xbdb2618d09e47789f0318900d9cacc904d96369bee2baf44400721ef8b245d8e>**  
PoDA: **<https://blockbook-dev.elint.services/tx/bae30de7850c370c77eb3590f631070d95c1a175323771fac5ab867fb1342136>**  
  
Note: The Blockbook explorer does not currently parse the PoDA hash, but it is visible in the raw transaction data as scriptPubKey.asm: `OP_RETURN 207f262f3352669030f480dd881bc6b3fad68abfcffe81d8e98c7f3e88871ed3a4`



**Q. How can I see/retrieve the full raw data blobs the L1 receives from the L2?**  
A. The hash of the raw data blob is always stored on-chain for the purpose of proving data integrity, as seen above in OP_RETURN. As for the full raw data blobs, they are available within the native chain’s mempool for a period of six hours before being pruned. During this window of time, archiving services can access and store the raw data. The data can be retrieved a couple of ways:  
  
- Syscoin Core RPCs: `listnevmblobdata`, `getnevmblobdata`
- syscointx-js


**Q. Are there any established processes for archiving Rollux raw data committed to PoDA?**  
A. Yes. Syscoin Sentinel provides a PoDA client and server that enables a Cloudflare R2 archive process to be activated relatively easily. This means any Syscoin Core node can provide data archive service that rollup solutions like Rollux can use. Refer to: **<https://github.com/syscoin/sentinel/blob/master/README.md>**