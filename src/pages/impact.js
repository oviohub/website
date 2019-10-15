import React from 'react';

import Layout from '../components/layouts/Layout';
import MenuBar from '../components/MenuBar';
import Hero from '../components/Hero';
import LineSeparator from '../components/ui-library/LineSeparator';
import OurSolution from '../components/impact/OurSolution';
import SDGBlock from '../components/impact/SDGBlock';
import OurStats from '../components/impact/OurStats';
import OurContributions from '../components/impact/OurContributions';
import Footer from '../components/Footer';

import heroImage from '../assets/impactPage/hero.jpg';

const heroContent = {
  title: 'Impact',
  // eslint-disable-next-line max-len
  subtitle: 'By 2022, Ovio will ensure that 25% of Social Impact Organizations with open-source projects in the USA will get access to top quality tech and reliable, consistent support.',
  backgroundImage: heroImage,
};

const IndexPage = () => (
  <Layout routeSlug="ImpactPage">
    <MenuBar />
    <Hero {...heroContent} />
    <OurSolution />
    <OurStats />
    <SDGBlock />
    <OurContributions />
    <LineSeparator />
    <Footer />
  </Layout>
);

export default IndexPage;
