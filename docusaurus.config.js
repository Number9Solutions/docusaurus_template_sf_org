module.exports={
  "title": "Nonprofit Success Pack (NPSP)",
  "subtitle": "Product Documentation",
  "tagline": "Fundraise and manage donors and donations.",
  "url": "http://localhost:3000/",
  "baseUrl": "/",
  "organizationName": "Salesforce.org",
  "projectName": "sf-org-ngo-npsp-docs",
  "scripts": [
    "https://buttons.github.io/buttons.js"
  ],
  "stylesheets": [
    "/css/custom.css"
  ],
  "favicon": "img/favicon/favicon.ico",
  "customFields": {
    "fonts": {
      "myFont": [
        "SalesforceSansRegular",
        "sans-serif"
      ]
    }
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          // Docs folder path relative to website dir.
          path: 'docs',
          // Sidebars file relative to website dir.
          sidebarPath: require.resolve('./sidebars.json'),
        },
        "blog": {},
        "theme": {
          customCss: [require.resolve('./src/css/custom.css')]
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "navbar": {
      "title": "Nonprofit Success Pack (NPSP) Product Documentation",
      "logo": {
        "src": "img/salesforce-icon.png"
      },
      "items": [

      ]
    },
    "image": "img/docusaurus.png",
    "footer": {
      "links": [],
      "copyright": "Copyright © 2021 Salesforce.org",
      "logo": {
        "src": "img/salesforce-icon.png"
      }
    }
  }
}