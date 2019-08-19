const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
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
