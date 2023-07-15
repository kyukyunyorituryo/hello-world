/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    // If you didn't use the resolveSiteUrl option this needs to be set
    siteUrl: `https://kyukyunyorituryo.github.io/hello-world/`,
  },
  plugins: [`gatsby-plugin-sitemap`],
  pathPrefix: "/hello-world",
}
