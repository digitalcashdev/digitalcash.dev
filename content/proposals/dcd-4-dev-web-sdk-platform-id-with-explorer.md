---
title: Develop Web SDK - Platform Identities & Explorer Web App
description:
  Developing native-browser Platform Identities and DAPI Explorers that work on
  the Web
date: 2024-11-04
updated: 2024-11-04
categories:
  - Web Development
---

[rpc-explorer]: https://rpc.digitalcash.dev

Fund the **Development** of Platform Identities in a Platform JavaScript SDK +
Related Web Explorer App:

- Native JavaScript Library to register a Platform Identity \
- Update DashHD to support DIP-14 (Platform) Keys
- Create a Server-Side JSON Web Proxy for Platform gRPC
- Create a Web Explorer for the relevant Platform DAPIs (for demonstrating use)

The tool to **showcase Platform Identity Registration** will be similar to the
[Dash RPC Explorer][rpc-explorer] (<https://rpc.digitalcash.dev>), but with more
helper functionality to make it easier to work with the data and used in the
Platform protocols.

{{< youtube id="cAAM6PzY_q4" >}}

## Why

Since Platform is approaching stability, now is a good time to begin investing
in these tools to make Platform available on the web.

"Platform" is a collection of interdependent protocols, DIPs, APIs, and Keys.

The primary purpose of this proposal is to get to the first "full loop" of a set
of Platform transitions (in Native JavaScript) to register an Identity - after
which I'll submit another proposal for to support another batch of transitions.

### Bringing Platform Identities to The Web

We've already done the work to support
[Platform Transactions in DashTx.js](https://github.com/dashhive/DashTx.js/pull/83),
and
[Platform's bindata to DashPlatform.js](https://github.com/dashhive/DashPlatform.js/pull/6).

This proposal will support the completion of the identity registration process -
in pure JavaScript (no WASM, no Rust), and to be able to do so in the explorer.

- Lightweight & Fast
- Native JavaScript
  - No client-side protobufs
  - No Rust or WASM
- Faster Development Time
- Easier Debugging

### Bringing Platform Keys to The Web

Platform's DIP-14 keys break compatibility with BIP-32 on a simple, but
fundamental level. Rather than using standard Integers for all path components,
some paths use BigInts which can't be handled as easily in JavaScript.

This has an "integer-coloring" effect that will require modest refactoring and
testing of our DashHD library.

### Bringing Platform APIs to The Web

There's already [a gRPC explorer](https://github.com/fullstorydev/grpcui) that
can be leveraged to get a jump start on this. In theory, the work of providing
an API layer to translate to Web-friendly JSON could be done very quickly.

However, the object structures are much more complex than the [Dash RPC
Explorer][rpc-explorer], and I'd like to have custom forms for some of the APIs
to make them as easy to use as possible.

### Software Development

- server code will be written in Go, as there are existing gRPC libraries
- suitable client code will be written as JavaScript libraries
- the Explorer UIs will be implemented in plain JavaScript, HTML, and CSS

### Hosting by DNOs (MNOs, ENOs, and FNOs)

I will also create self-install scripts so that any DNOs (Dash Node owners) of
all types can bring the value of these tools to the whole Dash Network.

These will be similar to the [DashCore Daemon](https://webinstall.dev/dashd)
installer I created previously.

### Funding Development vs Public Hosting

Requesting 400 DASH total.

200 DASH / month for 2 months for documented, deployable deliverables.

I expect that this will both require more discovery and knowledge work than the
other explorers, and also that I will deliver more task- and workflow-specific
tools in these explorers.

Once developed, the continued funding for hosting these will be part of
<https://digitalcash.dev/proposals/dcd-1-rpc-web-proxy/>.

### Unused / Excess Funds

Surplus funds, if any, will be put towards future Dash SDK, Explorer, Proxy, or
Payments work.
