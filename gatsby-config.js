// postcss.config.js
const purgecss = require("@fullhuman/postcss-purgecss")({
    // Specify the paths to all of the template files in your project
    content: ["./content/**/*.md","./src/**/*.jsx", "./src/**/*.vue", "./src/**/*.tsx"],
  
    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  })
  
  module.exports = {
    siteMetadata: {
      title: `KR Game Studios`,
      author: {
        name: `Kayne Ruse`,
        summary: `Making games on a shoestring budget.`,
      },
      description: `KR Game Studios Website`,
      siteUrl: `https://krgamestudios.com/`,
      social: {
        twitter: `KRGameStudios`,
        github: `KRGameStudios`,
        facebook: `KRGameStudios`,
        patreon: `krgamestudios`

      },
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/content/projects`,
          name: `projects`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/content/pages`,
          name: `pages`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/content/assets`,
          name: `assets`,
        },
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1024,
                quality: 90,
                withWebp: true,

              },
            },
            {
              resolve: `gatsby-remark-responsive-iframe`,
              options: {
                wrapperStyle: `margin-bottom: 1.0725rem`,
              },
            },
            `gatsby-remark-prismjs`,
            `gatsby-remark-copy-linked-files`,
            `gatsby-remark-smartypants`,
          ],
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: ``,
        },
      },
      `gatsby-plugin-feed`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `KR Game Studios`,
          short_name: `KR Game Studios`,
          start_url: `/`,
          background_color: `#ffffff`,
          theme_color: `#663399`,
          display: `minimal-ui`,
        //   icon: `content/assets/gatsby-icon.png`,
        },
      },
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-plugin-postcss`,
        options: {
          postCssPlugins: [
            require("tailwindcss"),
            require("postcss-import")(), // Add support for sass-like '@import'
            require("postcss-extend")(), // Add support for sass-like '@extend'
            require("postcss-nesting")(), // Add support for sass-like nesting of rules
            
            ...(process.env.NODE_ENV === "production"
              ? [
                  // If not dev then build with these
                  purgecss,
                  require(`postcss-preset-env`)({
                    stage: 0,
                  }),
                  require('cssnano')()
                ]
              : []),
          ],
        },
      },
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // `gatsby-plugin-offline`,
      `gatsby-plugin-typescript`,
    ],
  }