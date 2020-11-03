/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [
        {
            resolve: 'gatsby-v2-plugin-page-transitions',
            options: {
                transitionTime: 500
            }
        }
    ],
}
