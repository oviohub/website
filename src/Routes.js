const modelPage = require('./json/modelPage.json');

/* eslint-disable max-len */
const routes = {
  HomePage: {
    url: '/',
    component: 'src/pagesComponents/HomePage.js',
    seo: { title: 'Home', description: '' },
  },
  AboutPage: {
    url: '/about/',
    component: 'src/pagesComponents/AboutPage.js',
    seo: { title: 'About', description: '' },
  },
  ModelPage: {
    url: '/our-model/',
    component: 'src/pagesComponents/ModelPage.js',
    seo: { title: 'Our Model', description: '' },
  },
  CompaniesPage: {
    url: '/companies/',
    component: 'src/pagesComponents/CompaniesPage.js',
    seo: { title: 'Companies', description: '' },
  },
  ContactUsPage: {
    url: '/contact-us/',
    component: 'src/pagesComponents/ContactUsPage.js',
    seo: { title: 'Contact Us', description: '' },
  },
};

modelPage.forEach((page) => {
  routes[page.slug] = {
    url: page.path,
    seo: page.seo,
  };
});

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
