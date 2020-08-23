# Bitcoin overview

- Bitcoin is the core component of myNode
- It verifies the block received from its peers
- It provides a personal copy of all the transaction history
- It provides a trustless and private way for finding Bitcoin balance
- It also enables broadcasting of transactions without fear of censorship
- The Tor network doesn't expose your IP address to the public
- It is flexbile enough to add and connect custom apps via RPC
- The CLI is accessible through the browser which enables non-linux users
in learning the basic commands of bitcoin-cli and bitcoind
- Limitations
  - mempool size is capped at 50MB to limit RAM usage
  - The number of cores
- Bitcoin Core is downloaded from bitcoin.org
  - Arm Linux for Raspi and Rock64
  - Linux version for VM
- Currently installed v0.20.1
- All other apps are connected to Bitcoin via RPC
  - Lightning and several wallets
  - Electrum server
  - Explorer
  - Mempool viewer
  - Multisig wallets
  - Samourai apps
  - BTCPay server
- By default, bitcoin uses Tor network to find peers, so the user doesn't have
to open the 8333 port for myNode

While setting up myNode, the user have three options:
- IBD: (initial blockchain download) download the blockchain from scratch.
ProTip: IBD can be sped up by increasing number of threads in bitcoin CLI.
- QuickSync: the default option to download a torrent from mynodebtc.com
and other myNode users
- Copy the blockchain from an existing source

- it takes 335 GB, as of Aug 23, 2020
