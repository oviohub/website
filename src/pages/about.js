import React from 'react';

import Layout from '../components/layouts/Layout';
import MenuBar from '../components/MenuBar';
import Intro from '../components/about/Intro';
import OurValuesBlock from '../components/about/OurValuesBlock';
import OurStory from '../components/about/OurStory';
import WhoWeAreBlock from '../components/about/WhoWeAreBlock';
import OurPartners from '../components/about/OurPartners';
import Press from '../components/about/Press';
import LineSeparator from '../components/ui-library/LineSeparator';
import Footer from '../components/Footer';

const AboutPage = () => (
  <Layout routeSlug="AboutPage">
    <MenuBar />
    <Intro />
    <OurValuesBlock />
    <WhoWeAreBlock />
    <OurStory />
    <OurPartners />
    <Press />
    <LineSeparator />
    <Footer />
  </Layout>
);

export default AboutPage;
