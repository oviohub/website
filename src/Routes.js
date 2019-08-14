/* eslint-disable max-len */
const routes = {
  HomePage: {
    url: '/',
    component: 'src/pages/index.js',
    seo: { title: 'Home', description: '' },
  },
  AboutPage: {
    url: '/about',
    component: 'src/pages/about.js',
    seo: { title: 'About', description: '' },
  },
  ModelPage: {
    url: '/model',
    component: 'src/pages/model.js',
    seo: { title: 'Our Model', description: '' },
  },
};

function getPageUrl(routeId) {
  return routes[routeId] && routes[routeId].url;
}

function getPageSeo(routeId) {
  return routes[routeId] && routes[routeId].seo;
}

function getPageTitle(routeId) {
  return routes[routeId] && routes[routeId].seo.title;
}

module.exports = { routes, getPageUrl, getPageSeo, getPageTitle };
