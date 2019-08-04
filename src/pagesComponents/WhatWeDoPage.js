import React from 'react';

import Layout from '../components/layouts/Layout';
import MenuBar from '../components/MenuBar';
import Hero from '../components/Hero';
import GetInvolved from '../components/GetInvolved';
import LineSeparator from '../components/ui-library/LineSeparator';
import Footer from '../components/Footer';

import heroImage from '../assets/whatWeDoPage/hero.png';

const heroContent = {
  title: 'What we Do',
  subtitle: `Ovio is a software company that revolutionizes pro-bono for the tech industry and brings together social
    impact organizations, people and companies to make skill-based volunteering easy and rewarding for all.`,
  backgroundImage: heroImage,
};

const IndexPage = () => (
  <Layout routeSlug="WhatWeDoPage">
    <MenuBar />
    <Hero {...heroContent} />
    <GetInvolved />
    <LineSeparator />
    <Footer />
  </Layout>
);

export default IndexPage;
