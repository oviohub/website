# Ovio website

https://oviohub.com/

A GitHub repo for Ovio static website.

## Development

### Getting started

This project uses **[yarn](https://yarnpkg.com/en/)** package manager with **[gatsbyJs](https://www.gatsbyjs.org/)**, a project builder for **[React](https://reactjs.org/)**.

```bash
yarn
yarn start
```
The website will be available at <http://localhost:8000/>.

### Deployment

To generate the `public` folder, run

```bash
yarn build
```

### Project structure

```
website/
│   README.md
│   gatsby-config.js               <-- metadata for project title, description, plugins, etc.
│   gatsby-node.js                 <-- generation of pages in src/Routes.js
│   package.json                   <-- configuration of the project (dependencies, scripts, ...)
│   yarn.lock                      <-- auto-generated by yarn to manage dependencies
│
└───public/                        <-- auto-generated on "yarn start" command run
│   │   ....
|
└───node_modules/                  <-- auto-generated by yarn to manage dependencies
│   │   ....
│
└───src/
│   │   Routes.js                  <-- contains information (url, seo params, ...) about website's pages
│   │
|   └───assets/
│   │   │   ....
│   │
|   └───pages/                     <-- needed by gatsby. All files in it will be converted to a page
│   │   │   ....
│   │
|   └───services/                  <-- contains common files or modules for the website
│   │   │   ....
│   │
|   └───components/
│   │   |
│   |   |   styledComponents.js      <-- contains the default theme, global constants (colors, ...)
│   |   |
│   |   └───layouts/               <-- contains the wrapper for all pages, and fonts. Allows integration of the SEO params
│   │   │   │   ....
│   │   |
│   |   └───ui-library/            <-- contains customized components
│   │   |   │   ....
│   │   |
│   │   ....
│   │
│   ...
```
