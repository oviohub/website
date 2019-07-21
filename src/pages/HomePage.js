import React from 'react';

import Layout from '../components/layouts/Layout';
import MenuBar from '../components/MenuBar';
import Header from '../components/home/Header';
import MapSection from '../components/home/MapSection';

const IndexPage = () => (
  <Layout routeSlug="HomePage">
    <MenuBar />
    <Header />
    <MapSection />
  </Layout>
);

export default IndexPage;
