exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;

  // Redirect to social impact collection
  createRedirect({
    fromPath: "/social-impact/",
    toPath: "https://explore.ovio.org/collection/social-impact/projects",
    isPermanent: true,
    redirectInBrowser: true,
  });
}
