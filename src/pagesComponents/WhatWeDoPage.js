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
  subtitle: `Ovio helps social impact organizations use and develop software more collaboratively through open-source
    and a cooperative mindset. We developed a platform to accelerate tech volunteering by aligning the incentives
    between organizations, volunteers and companies. By using a task-based approach, our product makes it easy for
    developers to give back.`,
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
