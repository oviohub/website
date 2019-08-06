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
  WhatWeDoPage: {
    url: '/what-we-do/',
    component: 'src/pagesComponents/WhatWeDoPage.js',
    seo: { title: 'What we do', description: '' },
  },
  CompaniesPage: {
    url: '/companies/',
    component: 'src/pagesComponents/CompaniesPage.js',
    seo: { title: 'Companies', description: '' },
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
