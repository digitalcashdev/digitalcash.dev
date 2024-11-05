---
title: Update Dash SDK to ESM
description: Convert all of the existing Dash SDK to ESM
date: 2024-11-06
updated: 2024-11-06
categories:
  - Web Development
---

Updating the following JavaScript libraries to be compliant with the final ESM
(a.k.a. `import` / `export`) specs (March 2023 & March 2024).

This will make them more compatible with both framework-free and
bundler-dependent development, both for _TypeScript_ and _JavaScript_.

- [DashKeys.js][dashkeys] - Encoding and Decoding Addresses, WIFs, etc
  (Base58Check)
- [DashHD.js][dashhd] - BIP-32, BIP-44 Wallet Derivation
- [DashRPC.js][dashrpc] - HTTP RPCs
- [DashTx.js][dashtx] - Signing & Broadcasting Transactions
- [DashMessage.js][dashmessage] - Message Signing & Verifying
- [DashP2P.js][dashp2p] - CoinJoin, Inventory
- [DashJoin.js][dashjoin] - CoinJoin
- [DashGov.js][dashgov] - Governance, Proposals
- [DashPlatform.js][dashplatform] - Evo (in-progress)
- [Secp256k1.js][secp256k1] - Generating, Signing, and Verifying Keys (bytes)

[dashkeys]: https://github.com/dashhive/dashkeys.js
[dashhd]: https://github.com/dashhive/dashhd.js
[dashrpc]: https://github.com/dashhive/dashrpc.js
[dashtx]: https://github.com/dashhive/dashtx.js
[dashmessage]: https://github.com/dashhive/dashmessage.js
[dashp2p]: https://github.com/dashhive/dashp2p.js
[dashjoin]: https://github.com/dashhive/dashjoin.js
[dashgov]: https://github.com/dashhive/dashgov.js
[dashplatform]: https://github.com/dashhive/dashplatform.js
[secp256k1]: https://github.com/dashhive/secp256k1.js

It will also remove some annoying boilerplate and make both type and module
resolutions generally easier to work with in JavaScript and TypeScript.

# Why

We built the Dash SDK to be 100% compatible across Browsers, Bundlers, and Node,
as well as all meta-frameworks (Vite, Nuxt, etc).

Due to a lack of consensus between the various Browser and Server vendors over
the last 10 years, the only reliable ways to do this were either to use a
variant of the CommonJS standard, or to use a pseudo-JavaScript language and
"compile" it to different JavaScript targets, and publish multiple versions.

Despite having some cumbersome boilerplate, we opted for universally-compatible
JavaScript because it's simpler and less error-prone.

Now that the standard is both complete and has been _implemented_ in Browsers
(for over 18 months), and Server JavaScript (currently in beta, but soon to be
stable in early 2025), we can confidently move to ESM without having to publish
multiple versions, or deal with breaking inconsistencies between platforms and
vendors.

# How

A tedious process of going through each library, its tests, and its demo
applications, and updating the module system to ESM (a.k.a. "import"), and then
republishing.

# What

I'll be systematically updating the modules to be consistent:

- `import`s and `export`s in the JavaScript files
- `package.json` `imports` and `exports` maps
- `index.html` `importmap` scripts
- `tsc` include paths
- various tooling updates

I'll also be verifying that the published packages work as expected.

### Funding Development

Requesting 100 DASH total.

50 DASH / month for 2 months for tested, documented, deliverables.

### Unused / Excess Funds

Surplus funds, if any, will be put towards bugfixes, updating documentation,
closing out stale issues, and general cleanup of the SDK.
