import React from 'react';

import Layout from '../components/layouts/Layout';
import MenuBar from '../components/MenuBar';
import Hero from '../components/Hero';
import GetInvolved from '../components/GetInvolved';
import LineSeparator from '../components/ui-library/LineSeparator';
import Footer from '../components/Footer';

import heroImage from '../assets/modelPage/hero.jpg';

const heroContent = {
  title: 'What we Do',
  // eslint-disable-next-line max-len
  subtitle: 'Ovio is a software company that empowers millions of developers to contribute to open-source. We connect developers and maintainers and help them build great things together!',
  backgroundImage: heroImage,
};

const ModelPage = () => (
  <Layout routeSlug="ModelPage">
    <MenuBar />
    <Hero {...heroContent} />
    <GetInvolved />
    <LineSeparator />
    <Footer />
  </Layout>
);

export default ModelPage;
