require('dotenv').config();

module.exports = {
    siteMetadata: {
        title: 'Chaosbay | ASYLUM',
    },
    plugins: [
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: process.env.SANITY_PROJECT_ID,
                dataset: 'production',
                useCdn: true,
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
    ],
};
