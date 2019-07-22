import React from 'react';

import Layout from '../components/layouts/Layout';
import MenuBar from '../components/MenuBar';
import Header from '../components/home/Header';
import MapSection from '../components/home/MapSection';
import GetInvolved from '../components/home/GetInvolved';
import LineSeparator from '../components/home/LineSeparator';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout routeSlug="HomePage">
    <MenuBar />
    <Header />
    <MapSection />
    <GetInvolved />
    <LineSeparator />
    <Footer />
  </Layout>
);

export default IndexPage;
