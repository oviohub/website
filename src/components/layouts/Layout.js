import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import './layout.css';
import SEO from './Seo';
import { defaultTheme } from '../styledComponents';

const Layout = ({ children, routeSlug }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      window.onbeforeunload = null;
    }
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <SEO routeSlug={routeSlug} />
        <main>{children}</main>
      </Container>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  routeSlug: PropTypes.string.isRequired,
};

export default Layout;
