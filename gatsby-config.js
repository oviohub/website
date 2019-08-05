module.exports = {
  siteMetadata: {
    title: 'Ovio',
    description: 'Accelerate Change',
    author: 'Ovio',
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
        icon: 'src/assets/logo/icon-144x144.png',
      },
    },
  ],
};
