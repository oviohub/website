const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'production';

require('dotenv').config({ path: `.env/env.${activeEnv}` });

module.exports = {
  siteMetadata: {
    title: 'Ovio | Connecting Tech Minds and Impact Makers',
    // eslint-disable-next-line max-len
    description: 'Ovio revolutionizes skill-based volunteering for the tech industry by bringing together social impact organizations, passionate people, and companies to make tangible impact easy and rewarding for all.',
    author: 'Ovio',
    url: process.env.REACT_WEBSITE_URL || 'https://ovio.org',
    twitterId: '@OvioHub',
    lang: 'en',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/json`,
        name: 'json-pages',
      },
    },
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ovio - Website',
        short_name: 'Ovio',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/logo/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        stylesProvider: { injectFirst: true },
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-env-variables',
      options: {
        whitelist: ['GA_TRACKING_ID', 'REACT_WEBSITE_URL', 'SIB_API_KEY', 'SIB_CONTACT_LIST_ID'],
      },
    },
  ],
};
