import React from 'react';

import Layout from '../components/layouts/Layout';
import MenuBar from '../components/MenuBar';
import Hero from '../components/Hero';
import LineSeparator from '../components/ui-library/LineSeparator';
import OurSolution from '../components/impact/OurSolution';
import OurStats from '../components/impact/OurStats';
import OurContributions from '../components/impact/OurContributions';
import Footer from '../components/Footer';

// same hero as Model > Companies
import heroImage from '../assets/modelPage/companies.hero.jpg';

const heroContent = {
  title: 'Impact',
  subtitle: 'Lorem ipsum dolor ist amet',
  subSubtitle: `Lorem ipsum dolr si amet lorem ipsum dolr si amet lorem ipsum dolr si amet lorem ipsum
    dolr si amet lorem`,
  backgroundImage: heroImage,
};

const IndexPage = () => (
  <Layout routeSlug="ImpactPage">
    <MenuBar />
    <Hero {...heroContent} />
    <OurSolution />
    <OurStats />
    <OurContributions />
    <LineSeparator />
    <Footer />
  </Layout>
);

export default IndexPage;
