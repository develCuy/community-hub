---
title: Gas 
lang: en-US
---

### Inherited L1 Security with L2 Variable Gas Rate Dominance

Rollups today inherit the security of the base layer (Ethereum) by paying a variable fee based on the size of the batch of transactions settling from layer 2. With PoDA integrated into Bedrock this fee falls down drastically to just 1400 gas per batch (which itself is 2MB of transactions). Since the BatchInbox smart contract can take a variable number of batches (called blobs) to verify them via the data precompile they will be negligible in the overall cost of a layer 2 transaction. The rollup sequencer may pay 2000 gas (including overhead for the contract) for every 2MB of transactions (roughly 30000 transactions at 70 bytes per L2 transaction compressed) or roughly around only 15 gas per transaction.

Without a rollup those 30000 transactions would cost 630M gas. Using Optimism Bedrock on Ethereum today would cost roughly 32M gas. So Optimism brings around 20x savings from native Ethereum. With PoDA savings range from 315000x cheaper than native Ethereum to 16500x cheaper than Optimism Bedrock on Ethereum today. Note that there is also a small fee of around the same to put the data in PoDA on the UTXO chain as well.

### Sample Gas Cost

| Gas Cost Samples (rounded)                   | Rollux on Syscoin       | Optimism on Ethereum     |
| :--------------------------------------------|-------------------------|--------------------------|
|Approve spend (ERC-20)                        |0.00007 SYS              |0.00017 ETH               |
|Value transfer (ERC-20)                       |0.00025 SYS              |0.00046 ETH               |
|Value transfer (native coin)                  |0.00004 SYS              |0.00010 ETH               |


### Storage

There are rollups and designs where rollups do not store data on Ethereum and instead use offchain data availability to match this cost (celestiums, validiums), but they do so by making a big tradeoff on security by not using the same settlement layer to secure the data required for censorship resistance. For the first time in the world there is now an example where the costs are dominated by only the L2 variable gas rate (15m gas target in Optimism Bedrock governed by an EIP-1559 market) whilst inheriting the full settlement layer 1 security for the rollup. This hasn’t been possible for any other rollup prior to our own, nor among any of the side-chain concepts. There are advantages where accounts may leverage offchain data availability for even cheaper transactions for short-term use cases. These advantages can be unlocked through account abstraction concepts where wallets are actually smart contracts, leading to choices for users on authorization models and where data availability is used on-chain (secure, decentralized) and off-chain (slightly less secure, less costs). Our job is to scale up the settlement layer (Layer 1) while providing the maximum utility and efficiency, leveraging every bit and byte available to us in a way to prevent censorship within a modular blockchain design. We believe this design is the state-of-the-art in maximizing efficiency and therefore making things as cheap as possible by enabling rollups to not be dominated by gas fees of data markets on layer 1 and to be dominated more by gas markets for computation/state storage on layer 2. There is no sacrificing decentralization for us. We only contextualize scaling one way - security first. And we have just proven a vast improvement over status-quo without any tradeoffs.

Ethereum plans to match this sort of design with EIP-4844 and later Data-Availability sampling. However tradeoffs still exist:

1. A trusted setup is required, a backdoor is technically possible to completely censor the entire data availability protocol on the settlement layer. Not likely but possible. There is no provable way to prove that the trusted setup was not confiscated or not done correctly.

2. Not quantum resistant due to the need for a polynomial commitment scheme with a pairing assumption.

3. Requiring new mechanics to work with data, to validate data externally from the clients instead of the simply tooling around Keccak hashing we use in PoDA.

4. Sharding can theoretically improve throughput but requires longer liveness prior to pruning because of collusion possibilities and generally more edge-cases for attacks. Also introduces risk in complexity and goes against our philosophy of you only need to trust yourself and can validate the state of your chain yourself without trusting anyone else (Sharding requires an assumption that the data is generally available through half of the nodes and each node validates their own shard is committed to the entire blob). In our case we prune after only 6 hours of the previous chainlock (finality event), and there are no new edge-cases created using hash-based blobs since the blockchain itself assumes security of the hash construction with a great degree of Lindy effects.

5. Proof-time of KZG and verifying the batch is more expensive. When a block is formed the entire batch needs to be validated, where a KZG Batch validation would check the entire blob (all shards included). In our tests we found Keccak hash-based blobs 2000x faster to verify and an immeasurable amount of times faster to create the hash versus the KZG commitment of a blob. This leads to less overhead on block propagation, validation and generally better decentralization principles for the existing blockchain design inherited from Bitcoin.


