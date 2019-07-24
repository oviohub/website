/* eslint-disable max-len */
const routes = {
  HomePage: {
    url: '/',
    component: 'src/pages/HomePage.js',
    seo: {
      title: 'Home',
      description: '',
    },
  },
};

function getPageUrl(routeId) {
  return routes[routeId].url;
}

function getPageSeo(routeId) {
  return routes[routeId].seo;
}

function getPageTitle(routeId) {
  return routes[routeId].seo.title;
}

module.exports = { routes, getPageUrl, getPageSeo, getPageTitle };
