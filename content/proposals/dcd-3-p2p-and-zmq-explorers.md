---
title: Develop P2P & ZMQ Web Explorers
description: Developing Protocol Explorers that work on the Web
date: 2024-11-03
updated: 2024-11-03
categories:
  - Web Development
---

[rpc-explorer]: https://rpc.digitalcash.dev

Fund the **Development** of Dash Network Protocol Explorers for:

- P2P (Socket Communication) \
  <https://docs.dash.org/projects/core/en/stable/docs/guide/p2p-network.html>
  - CoinJoin Pools & Requests
  - Governance Objects
  - Inventory Objects
  - Block Sync
- ZMQ (Notifications) \
  <https://docs.dash.org/projects/core/en/stable/docs/api/zmq.html>
  - Instant Send
  - Transactions
  - Proposals
  - Votes
- Self-Hosted Installers
  - For all DNOs\* (MNOs, ENOs, and FNOs)
  - Some features will be restricted to FNOs, for security

These will be **similar to the
[Dash RPC Explorer](https://rpc.digitalcash.dev)**
(<https://rpc.digitalcash.dev>), but focus on the P2P and ZMQ protocols.

{{< youtube id="dXJjN-KYuNM" >}}

## Why

The P2P and ZMQ protocols are fairly technical, but could be also very useful if
made available on the Web.

The benefit to making these more _accessible to_ and _explorable by_ Web
Developers is that they'll be able to better understand the Dash Network - and
therefore can take advantage of the best parts of it more easily - and get much
better performance both in the browser and on the server.

Having unobstructed access also opens the ability to create finely-tuned
customer experiences.

Having the ZMQ messages on the Web will be particularly beneficial to
**_Merchants_** - it will make it painless to detect incoming payments.

### Bringing P2P from TCP to Web

The
[Dash P2P (Peer-to-Peer) Network](https://docs.dash.org/projects/core/en/stable/docs/guide/p2p-network.html)
is already fully public on the _Internet_, it's just not accessible from the
_Web_ (because it's a TCP-only protocol).

The easy part of getting it on the Web is a simple 1:1 WebSocket layer, which is
mostly built.

The difficult part of getting it on the Web is writing the packers and parsers
for the binary protocol such that it can be easily representing as Value Objects
(i.e. _JSON_, _structs_) in different languages.

The good news is that the JavaScript packers and parsers can work on the client
and the server.

I've already done some of the heavy lifting protocol work as part of
[my efforts with CoinJoin](https://coinjoin.digitalcash.dev). This project will
leverage that work, and bring it up a layer to where developers can easily
explore it for other purposes, including arbitrary hex messages.

There are a few simple security guards that need to be put in place for this,
such as white listing and/or disabling messages for MNO- and ENO-hosted servers.

### Bringing ZMQ from localhost to Web

The
[ZMQ Notifications](https://docs.dash.org/projects/core/en/stable/docs/api/zmq.html)
are accessible via the _ZeroMQ_ protocol - which is TCP-only and not currently
exposed publicly, but easy to expose - just like the RPC Proxy.

I plan to implement the ZQM proxy using
[Server-Send Events (SSE)](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events) -
since it is a very simple, easy-to-understand-and-use protocol with _Baseline_
browser support for 5 years.

I've done some work with this in both Node and Go, so I'm already familiar with
how to adapt it. Again, due to my work with CoinJoin, I have a pretty good idea
of how to structure the explorer and allow for **_updating subscriptions_**
on-the-fly.

This is also very simple to secure by white-listing the read-only message types
to the documented public types - almost exactly the same as the current [Dash
RPC Explorer][rpc-explorer]

### Software Development

- server code will be written in Go, as it is both safe and performant
- suitable client code will be written as JavaScript libraries
- the Explorer UIs will be implemented in plain JavaScript, HTML, and CSS

### Hosting by DNOs (MNOs, ENOs, and FNOs)

I will also create self-install scripts so that any DNOs (Dash Node owners) of
all types can bring the value of these tools to the whole Dash Network.

These will be similar to the [DashCore Daemon](https://webinstall.dev/dashd)
installer I created previously.

### Funding Development vs Public Hosting

Requesting 200 DASH total: 100 DASH / month for 2 months for documented,
deployable deliverables.

- The basic scope _will_ be met at this cost
- I'll request more if some features extend beyond this scope.

Once developed, the continued funding for hosting these will be part of
<https://digitalcash.dev/proposals/dcd-1-rpc-web-proxy/>.

### Unused / Excess Funds

Surplus funds, if any, will be put towards future Dash SDK, Explorer, Proxy, or
Payments work.
