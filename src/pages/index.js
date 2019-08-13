import React from 'react';

import Layout from '../components/layouts/Layout';
import MenuBar from '../components/MenuBar';
import Hero from '../components/home/HeroHome';
import GetInvolved from '../components/GetInvolved';
import MapSection from '../components/home/MapSection';
import LineSeparator from '../components/ui-library/LineSeparator';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout routeSlug="HomePage">
    <MenuBar homeVersion />
    <Hero />
    <GetInvolved />
    <MapSection />
    <LineSeparator />
    <Footer />
  </Layout>
);

export default IndexPage;
