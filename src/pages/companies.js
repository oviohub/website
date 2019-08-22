import React from 'react';

import Layout from '../components/layouts/Layout';
import MenuBar from '../components/MenuBar';
import Hero from '../components/Hero';
import BlockIntroTemplate from '../components/models/BlockIntroTemplate';
import MiddleBlock from '../components/companies/MiddleBlock';
import WhyVolunteering from '../components/companies/WhyVolunteering';
import WhoTrustedUs from '../components/companies/WhoTrustedUs';
import BlockHowToTemplate from '../components/models/BlockHowToTemplate';
import LineSeparator from '../components/ui-library/LineSeparator';
import Footer from '../components/Footer';

import heroImage from '../assets/modelPage/companies.hero.jpg';
import introImg1 from '../assets/modelPage/companies.intro.1.png';
import introImg2 from '../assets/modelPage/companies.intro.2.png';
import introImg3 from '../assets/modelPage/companies.intro.3.png';
import introImg4 from '../assets/modelPage/companies.intro.4.png';

import howToMark from '../assets/modelPage/companies.howTo.mark.jpg';
import howToRequest from '../assets/modelPage/companies.howTo.request.png';

const page = {
  hero: {
    title: 'Companies',
    subtitle: 'Smarter Strategy, Smarter Engagement, Smarter Purpose',
    subSubtitle: `Are you looking for opportunities to mobilize your team around social impact projects in a smart
      and tailored way?`,
    backgroundImage: heroImage,
  },

  block1introFirstPart: {
    items: [
      {
        title: 'Variety',
        paragraph: `Ovio accumulates a large portfolio of software development projects (200+) to include every type of
          engineering skill set and interest in the social impact sector. \nWe curate and match your employees to
          opportunities they'll resonate with. Over time, our software gets to know your employees and will continuously
          improve finding the best match for.`,
        image: { publicURL: introImg1 },
      },
      {
        title: 'Scalable',
        paragraph: `Deploy a scalable social impact program for your company. Our software allows you to focus on what
          matters most: engaging your employees without the burden of creating connections manually. Explore allows you
          to quickly manage robust global volunteer opportunities all year long and right away.`,
        image: { publicURL: introImg2 },
      },
    ],
  },

  block1introSecondPart: {
    items: [
      {
        title: 'Micro-volunteering',
        paragraph: `Streamline employee engagement programs with a task-based approach. Explore makes skill-based
          volunteering a frictionless experience and impact reporting easily accessible by automating employee
          engagement tracking.`,
        image: { publicURL: introImg3 },
      },
      {
        title: 'Rewarding',
        paragraph: `Sponsor vetted projects on Explore and develop your branding material. By sponsoring projects,
          you can showcase your philanthropic work, engage your brand and create team building experiences to enhance
          your company culture.\nExplore rewards your company efforts and facilitate rewarding employees engagement.`,
        image: { publicURL: introImg4 },
      },
    ],
  },

  block3howto: {
    subtitle: 'All of our corporate partnerships start with a trial phase to assess employee interest and CSR needs.',
    markImage: { publicURL: howToMark },
    processItems: [
      {
        title: ' ',
        text: 'The first step is to request a demo by emailing info@oviohub.com.',
        image: { publicURL: howToRequest },
        button: { text: 'Request a demo', link: 'mailto:info@oviohub.com' },
      },
    ],
  },
};

const CompaniesPage = () => (
  <Layout routeSlug="CompaniesPage">
    <MenuBar />
    <Hero {...page.hero} />
    <BlockIntroTemplate {...page.block1introFirstPart} iconVersion />
    <MiddleBlock />
    <BlockIntroTemplate {...page.block1introSecondPart} iconVersion />
    <WhyVolunteering />
    <WhoTrustedUs comments={page.block2feedback} />
    <BlockHowToTemplate {...page.block3howto} />
    <LineSeparator />
    <Footer />
  </Layout>
);

export default CompaniesPage;
