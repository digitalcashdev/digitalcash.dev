---
title: Develop Auth & Monetization Middleware
description:
  Create an middleware that requires payment in Dash in order to use a Web App
  or API.
date: 2024-11-07
updated: 2024-11-07
categories:
  - Web Development
---

Develop an Authorization and Monetization Middleware (for SaaS) + Management
Interface for Web Apps and APIs.

- Instantly enable paid tiers to a product or service
- Paygate tokens by any combination of
  - Rate Limit (requests per second or per day, etc)
  - Expiration (token lasts 24 hours or 1 month, etc)
  - Time (up to 100 minutes of cumulative use)
  - Bytes (up to 1GB of upload or 10TB of download)
  - Tier (must have paid at least x DASH, or no DASH)
    - IP tracking for pre-customers / non-authenticated
  - URL (can connect to a particular domain or path)
- Requires a token signed by a Dash Key

# Why

There are a plethora of Cloud services that cost nothing to replicate, yet are
excessively expensive to use. \
(ex: File Hosting, S3, Image Resizing, File Type Conversion, Ai Document
Extraction)

For any service to be sustainable, it must be paid for by the customers that use
it.

ENOs, MNOs, and FNOs all have systems that mostly sit all day and do nothing.

Others in the Dash community have non-DNO systems that also sit all doing mostly
nothing.

Let's compete in the market by providing services that we have without any of
the cost overhead of investors or transaction fees.

# How

Well, did I mention that Go is _really_ great for building network middleware?

Its composable network stack also makes it very easy to count usage statistics
on per-request basis and then batch and queue updates to the stats
non-disruptively.

We can have a web service that sits in-front-of or in-between other web
services - for example, in front of the primary web server, or in-between the
reverse proxy and the API - and transparently pay-gates access.

This could also be embedded into the
[Platform Web Server](../dcd-5-platform-web-server/).

# What

- A Web Service that can paygate and proxy
  - Web App (via cookie, like CloudFlare)
  - API requests (via token)
  - Customer Auth (via Dash Key)
- Fork JWT Library to Support Dash Keys (Secp256k1)
- Write built-in Management Web App to assign payment categories \
  (ex: 1 DASH for up to 90 days, up to 1GB download, up to 100 minutes CPU, etc)

### Funding Development

Requesting 400 DASH total.

200 DASH / month for 2 months for documented, deployable deliverables.

It's likely that to implement and expose all of these features in a
customer-friendly will require additional funding.

HOWEVER, this _WILL_ get us to a usable product, and I'll have that in hand if
and when requesting additional funds for the project.
