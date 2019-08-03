import React from 'react';

import Layout from '../components/layouts/Layout';
import MenuBar from '../components/MenuBar';
import Intro from '../components/about/Intro';
import WhatMakesUsUnique from '../components/about/WhatMakesUsUnique';
import OurValuesBlock from '../components/about/OurValuesBlock';
import WhoWeAreBlock from '../components/about/WhoWeAreBlock';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout routeSlug="AboutPage">
    <MenuBar fixed />
    <Intro />
    <WhatMakesUsUnique />
    <OurValuesBlock />
    <WhoWeAreBlock />
    <Footer />
  </Layout>
);

export default IndexPage;
