import React from 'react';

import Layout from '../components/layouts/Layout';
import MenuBar from '../components/MenuBar';
import Hero from '../components/Hero';
import LineSeparator from '../components/ui-library/LineSeparator';
import Footer from '../components/Footer';

import heroImage from '../assets/contactUsPage/hero.jpg';

const heroContent = {
  title: 'Contact us',
  subtitle: (
    <>
      hello@ovio.org
      <br />
      <br />
      +1 650 283 9210
      <br />
      <br />
      San Francisco, California
    </>
  ),
  backgroundImage: heroImage,
};

const IndexPage = () => (
  <Layout routeSlug="ContactUsPage">
    <MenuBar />
    <Hero {...heroContent} />
    <LineSeparator withoutMarginTo />
    <Footer />
  </Layout>
);

export default IndexPage;
