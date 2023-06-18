# The Rollux Community Hub

[![Discord](https://img.shields.io/discord/1087373765014454322)](https://discord.gg/rollux)
[![Twitter Follow](https://img.shields.io/twitter/follow/RolluxL2?style=social)](https://twitter.com/RolluxL2)

Rollux is an EVM-equivalent Layer 2 platform.

Rollux is, in a nutshell, an application inside of Syscoin NEVM that executes transactions more efficiently than NEVM itself. It's based on the concept of the [Optimistic Rollup](https://research.paradigm.xyz/rollups), a construction that allows us to "optimistically" publish transaction results without actually executing those transactions on Syscoin NEVM (most of the time). Rollux makes transactions cheaper, faster, and smarter.

Rollux is based upon [Optimism Bedrock](https://github.com/ethereum-optimism/optimism) and is developed to take advantage of the holistically modular [Syscoin](https://syscoin.org) blockchain platform and the Layer 1 data availability it provides. Syscoin provides some notable [advantages](https://docs.syscoin.org/docs/tech/rollux#how-does-syscoin-help-rollups-work-optimally) in security, decentralization and scalability, particularly for Layer 2 EVM solutions, which is why it was chosen as the Layer 1 on which Rollux activity settles.  

Please note that this repository is undergoing rapid development.

------

This is the source for the [community hub](https://community.rollux.com/).

# Usage
## Serve Locally
```shell
export NODE_OPTIONS=--openssl-legacy-provider
```
```shell
yarn install
```
```shell
yarn dev
```


Then navigate to http://localhost:8080.
If that link doesn't work, double check the output of `yarn dev`. 
You might already be serving something on port 8080 and the site may be on port 8081.

## Build for Production
```shell
yarn build
```

You probably don't need to run this command, but now you know.
