---
title: RPC Web Proxy & Explorer 2024-Q3
description: To cast a vote for focusing on The Web, and supporting web developer tools.
date: 2024-08-10
updated: 2024-08-10
categories:
  - Web Development
---

Dash, on The Web.

- https://rpc.digitalcash.dev (mainnet)
- https://trpc.digitalcash.dev (testnet)

(RPC Web Proxy and RPC Explorer for integrators)

## Why

These are the services that I wish I had had access to years ago. It would have
saved me 10s of hours to have all the tools and documentation available together
directly on the web, immediately - also getting a jumpstart on coding without
waiting for hours of syncing.

This proposal serves 2 functions:

1. Literal "buy in" on the idea that:

   - We believe that we want Digital Cash on _The Web_ \
     and
   - We want to lower the barrier to entry for Developers - especially Web Devs

2. Applying payment towards the hosting of redundant RPC Web Proxy & Explorer
   setups for both mainnet and testnet

## How

"Hello World", without hours of sync.

Typically ALL of the Dash RPCs are restricted from public use by a password.

This means that in order to access them, you have to have a full node fully
synced. And if you don't have the correct, non-default options turned on, you
have to sync again.

Additionally, the necessary documentation and services necessary to use the RPCs
effectively - the RPC help, the DCG docs, Insight APIs, Faucets, etc - are
scattered, abstracted in ways that aren't intuitive, and often out-of-date.

### Dash RPC Web Proxy

`dash-rpcproxy` authorizes and makes a full node's public RPCs directly
available on The Web without the need for any additional tools or layers of
abstraction or indirection.

- Written in Go for speed and security
- whitelists Public RPCs
- private RPCs remain unavailable
- CORS-enabled for Web Apps
- serves built-in RPC Explorer, or a custom version
- whitelist can be customized (requires restart)

Although some of this functionality is available through Insight, this:

- exposes ALL RPC capabilities
- doesn't require code updates to support RPC changes
- doesn't have artificial bytes limits or memory-related bugs
- easiest possible install \
  (just copy the file and run it)
- cross-platform binary with no dependencies \
  (Linux, Mac & Windows, on x64 and ARM)

### Dash RPC Explorer

The Explorer makes it possible for anyone to explore and test the RPCs right
from their web browser, and provides a single point of access to other important
resources.

- Autocompletes all RPCs in the Public Whitelist
- Shows help for each RPC when selected
- Shows an example of using the RPC with common developer tools
  - curl
  - fetch
- Links to the CrowdNode and DCG Faucets (testnet only)
- Links to DCG Docs

### Always the latest `dashd`

The service has 2 full nodes on each network.

The default server is updated to the latest dashd from the DCG GitHub Releases,
every day.

The other server remains on the previous version for at least several days, and
can be switched immediately switch if anything goes wrong during an update. \
(and I have a future goal to make guaranteed access to the stable server paid in
DASH)

### Hosting by MNOs

Although I intend these sets of services to be available for as long as the
community finds them useful, my vision is to see these services - and many
others like them - hosted directly by, and being directly profitable to, the
MNOs that choose to run them.

I have another proposal in mind for how to accomplish that, which I'll
retroactively link here once it's ready. Essentially the idea is to integrate
Dash keys with Web-standard auth tokens to directly pay (or stake collateral)
for API usage - a mix of time and number of requests, as is common in the
industry.

## What

I've set up a total of 6 servers for this service. The redundant mainnet and
testnet nodes are provisioned according to a mix of the recommendations at
<https://www.dash.org/blog/dash-evolution-v1-0-0-release-announcement/> and my
own experimentation, which I've documented at <https://webinstall.dev/dashd/>.

That totals $182/month on Digital Ocean, which I use as a baseline for
simplicity's sake since they have about the best pricing available:

- 2x Full Nodes on `mainnet`
  - $48/month for 4 vCPU + 8GB RAM
  - $15/month for 150GB Storage
- 2x Full Nodes on `testnet`
  - $24/month for 2 vCPU + 4GB RAM
  - (no extra storage)
- 2x Web Proxies
  - $4/month for 1 vCPU + 512MB RAM
  - (no extra storage)
- 1x Domain
  - $17/year

My ask of 4 DASH serves to apply towards my own costs, but more importantly
signals that the fair market cost of running these services is worth making
Digital Cash accessible on The Web.

## Meta

Name: `DCD_RPC-Web-Proxy-and-Explorer_2024-Q3`
