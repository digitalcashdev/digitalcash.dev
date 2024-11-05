---
title: Develop Dash Platform Web Server
description:
  Develop a Companion Web Server to Bring all DNOs (MNOs, ENOs, FNOs) to the
  Web.
date: 2024-11-05
updated: 2024-11-05
categories:
  - Web Development
---

Developing a Dash Web Server for Dash Platform (ENOs), that also benefits MNOs
and FNOs to solve these problems:

- UI for Service Management \
  (ex: domain, port, tls termination, path)
- Automated Certificates via Let's Encrypt + CertMagic \
  (Fix the ZeroSSL problem)
- Custom Domain Names / IPs \
  (Fix the IP-only problems)
- Automated or Manual DNS \
  (Fix the IP problem)
- Make Dash Network Services Web-Accessible \
  (RPC, P2P, ZMQ, gRPC, etc)
- Participating Node Registry \
  (like masternodelist)
- Rate Limiting + API Protection \
  (to prevent abuse)
- Easily Host Dash Apps \
  (assign domain, point to files and internal port)
- Single-Command Install \
  (and easy manual install)

## Why

So that customers can use Dash Network services in their Web Browser.

So that developers can build on Dash Network for the Web Browser, and mobile.

To make Dash Platform a First-Class Citizen, available directly on the Web - and
make it stupid-simple for operators to manage domains, certs, and which Dash
Network services are exposed.

This is the answer to numerous concerns about the issues of ZeroSSL, Envoy, and
addressing MNOs, ENOs, and FNOs by domain name.

### Why Full Custom?

I've created systems with complex interdependencies similar to Platform and the
other Dash Network services in the past - with HAProxy, Caddy, and others - and
I ran into many similar problems as to the issues with Envoy right now - it's
increasingly challenging to get generic tools to work with very specific,
uncommon configurations.

Also, we need operators of the ENOs, MNOs, and FNOs systems to be able to setup
and manage these capabilities on their own - so we need an API and a custom Web
App flow for the setup.

Caddy probably has the best generic API for Web Services, and it would simply
require too much shared knowledge and education to maintain in the DAO (just as
Envoy has proven to be).

Building custom allows us to win both on simplicity and flexibility - we create
the options we need.

## How

I'll be creating a purpose-built Web Server that's matched to work perfectly
with Platform's Envoy setup for ENOs, and also extend the capability for MNOs
and FNOs to provide Dash Network services on the Web.

From Docker and Caddy to Traefik, Tailscale and Kubernetes, much of the most
well-written and widely deployed server software is written in Go - even
TenderDash and gRPC - because it's purpose-built to be secure, fast to build
with, and performant in production.

I'll predominantly be using Go's standard library, as well as a few key
libraries, such as CertMagic for Let's Encrypt.

I'll be using JavaScript, HTML, and CSS for the Management Web App.

I've built similar custom webservers with Let's Encrypt and SNI and Reverse
Proxy capabilities in the past, including [Telebit](https://telebit.io) and
Greenlock.

## What

A single-file binary web server that can be installed with a single command, and
setup with a few clicks.

It will have an internal API for live updating config changes without server
restarts, and a built-in Web App for setup and management.

Domain names, ports, certificates, and other details can all be updated manually
or automatically.

There will be an optional Dash Node registry (like `masternodelist`) to verify
and enumerate the participating nodes, so that the Dash Network services can be
accessed in a more decentralized fashion, without relying on any specific node.

### Software Development

- server code will be written in Go
- the Management UI will be implemented in plain JavaScript, HTML, and CSS
- there probably won't be any independent libraries developed for this

### Installation & Deployment

I will also create self-install scripts so that any DNOs (Dash Node owners) of
all types can bring the value of these tools to the whole Dash Network.

These will be similar to the [DashCore Daemon](https://webinstall.dev/dashd)
installer I created previously.

### Funding Development

Requesting 400 DASH total.

200 DASH / month for 2 months for documented, deployable deliverables.

That might sound like way it's way too little - and it may be - but Go is
extremely well-equipped for these sorts of problems, and very quick to work in
in general. I'm confident that I'll have a deliverable within that timeframe and
budget.

If I do need to extend, I will, and I'll have a usable product already in hand
when I do so.

### Unused / Excess Funds

Surplus funds, if any, will be put towards future Dash SDK, Explorer, Proxy, or
Payments work.
