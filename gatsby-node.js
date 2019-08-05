const path = require('path');
const { routes } = require('./src/Routes');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  Object.keys(routes).forEach((routeId) => {
    const route = routes[routeId];
    if (!route.component) return;
    createPage({
      path: route.url,
      component: path.resolve(route.component),
    });
  });

  const ModelPageTemplate = path.resolve('src/templates/ModelPageTemplate.js');

  return graphql(`
    {
      allModelPageJson(limit: 1000) {
        edges {
          node {
            path
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      Promise.reject(result.errors);
      return;
    }
    result.data.allModelPageJson.edges.forEach(({ node }) => {
      createPage({
        path: node.path,
        component: ModelPageTemplate,
      });
    });
  });
};
