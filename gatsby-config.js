module.exports = {
  siteMetadata: {
    title: `Leapcode Open`,
    description: `Make your first Open source contribution`,
    author: `@isethu`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `leapcode-open`,
        short_name: `leapcode`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["AFont", "AFont-Ex"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },


    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
