module.exports = {
  title: "Cosmos Hub",
  description: "Information about the Cosmos Hub blockchain.",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Ubuntu:300,500,700"
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Muli:400,400i,700,700i"
      }
    ]
  ],
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-51029217-7"
      }
    ]
  ],
  markdown: {
    lineNumbers: true
  },
  /*
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      label: "English",
      lang: "en-US", // this will be set as the lang attribute on <html>
      title: "Cosmos Hub",
      description: "Website for the Cosmos Hub"
    },
    "/ko/": {
      label: "한국어",
      lang: "ko",
      title: "Cosmos Hub",
      description: "Website for the Cosmos Hub (한국어)"
    },
    "/zh/": {
      label: "简体中文",
      lang: "zh-CN",
      title: "Cosmos Hub",
      description: "Website for the Cosmos Hub (简体中文)"
    }
  },
  */
  themeConfig: {
    logo: "/hub.svg",
    sidebarDepth: 0,
    nav: [
      {
        text: "Wallets",
        items: [
          { text: "Lunie", link: "https://lunie.io" },
          { text: "Cosmostation", link: "https://www.cosmostation.io" },
          { text: "imToken", link: "https://token.im/" },
          { text: "Wetez", link: "https://www.wetez.io/pc/homepage)" }
        ]
      },
      {
        text: "Block Explorers",
        items: [
          { text: "Big Dipper", link: "https://cosmos.bigdipper.live" },
          { text: "Cosmos Overview", link: "https://genesislab.net" },
          { text: "Cosmos Visualizer", link: "https://nylira.net/3d" },
          { text: "Hubble", link: "https://hubble.figment.network" },
          { text: "Mintscan", link: "https://mintscan.io" },
          { text: "Stargazer", link: "https://stargazer.certus.one" }
        ]
      },
      { text: "Telegram", link: "https://t.me/cosmosproject" },
      { text: "Community", link: "https://cosmos.network/community" }
    ],
    sidebar: [
      {
        title: "Cosmos Hub",
        collapsable: false,
        children: [["/", "Introduction"]]
      },
      {
        title: "Delegators",
        collapsable: false,
        children: [
          "/delegators/delegator-faq",
          "/delegators/delegator-security",
          "/docs/delegator-guide-cli"
        ]
      },
      {
        title: "Validators",
        collapsable: false,
        children: [
          "/docs/validators/overview",
          "/docs/validators/validator-faq",
          "/docs/validators/validator-setup",
          "/docs/validators/security",
          {
            title: "KMS",
            collapsable: false,
            children: [
              "/docs/validators/kms/kms",
              "/docs/validators/kms/kms_ledger"
            ]
          }
        ]
      },
      {
        title: "Documentation",
        collapsable: false,
        children: [
          ["/docs/", "Overview"],
          "/docs/what-is-gaia",
          "/docs/installation",
          "/docs/join-mainnet",
          "/docs/join-testnet",
          "/docs/deploy-testnet",
          "/docs/reproducible-builds"
        ]
      }
    ]
  }
};
