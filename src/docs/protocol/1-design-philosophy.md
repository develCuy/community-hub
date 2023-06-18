---
title: Design Philosophy
lang: en-US
---

Rollux is built according to a strong design philosophy that begins as an extension of Syscoin's own mission, specifically into the context of scalability. That overarching mission is to solve the challenges and limitations of blockchain technology in ways that minimize tradeoffs (or eliminate them where possible), while providing the greatest benefits, in order to make blockchain more viable for global mass adoption.

Looking deeper into Rollux itself, you will find that it also echoes the four main pillars of the Ethereum Optimism community: simplicity, pragmatism, sustainability, and, of course, optimism. It's important to understand these pillars as they heavily influence the design of Rollux as a whole.

## Simplicity

Rollux is designed to be as simple as possible for the featureset it provides.
Ideally, Rollux should be composed of the minimum number of moving parts required for a secure, scalable, and flexible L2 system.
This simplicity gives Rollux's design a number of significant advantages over other more complex L2 constructions.

Simplicity reduces engineering overhead, which in turn means we can spend our time working on new features instead of re-creating existing ones.
Rollux prefers to use existing battle-tested EVM code and infrastructure where possible.
The most visible example of this philosophy in practice is your ability to use Geth as Rollux's client software.

When dealing with critical infrastructure, simplicity is also security.
Every line of code we write is an opportunity to introduce unintentional bugs.
A simple protocol means there's less code to write and, as a result, less surface area for potential mistakes.
A clean and minimal codebase is also more accessible to external contributors and auditors.
All of this serves to maximize the security and correctness of the Rollux protocol.

Simplicity is also important for the long-term vision of Rollux.
By limiting the amount of code on top of Syscoin NEVM or Ethereum tooling, we're able to spend most of our time working directly with existing codebases.
Engineering effort that goes into Rollux can also directly benefit Syscoin or Ethereum, and vice versa (which is the case with PoDA, Syscoin's data availability solution).
This will only become more pronounced as the Rollux protocol solidifies and existing resources can be redirected towards core Syscoin infrastructure.

## Pragmatism

For all its idealism, the design process reflected by Rollux is ultimately driven by pragmatism.
The core Rollux team has real-world constraints, the projects that build on Rollux have real-world needs, and the users that engage with Rollux have real-world problems.
Rollux's design philosophy prioritizes user and developer needs over theoretical perfection.
Sometimes the best solution isn't the prettiest one.

Rollux is also developed with the understanding that any core team will have limited areas of expertise.
Rollux is developed iteratively and strives to continuously pull feedback from users, both of Rollux itself and Optimism.
Many core Rollux and Optimism features today (like [EVM Equivalence](https://medium.com/ethereum-optimism/introducing-evm-equivalence-5c2021deb306)) were only made possible by this iterative approach to protocol development.

## Sustainability

Rollux is in it for the long haul.
Application developers need assurance that the platform they're building on will remain not only operational but competitive over long periods of time.
Rollux's design process is built around the idea of long-term sustainability and not taking shortcuts to scalability.
At the end of the day, a scalable system means nothing without the ecosystem that sustains it.

Sustainability actively influences Rollux's protocol design in ways that go hand-in-hand with our philosophy of simplicity.
The more complex a codebase, the more difficult it is for people outside of the core development team to actively contribute.
By keeping our codebase simple we're able to build a bigger community of contributors who can help maintain the protocol long-term.

## Optimism

Of course, none of this would be possible without a sense of optimism.
Our optimism about the Syscoin vision keeps this project moving forward.
We believe in an optimistic future for Syscoin, a future where we get to redesign our relationships with the institutions that coordinate our lives.

Although Rollux looks like a standalone blockchain, it's ultimately designed as an extension to Syscoin.
We keep this in mind whenever we're creating new features or trying to simplify existing ones.
Rollux is as close to standard EVM as possible not only for pragmatic reasons, but because Rollux exists so that Syscoin NEVM and by extension EVM itself can succeed.
We hope that you can see the influence of this philosophy when looking at Rollux's design.
