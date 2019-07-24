import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import './layout.css';
import { contentWidth } from './styledComponents';

const Layout = ({ children }) => (
  <>
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: contentWidth,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      <main>{children}</main>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
