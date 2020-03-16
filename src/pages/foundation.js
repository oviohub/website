import React, { createRef } from 'react';

import Layout from '../components/layouts/Layout';
import MenuBar from '../components/MenuBar';
import Hero from '../components/Hero';
import OurMission from '../components/foundation/OurMission';
import Donation from '../components/foundation/Donation';
import OurSolution from '../components/foundation/OurSolution';
import SDGBlock from '../components/foundation/SDGBlock';
import BlockHowToTemplate from '../components/models/BlockHowToTemplate';
import LineSeparator from '../components/ui-library/LineSeparator';
import { scrollToRef } from '../components/ui-library/ScrollArrow';
import Footer from '../components/Footer';

import heroImage from '../assets/foundationPage/hero_foundation.jpg';
import request from '../assets/foundationPage/socialImpact.howTo.request.png';
import mark from '../assets/foundationPage/socialImpact.howto.mark.jpg';

const heroContent = scrollRef => ({
  title: 'Ovio Foundation',
  // eslint-disable-next-line max-len
  subtitle: 'We believe that technology has the power to change our world for the better. To make it happen, we need to harness collective intelligence and develop software & algorithms ethically and with transparency.',
  backgroundImage: heroImage,
  button: { text: 'Make a Donation', onClick: () => scrollToRef(scrollRef) },
});

const blockhowto = {
  title: 'Reach out',
  markImage: { publicURL: mark },
  processItems: [
    {
      title: 'Contact Us',
      // eslint-disable-next-line max-len
      text: 'Create more maintainable code and foster collaboration around your project while lowering development costs. Done right, open source brings visibility, transparency and scalability to your project. Transform your solution into an actively collaborative and sustainable solution.',
      buttons: [
        {
          text: 'Email Us',
          link: 'mailto:hello@ovio.org',
        },
      ],
      image: { publicURL: request },
    },
  ],
};

const FoundationPage = () => {
  const scrollRef = createRef();

  return (
    <Layout routeSlug="ContactUsPage">
      <MenuBar />
      <Hero {...heroContent(scrollRef)} />
      <OurMission />
      <div id="impact" />
      <OurSolution />
      <SDGBlock />
      <div id="reachOut" />
      <BlockHowToTemplate {...blockhowto} />
      <div ref={scrollRef} />
      <Donation />
      <LineSeparator withoutMarginTo />
      <Footer />
    </Layout>
  );
};

export default FoundationPage;
