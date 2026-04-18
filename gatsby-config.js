/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    pathPrefix: process.env.BUILD_DEMO === '1' ? '/commenting-system-for-gatsby' : undefined,
    plugins: [
        {
            resolve: 'gatsby-v2-plugin-page-transitions',
            options: {
                transitionTime: 500
            }
        }
    ],
}
