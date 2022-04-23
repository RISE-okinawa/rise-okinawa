/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: `RISE行政書士事務所 沖縄の行政書士事務所`,
    description: `RISE行政書士事務所のウェブサイトです。行政書士の仕事を通して、沖縄の発展への貢献を目指しています。`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto Sans JP`,
          `source sans pro\:300,400,400i,700`,
        ],
        display: 'swap'
      }
    },
  ],
}
