import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import { getPageTitle } from '../../Routes';
import './layout.css';
import SEO from '../Seo';
import { defaultTheme } from '../styledComponents';

class Layout extends React.Component {
  componentDidMount() {
    if (typeof window === 'undefined') return;
    window.scrollTo(0, 0);
    window.onbeforeunload = null;
  }

  render() {
    const { children, routeSlug } = this.props;
    return (
      <ThemeProvider theme={defaultTheme}>
        <Container>
          <SEO title={getPageTitle(routeSlug)} />
          <main>{children}</main>
        </Container>
      </ThemeProvider>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  routeSlug: PropTypes.string.isRequired,
};

export default Layout;
