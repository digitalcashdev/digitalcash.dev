---
title: Web Wallet-Path Explorer
description: A tool for web-developers to enumerate and manage wallet addresses.
date: 2024-10-28
updated: 2024-10-28
categories:
  - Web Development
---

{{< youtube id="TMKbhYQ9Bs4" >}}

Develop, Release, & Deploy a Web Wallet Address Explorer

Stage 1:

1. Generate _next available address(es)_ + QR Codes
   - for a given _Wallet_ (by phrase)
   - for a given _Account_ (by index)
   - as either _Receive_ or _Change_
   - on `mainnet` or `testnet`
   - and for one-off legacy (non-HD) addresses
2. Copy Address or WIF in the normal text format (_Base58Check_)
3. Scan Address or WIF as QR to pay or sweep
4. Inspect address details (i.e. bytes as hex)
5. Backup Wallets and Metadata as JSON

Stage 2:

1. **Evo Keys** \
   (for the new, bespoke addressing scheme not yet supported by other tools)
2. Ability to mark unused addresses as reserved / pending.
3. Enable URL redirects for App integration

## Why

Addresses and WIFs (Private Keys) are necessary for just about any Dash
application you can imagine, inculding Evo.

However, the code (and sometimes infrastructure) required for working with them
is both tedious, and nuanced - so it can be a huge time suck as a first step.

Loading, exporting, and tracking addresses and keys for testing also presents a
bit of friction.

This will serve the following purposes of:

1. enhance developer focus \
   (to skip minutia when prototyping)
2. copy-pasta for production apps \
   (for known-working, easy-to-modify implementation)
3. exploration \
   (to understand how wallets work)
4. debugging \
   (for comparison, to ensure correctness when writing new code)

Having a tool dedicated to the work of managing addresses will allow all of us
to **focus on the unique value** of our projects **first**, and delay some of
the specifics of wallet integration until we have working prototypes.

Also, this can also be reskinned for production use as a standalone application.

## How

This Web App will

- use our existing [Dash Web SDK](https://github.com/dashhive)
- check address balances (including in bulk)
  - utilizing DashCore RPC calls
  - with correct _InstantSend_ balances (using `mempool`)
  - and compatible with <https://rpc.digitalcash.dev/> for the Web

### Hosting by MNOs & ENOs

As with the
[RPC Web Proxy](https://digitalcash.dev/proposals/dcd-1-rpc-web-proxy/) itself,
I intend this to also be hosted directly by the MNOs & ENOs that choose to run
them.

As mentioned
[previously](https://digitalcash.dev/proposals/dcd-1-rpc-web-proxy/), I have
another proposal in mind for how to accomplish that, which I'll retroactively
link here once it's ready.

(essentially the idea is to integrate Dash keys with Web-standard auth tokens to
directly pay (or stake collateral) for API usage - a mix of time and number of
requests, as is common in the industry)

## What

### Web App

This will be delivered as a standards-compliant web app as simple plain text
files (HTML, CSS, JavaScript).

It will be both

- self-hostable as static files from a standard web server
- publicly hosted as <https://addresses.digitalcash.dev> (not up yet)

It will work with or without the DashCore RPCs (address availability will be
turned off if it's not available).

### Installation Tooling & Guide

Code is essentially worthless - unless someone else can easily figure out how to
use and deploy it.

This means all code needs at least these 3 things:

1. A Working Demo \
   (i.e. deployed following the instructions)
2. API Documentation \
   (i.e. how a developer uses it)
3. Installation & Deployment Instructions \
   (i.e. how to test locally, and deploy on the internet)

I make a habit of testing my documentation by following it, and I will do the
same here.

### Web + Node<span>.</span>js Libraries

Most of the work will use our existing
[Dash Web SDK](https://github.com/dashhive), but if any novel library work is
done, it will also be made available for both Web and Node<span>.

## Meta

| Name         | `DCD_Web-Wallet-QR-Explorer`                                                                                                            |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| Gobject      | `b5708b0ce7042d9c3bab29b1a7e2216bcc3d479ab1622a6c1d2504d5326d8764`                                                                      |
| Gobject Link | <https://rpc.digitalcash.dev/#?method=gobject&params=["get","b5708b0ce7042d9c3bab29b1a7e2216bcc3d479ab1622a6c1d2504d5326d8764"]&submit> |
