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
          ["/getting-started/page0", 'Introduction'],
          ["/getting-started/page1", 'Getting Started']
        ]
      },
      {
        collapsable: true,
        title: "Device",
        children: [
          ["/device/page2", 'Upgrading Your Device'],
          ["/device/page3", 'Changing your Password']
        ]
      },
      {
        collapsable: true,
        title: "Bitcoin",
        children: [
          ["/bitcoin/page4", 'Viewing Bitcoin Status'],
          ["/bitcoin/page5", 'Using Electrum Wallets']
        ]
      },
      {
        collapsable: true,
        title: "Lightning",
        children: [
          ["/lightning/page6", 'Creating a Lightning Wallet'],
          ["/lightning/page7", 'Using LND Connect']
        ]
      },
      {
        collapsable: true,
        title: "Remote Access",
        children: [
          ["/remote-access/page8", "Remote Access via VPN"],
          ["/remote-access/page9", 'Setup your Device for Tor Access']
        ]
      }
    ]
  }
}