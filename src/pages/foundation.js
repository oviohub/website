import React, { createRef } from 'react';

import Layout from '../components/layouts/Layout';
import MenuBar from '../components/MenuBar';
import Hero from '../components/Hero';
import OurMission from '../components/foundation/OurMission';
import Donation from '../components/foundation/Donation';
import LineSeparator from '../components/ui-library/LineSeparator';
import { scrollToRef } from '../components/ui-library/ScrollArrow';
import Footer from '../components/Footer';

import heroImage from '../assets/foundationPage/hero_foundation.jpg';

const heroContent = scrollRef => ({
  title: 'Ovio Foundation',
  // eslint-disable-next-line max-len
  subtitle: 'We believe that technology has the power to change our world for the better. To make it happen, we need to harness collective intelligence and develop software & algorithms ethically and with transparency.',
  backgroundImage: heroImage,
  button: { text: 'Make a Donation', onClick: () => scrollToRef(scrollRef) },
});

const FoundationPage = () => {
  const scrollRef = createRef();

  return (
    <Layout routeSlug="ContactUsPage">
      <MenuBar />
      <Hero {...heroContent(scrollRef)} />
      <OurMission />
      <div ref={scrollRef} />
      <Donation />
      <LineSeparator withoutMarginTo />
      <Footer />
    </Layout>
  );
};

export default FoundationPage;
