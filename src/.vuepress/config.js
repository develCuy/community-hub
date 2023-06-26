const { description } = require('../../package')
const path = require('path')

module.exports = {
  title: 'Rollux Docs',
  description: description,
  base: '/community-hub/',

  head: [ 
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/logos/icon_small.png"}],
  ],

//  cache: false,

  theme: path.resolve(__dirname, './theme'),
  themeConfig: {

    contributor: false,
    hostname: 'https://sys-labs.github.io',
    logo: '/assets/logos/logo.png',
    docsDir: 'src',
    docsRepo: 'https://github.com/sys-labs/community-hub',
    docsBranch: 'main',
    lastUpdated: false,
    darkmode: 'disable',
    themeColor: false,
    blog: false,
    iconPrefix: 'far fa-',
    pageInfo: false,
    pwa: {
      cacheHTML: false,
    },
    activeHash: {
      offset: -200,
    },
    algolia: {
      //appId: '8LQU4WGQXA',
      //apiKey: '2c1a86142192f96dab9a5066ad0c1d50',
      //indexName: 'optimism'
        appId: '5OFZ30CWBS',
        apiKey: 'b353349f71a345d76d653c5aaa04996f',
        indexName: 'dev_rolluxDocs'
    },
    nav: [
      /* When you update here, don't forget to update the tiles
         in src/README.md */
      {
        text: "Help Center",
        link: '/docs/help/'
      },      
      {
        text: "Dev Quick Start",
        link: '/docs/guides/'
      },      
      {
        text: 'How Rollux Works',
        link: '/docs/protocol/',
      },
      {
        text: 'Dev Docs',
        link: '/docs/developers/',
      },      
      {
        text: 'Project Support',
        link: '/docs/biz/'        
      },
      {
        text: 'Mainnet Beta',
        link: '/docs/security-model/',
      },
      {
        text: 'Syscoin L1',
        link: '/docs/sys/',
      },
      {
        text: 'Key differences',
        link: '/docs/key-differences/',
      },
      /*{
        text: "Governance",
        link: "/docs/governance/"
      }, */  
      {
        text: 'Contribute',
        link: '/docs/contribute/',
      },
      {
        text: 'Legal',
        link: '/docs/legal/',
      },

      {
        text: 'Community',
        items: [
          {
            icon: 'discord',
            iconPrefix: 'fab fa-',
            iconClass: 'color-discord',
            text: 'Discord',
            link: 'https://discord.gg/rollux',
          },
          {
            icon: 'github',
            iconPrefix: 'fab fa-',
            iconClass: 'color-github',
            text: 'GitHub',
            link: 'https://github.com/SYS-Labs/rollux',
          },
          {
            icon: 'twitter',
            iconPrefix: 'fab fa-',
            iconClass: 'color-twitter',
            text: 'Twitter',
            link: 'https://twitter.com/RolluxL2',
          },
          {
            icon: 'computer-classic',
            iconClass: 'color-ecosystem',
            text: 'Ecosystem',
            link: 'https://rollux.com/ecosystem',
          }
         
        ]
      },
    ],
    searchPlaceholder: 'Search the docs',
    sidebar: {    
      '/docs/sys/': [
        [
          '/docs/sys/',
          'Rollux'
        ],
        [
          'https://jsidhu.medium.com/the-ultimate-guide-to-rollups-f8c075571770',
          'The Vision'
        ],
      ],
      '/docs/governance/': [
        [
          '/docs/governance/',
          'What is the Optimism Collective?'
        ],
        [
          'https://www.optimism.io/vision',
          'The Optimistic Vision'
        ],
        {
          title: "OP Holders",
          children: [
            '/docs/governance/howto-delegate.md',
            '/docs/governance/economics.md',
            '/docs/governance/allocations.md',
            '/docs/governance/airdrop-2.md',                         
            '/docs/governance/airdrop-1.md'
          ],
          collapsable: true,
        },                
        {
          title: "Delegates",
          children: [          
                '/docs/governance/delegate.md',
                '/docs/governance/existing-delegate.md',                
                '/docs/governance/delegate-info.md',
          ],
          collapsable: true,
        },
        {
          title: "Proposal Submitters",
          children: [
            '/docs/governance/proposals.md',
            [
              'https://gov.optimism.io/tags/c/proposals/38/passed',
              'Passed Proposals'
            ]
          ],
          collapsable: true,
        },
        {
          title: "Token House Governance",
          children: [
            '/docs/governance/token-house.md',
            '/docs/governance/token-house-history.md',
            '/docs/governance/gov-fund.md', 
            [
              "https://docs.google.com/spreadsheets/d/1Ul8iMTsOFUKUmqz6MK0zpgt8Ki8tFtoWKGlwXj-Op34",
              "Governance Fund Tracker"
            ],            
            [
              'https://gov.optimism.io/t/working-constitution-of-the-optimism-collective/55',
              "Working Constitution"
            ],
            [
              'https://github.com/ethereum-optimism/OPerating-manual/blob/main/manual.md',
              'Operating Manual'
            ]
          ],
          collapsable: true,
        },  
        {
          title: "Citizen House Governance",
          children: [
            '/docs/governance/citizens-house.md',
            '/docs/governance/citizenship.md',
            '/docs/governance/retropgf-2.md',                        
          ],
          collapsable: true
        },
        [
          'https://calendar.google.com/calendar/u/0?cid=Y19mbm10Z3VoNm5vbzZxZ2JuaTJncGVyaWQ0a0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t',
          'Governance Calendar'
        ],
        '/docs/governance/what-is-the-optimism-foundation.md',
        '/docs/governance/attestation-station.md' 
      ],
      '/docs/guides/': [
        {
          title: "Beginner",
          children: [
            [
              "https://github.com/sys-labs/rollux-tutorial/tree/main/getting-started",
              "Developing smart contracts on Rollux"
            ],            
            '/docs/guides/nft.md',            
            '/docs/guides/testing.md',
            [
              'https://www.ankr.com/docs/#advanced-apissdks',
              'Using ANKR Advanced API/SDK to query Rollux'
            ]
          ],
          collapsable: true,
        },
        {
          title: "Getting your dapp on Rollux",
          children: [
            [
              "https://github.com/sys-labs/rollux-tutorial/tree/main/cross-dom-bridge-eth",
              "Bridging SYS with the Rollux SDK"
            ],
            [
              "https://github.com/sys-labs/rollux-tutorial/tree/main/cross-dom-bridge-erc20",
              "Bridging ERC-20 tokens with the Rollux SDK"
            ],
            [
              "https://github.com/sys-labs/rollux-tutorial/tree/main/sdk-view-tx",
              "View transactions between layers"
            ],
            [
              "https://github.com/sys-labs/rollux-tutorial/tree/main/standard-bridge-standard-token",
              "Creating an ERC-20 Token on L2 to represent one on L1"
            ],
            [
              "https://github.com/sys-labs/rollux-tutorial/tree/main/standard-bridge-custom-token",
              "Registering a Custom ERC-20 Token on L2"
            ],
            [
              "https://github.com/sys-labs/rollux-tutorial/tree/main/sdk-estimate-gas",
              "Estimate the costs of a Rollux (L2) transaction"
            ]
          ],
          collapsable: true,
        },
        {
          title: "Specific guides",
          children: [
            '/docs/guides/wallet-dev.md',
            '/docs/guides/cex-dev.md',
            '/docs/guides/bridge-dev.md',    
          ],
          collapsable: true,
        },        

      ],
      '/docs/help/': [
        {
          title: "Getting Started",
          children: [
            '/docs/help/start-using-rollux-mainnet.md',     
            '/docs/help/connect-pali.md',            
            '/docs/help/connect-metamask.md',
            '/docs/help/start-using-rollux-testnet.md'
          ],
          collapsable: true,
        },
        {
          title: "Using the Rollux Ecosystem",
          children: [
            '/docs/help/using-rollux-portal.md'
          ],
          collapsable: true,
        },
        {
          title: "Other Topics",
          children: [    
          ],
          collapsable: true,
        }, 
        
        '/docs/help/get-support.md',

      ],
      '/docs/security-model/': [
        '/docs/security-model/optimism-security-model.md',
        '/docs/security-model/bounties.md',
        [
          //'https://medium.com/ethereum-optimism/our-pragmatic-path-to-decentralization-cb5805ca43c1',
          //'Decentralizing Optimism'
        ]
      ],
      '/docs/sys/': [
        '/docs/sys/Intro.md',
        '/docs/sys/Finality.md',
        '/docs/sys/PoDA.md',
        '/docs/sys/Gas.md',
        [
          'Syscoin L1'
        ]
      ],
 
      '/docs/protocol/': [
        {
          title: 'How Rollux Works',
          children: [
            '/docs/protocol/1-design-philosophy.md',
            '/docs/protocol/2-rollup-protocol.md',
          ],
          collapsable: false,          
        },
        {
          title: 'Protocol Specs',
          children: [
            '/docs/protocol/protocol-2.0.md',
            [
              "https://github.com/sys-labs/rollux/blob/33741760adce92c8bdf61f693058144bb6986e30/specs/derivation.md#batch-submission",
              "Sequencing and Batch Submission Overview"
            ],
          ],
          collapsable: false,  
        }
      ],
      '/docs/developers/': [
        //'/docs/developers/releases.md',
        {
          title: 'Building on Rollux',
          children: [
            [
              'https://github.com/sys-labs/rollux-tutorial/tree/main/getting-started#development-stacks',
              "Development stacks"
            ],
            '/docs/developers/build/transaction-fees.md',
            '/docs/developers/build/system-contracts.md',
            '/docs/developers/build/dev-node.md',
            '/docs/developers/build/run-a-node.md',
            '/docs/developers/build/differences.md',
            '/docs/developers/build/json-rpc.md',
            '/docs/developers/build/testing-dapps.md',
            '/docs/developers/build/cheap-dapp.md'

          ],
        },
        {
          title: 'Bridging L1 and L2',
          children: [
            '/docs/developers/bridge/basics.md',
            '/docs/developers/bridge/standard-bridge.md',
            '/docs/developers/bridge/messaging.md',
            '/docs/developers/bridge/comm-strategies.md'
          ],
          collapsable: true,
        },
        '/docs/developers/known-issues.md',
        { 
          title: "Useful Tools",
          children: [
            '/docs/useful-tools/networks.md',
            '/docs/useful-tools/debugging.md',
            '/docs/useful-tools/faucets.md',
            '/docs/useful-tools/monitoring.md',
            '/docs/useful-tools/explorers.md',
            '/docs/useful-tools/providers.md',
            '/docs/useful-tools/oracles.md',
            '/docs/useful-tools/meta-tx.md'
            //['https://www.optimism.io/apps/tools', 'Third Party Tools'],
          ],
        },
        {
          title: "SDK",
          children: [
            '/docs/sdk/js-client.md',
            [
              'https://github.com/SYS-Labs/rollux/tree/develop/packages/contracts/docs',
              'Rollux Contracts'
            ],
            [
              'https://www.ankr.com/docs/#advanced-apissdks',
              'Ankr API/SDK'
            ],           
          ]
        },
        '/docs/developers/media.md',
        {
          title: "OP Stack: Bedrock",
          children: [
            '/docs/developers/bedrock/explainer.md',
            '/docs/developers/bedrock/differences.md',
            '/docs/developers/bedrock/public-testnets.md',
            '/docs/developers/bedrock/node-operator-guide.md',
            '/docs/developers/bedrock/upgrade-guide.md',
            '/docs/developers/bedrock/metrics.md'
          ]
        }
      ],
      '/docs/legal/': [

            '/docs/legal/data-privacy-policy.md',
            '/docs/legal/community-notice-1.md',
            '/docs/legal/portal-terms.md',

      ],
    }
  },

  plugins: [
    "@vuepress/pwa",
    [
      '@vuepress/plugin-medium-zoom',
      {
        // When an image is inside a link, it means we don't to expand it
        // when clicked
        selector: ':not(a) > img'
      }
    ],
    "plausible-analytics"
  ]
}
  
module.exports.themeConfig.sidebar["/docs/useful-tools/"] = module.exports.themeConfig.sidebar["/docs/developers/"]
