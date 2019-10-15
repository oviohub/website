import React from 'react';

import Layout from '../components/layouts/Layout';
import MenuBar from '../components/MenuBar';
import Hero from '../components/Hero';
import BlockIntroTemplate from '../components/models/BlockIntroTemplate';
import MiddleBlock from '../components/companies/MiddleBlock';
import WhyVolunteering from '../components/companies/WhyVolunteering';
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
    subtitle: 'Smarter Strategy. Smarter Engagement. Smarter Purpose',
    // eslint-disable-next-line max-len
    subSubtitle: 'Are you looking for opportunities to mobilize your team around social impact projects in a smart and tailored way?',
    backgroundImage: heroImage,
    button: { text: 'Get in Touch', link: 'mailto:founders@ovio.org' },
  },

  block1introFirstPart: {
    items: [
      {
        title: 'Give your employees access to a variety of volunteering opportunities',
        // eslint-disable-next-line max-len
        paragraph: 'Ovio accumulates a large portfolio of software development projects (200+) to include every type of engineering skill set and interest in the social impact sector. <br />We curate and match your employees to opportunities that resonate with them. Over time, our software gets to know your employees and will continuously improve the quality of their matches.',
        image: { publicURL: introImg1 },
        button: { text: 'Browse Projects', link: 'https://explore.ovio.org' },
      },
      {
        title: 'Scale your skill-based volunteering program to the next level',
        // eslint-disable-next-line max-len
        paragraph: 'Deploy a scalable social impact program for your company. Our software allows you to focus on what matters most: engaging your employees without the burden of creating connections manually. <ExternalLink href="https://explore.ovio.org">Explore</ExternalLink> allows you to quickly manage robust global volunteer opportunities all year long and right away.',
        image: { publicURL: introImg2 },
      },
    ],
  },

  block1introSecondPart: {
    items: [
      {
        title: 'Leverage micro-volunteering for your employees',
        // eslint-disable-next-line max-len
        paragraph: 'Streamline employee engagement programs with a task-based approach. <ExternalLink href="https://explore.ovio.org">Explore</ExternalLink> makes skill-based volunteering a frictionless experience and impact reporting easily accessible by automating employee engagement tracking.',
        image: { publicURL: introImg3 },
      },
      {
        title: 'Create a rewarding and engaging volunteering experience for all',
        // eslint-disable-next-line max-len
        paragraph: 'Sponsor vetted projects on <ExternalLink href="https://explore.ovio.org">Explore</ExternalLink> and develop your branding material. By sponsoring projects, you can showcase your philanthropic work, boost your brand and create team-building experiences to enhance your company culture.<br /><ExternalLink href="https://explore.ovio.org">Explore</ExternalLink> rewards your company efforts and facilitate rewarding employees engagement.',
        image: { publicURL: introImg4 },
      },
    ],
  },

  block3howto: {
    title: 'Our offer:',
    // eslint-disable-next-line max-len
    subtitle: 'All of our corporate partnerships start with a trial phase to assess employee interest and Corporate Social Responsibility needs.',
    markImage: { publicURL: howToMark },
    taggedTextVersion: true,
    processItems: [
      {
        // eslint-disable-next-line max-len
        text: '<Tag>Smart matching</Tag> of your employees with technical projects<br /><br /><Tag>Kick off hackathons</Tag> with a selection of scoped projects for your team<br /><br /><Tag>Project sponsoring</Tag> to concentrate team efforts<br /><br /><Tag>Volunteering tracking</Tag> to measure and evaluate engagement',
        image: { publicURL: howToRequest },
        buttons: [
          { text: 'Work with us', link: 'https://calendly.com/founders-ovio' },
          { text: 'Get in Touch', link: 'mailto:founders@ovio.org' },
        ],
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
    {/* <WhoTrustedUs comments={page.block2feedback} /> */}
    <BlockHowToTemplate {...page.block3howto} />
    <LineSeparator />
    <Footer />
  </Layout>
);

export default CompaniesPage;
