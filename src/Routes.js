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
  if (!routes[routeId]) return undefined;
  return routes[routeId].url;
}

function getPageSeo(routeId) {
  if (!routes[routeId]) return undefined;
  return routes[routeId].seo;
}

function getPageTitle(routeId) {
  if (!routes[routeId]) return undefined;
  return routes[routeId].seo.title;
}

module.exports = { routes, getPageUrl, getPageSeo, getPageTitle };
