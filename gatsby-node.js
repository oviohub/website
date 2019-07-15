const path = require('path');
const { routes } = require('./src/Routes');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  Object.keys(routes).forEach((routeId) => {
    const route = routes[routeId];
    createPage({
      path: route.url,
      component: path.resolve(route.component),
    });
  });
};
