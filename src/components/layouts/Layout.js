import React from 'react';
import PropTypes from 'prop-types';
import { styled, ThemeProvider } from '@material-ui/styles';
import { Container, createMuiTheme } from '@material-ui/core';

import { getPageTitle } from '../../Routes';
import './layout.css';
import SEO from '../Seo';
import { colors } from '../styledComponents';

const theme = createMuiTheme({
  palette: {
    primary: { main: `${colors.white}` },
    secondary: { main: `${colors.darkGray}` },
  },
});

const MainContainer = styled(Container)({
});

const Layout = ({ routeSlug, children }) => (
  <ThemeProvider theme={theme}>
    <MainContainer>
      <SEO title={getPageTitle(routeSlug)} />
      <main>{children}</main>
    </MainContainer>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  routeSlug: PropTypes.string.isRequired,
};

export default Layout;
