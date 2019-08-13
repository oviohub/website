/* eslint-disable max-len */
const routes = {
  HomePage: {
    url: '/',
    component: 'src/pages/HomePage.js',
    seo: { title: 'Home', description: '' },
  },
  AboutPage: {
    url: '/about/',
    component: 'src/pages/AboutPage.js',
    seo: { title: 'About', description: '' },
  },
  ModelPage: {
    url: '/model/',
    component: 'src/pages/ModelPage.js',
    seo: { title: 'Our model', description: '' },
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
