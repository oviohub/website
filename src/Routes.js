const modelPage = require('./json/modelPage.json');

export const routes = {
  NotFound: {
    url: '/404/',
    component: 'src/pages/404.js',
  },
  HomePage: {
    url: '/',
    component: 'src/pages/index.js',
  },
  AboutPage: {
    url: '/about/',
    component: 'src/pages/about.js',
  },
  ModelPage: {
    url: '/model/',
    component: 'src/pages/model.js',
  },
  CompaniesPage: {
    url: '/companies/',
    component: 'src/pages/companies.js',
  },
  ContactUsPage: {
    url: '/contact-us/',
    component: 'src/pages/contact-us.js',
  },
  ImpactPage: {
    url: '/impact/',
    component: 'src/pages/impact.js',
  },
};

modelPage.forEach((page) => {
  routes[page.slug] = {
    url: page.path,
    seo: page.seo,
  };
});

export const getPageUrl = routeId => routes[routeId] && routes[routeId].url;
export const getPageSEO = routeId => routes[routeId] && (routes[routeId].seo || {});
