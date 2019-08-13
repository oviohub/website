import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import { getPageTitle } from '../../Routes';
import './layout.css';
import SEO from '../Seo';
import { defaultTheme } from '../styledComponents';

const Layout = ({ routeSlug, children }) => (
  <ThemeProvider theme={defaultTheme}>
    <Container>
      <SEO title={getPageTitle(routeSlug)} />
      <main>{children}</main>
    </Container>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  routeSlug: PropTypes.string.isRequired,
};

export default Layout;
