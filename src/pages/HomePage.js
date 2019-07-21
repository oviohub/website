import React from 'react';

import Layout from '../components/layouts/Layout';
import MenuBar from '../components/MenuBar';
import Header from '../components/Header';

const IndexPage = () => (
  <Layout routeSlug="HomePage">
    <MenuBar />
    <Header />
  </Layout>
);

export default IndexPage;
