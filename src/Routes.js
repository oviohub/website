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
  ContactUsPage: {
    url: '/contact-us/',
    component: 'src/pages/contact-us.js',
  },
  FoundationPage: {
    url: '/foundation/',
    component: 'src/pages/foundation.js',
  },
  CompaniesPage: {
    url: '/companies/',
    component: 'src/pages/companies.js',
  },
  DevelopersPage: {
    url: '/developers/',
    component: 'src/pages/developers.js',
  },
};

export const getPageUrl = (routeId, append = '') =>
  routes[routeId] && `${routes[routeId].url}${append}`;
export const getPageSEO = (routeId) =>
  routes[routeId] && (routes[routeId].seo || {});
