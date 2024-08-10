---
title: |
  RPC Web Proxy & Explorer: Installation
description: |
  How to install and run the Digital Cash RPC Web Proxy and Explorer
date: 2024-08-10
updated: 2024-08-10
categories:
  - Web Development
---

System Requirements

- 1vCPU
- 32MB RAM
- 16MB Storage
- (MB, not GB)

1. Install `dashd`:
   ```sh
   curl https://webi.sh/dashd | sh
   source ~/.config/envman/PATH.env
   ```
2. Wait for a full sync
3. Update `dash.conf` as needed, and restart:

   ```sh
   [main]
   rpcuser=dash-rpcproxy
   rpcpassword=CHANGE_ME
   rpcbind=0.0.0.0:9998
   rpcallowip=0.0.0.0/0
   [test]
   rpcuser=dash-rpcproxy
   rpcpassword=CHANGE_ME
   rpcbind=0.0.0.0:19998
   rpcallowip=0.0.0.0/0
   ```

4. Install `dash-rpcproxy` \
   See <https://github.com/digitalcashdev/rpcproxy> \
   and <https://github.com/digitalcashdev/rpcproxy/issues/3>
5. Update config file and workdir
   ```sh
   mkdir -p ~/srv/dash-rpcproxy/
   mkdir -p ~/.config/dash-rpcproxy/
   touch ~/.config/dash-rpcproxy/env
   ```
   ```sh
   export DASHD_RPC_USERNAME=dash-rpcproxy
   export DASHD_RPC_PASSWORD=CHANGE_ME
   export DASHD_RPC_HOSTNAME=localhost
   export DASHD_RPC_PORT=19998
   ```
