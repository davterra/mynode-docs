module.exports = {
  title: "Mockup Docs",
  description: "Mockup Documentation Website for myNode",
  base: "/mynode-docs-vuepress-mockup/",
  themeConfig: {
    // nav: [
    //   { text: "Getting Started", link: "/"},
    // ]
    navbar: true,
    nav: [
      { text: "GitHub", link: "https://github.com/mynodebtc/mynode"},
      { text: "Website", link: "https://www.mynodebtc.com/"}
    ],
    logo: "/images/logo.png",
    sidebarDepth: 0,
    sidebar: [
      {
        collapsable: false,
        title: "Getting Started",
        children: [
          ["/intro/introduction", 'Introduction'],
          ["/intro/getting-started", 'Getting Started'],
        ]
      },
      {
        collapsable: true,
        title: "Device",
        children: [
          ["/device/changing-password", 'Change Your Password'],
          ["/device/existing-node", 'Using Data from Existing Node'],
          ["/device/upgrading-device", 'Upgrading your Device'],
          ["/device/customize-config", 'Customize your Configurations'],
          ["/device/ssh", 'SSH Key Authentication'],
        ]
      },
      {
        collapsable: true,
        title: "Bitcoin",
        children: [
          ["/bitcoin/bitcoin-status", 'Check Bitcoin Status'],
          ["/bitcoin/electrum", 'Using Electrum'],
          ["/bitcoin/electrum-remote-access", 'Remote Electrum Access'],
          ["/bitcoin/independent-sync", 'Independently Sync Blockchain'],
        ]
      },
      {
        collapsable: true,
        title: "Lightning",
        children: [
          ["/lightning/creating-lightning-wallet", 'Create a Lightning Wallet'],
          ["/lightning/using-lnd-connect", 'Using LND Connect'],
          ["/lightning/setting-lnd-alias", 'Setting your LND Alias'],
        ]
      },
      {
        collapsable: true,
        title: "Setup Base Images",
        children: [
          ["/setup-base-images/setup_base_image_raspi4", 'Raspberry Pi 4'],
          ["/setup-base-images/setup_base_image_raspi3", 'Raspberry Pi 3'],
          ["/setup-base-images/setup_base_image_rockpro64", 'RockPro64'],
          ["/setup-base-images/setup_base_image_rock64", 'Rock64'],
          ["/setup-base-images/setup_base_image_debian", 'Debian'],
          ["/setup-base-images/setup_base_image_other", 'Other'],
        ]
      },
      {
        collapsable: true,
        title: "Remote Access — VPN",
        children: [
          ["/remote-access-vpn/remote-vpn", 'Remote Access Via VPN'],
        ]
      },
      {
        collapsable: true,
        title: "Debugging",
        children: [
          ["/debugging/stuck-copying-files", 'My Device Gets Stuck Copying Files'],
        ]
      },
    ]
  }
}