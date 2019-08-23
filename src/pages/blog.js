import React from 'react';

import Layout from '../components/layouts/Layout';
import MenuBar from '../components/MenuBar';
import Hero from '../components/Hero';
import LineSeparator from '../components/ui-library/LineSeparator';
import Footer from '../components/Footer';

import heroImage from '../assets/contactUsPage/hero.jpg';

const heroContent = {
  title: 'Coming soon ... 🎨',
  backgroundImage: heroImage,
};

const IndexPage = () => (
  <Layout routeSlug="BlogPage">
    <MenuBar />
    <Hero {...heroContent} />
    <LineSeparator withoutMarginTo />
    <Footer />
  </Layout>
);

export default IndexPage;
