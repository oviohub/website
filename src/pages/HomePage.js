import React from 'react';

import Layout from '../components/layouts/Layout';
import MenuBar from '../components/MenuBar';
import Hero from '../components/home/Hero';
import MapSection from '../components/home/MapSection';
import GetInvolved from '../components/home/GetInvolved';
import LineSeparator from '../components/ui-library/LineSeparator';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout routeSlug="HomePage">
    <MenuBar homeversion />
    <Hero />
    <MapSection />
    <GetInvolved />
    <LineSeparator />
    <Footer />
  </Layout>
);

export default IndexPage;
