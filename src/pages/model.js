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
  subtitle: 'Ovio is a software company that revolutionizes pro-bono for the tech industry and brings together social impact organizations, people and companies to make skill-based volunteering easy and rewarding for all.',
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
