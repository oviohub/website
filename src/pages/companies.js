import React from 'react';

import Layout from '../components/layouts/Layout';
import MenuBar from '../components/MenuBar';
import Hero from '../components/Hero';
import Testimonies from '../components/Testimonies';
import BlockIntroTemplate from '../components/models/BlockIntroTemplate';
import BlockHowToTemplate from '../components/models/BlockHowToTemplate';
import LineSeparator from '../components/ui-library/LineSeparator';
import Footer from '../components/Footer';
import { companiesTestimony } from '../services/testimonies';

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
    subtitle: 'Open source community management for developer teams',
    // eslint-disable-next-line max-len
    subSubtitle: 'The best tech talents value open source',
    backgroundImage: heroImage,
    button: { text: 'Get in Touch', link: 'mailto:founders@ovio.org' },
  },

  block1introFirstPart: {
    items: [
      {
        title: 'Give your employees access to a variety of open source opportunities',
        // eslint-disable-next-line max-len
        paragraph: 'Ovio accumulates a large portfolio of curated open source projects. We match developers to projects and tasks that matches their skills and interests.',
        image: { publicURL: introImg1 },
        button: { text: 'Browse Projects', link: 'https://explore.ovio.org' },
      },
      {
        title: 'Activate the dev community on your open source projects',
        // eslint-disable-next-line max-len
        paragraph: 'Showcase your open source projects and build your tech credibility. Ovio lets you grow, manage, and present your open source program to help you attract and hire a more diverse tech team.',
        image: { publicURL: introImg2 },
      },
    ],
  },

  block1introSecondPart: {
    items: [
      {
        title: 'Engage your employees on open source projects you use',
        // eslint-disable-next-line max-len
        paragraph: 'Encourage your engineering teams to contribute to open source code and build an open culture. Ovio makes contribution to open projects easy to help you retain and attract tech talents.',
        image: { publicURL: introImg3 },
      },
      {
        title: 'Track you metric and make an impact',
        // eslint-disable-next-line max-len
        paragraph: 'Engage your team on impactful projects and take your community engagement to the next stage. In addition to your open source efforts, showcase your impact commitment and build your employer branding',
        image: { publicURL: introImg4 },
      },
    ],
  },

  block3howto: {
    title: 'Get in Touch',
    // eslint-disable-next-line max-len
    markImage: { publicURL: howToMark },
    taggedTextVersion: true,
    processItems: [
      {
        // eslint-disable-next-line max-len
        text: '<Tag>Keep Track</Tag> of your contributions and level of influence<br /><br /><Tag>Reward</Tag> external contributors and dedicated employees<br /><br /><Tag>Identify</Tag> project maintainers and increase retention<br /><br /><Tag>Showcase</Tag> your work!',
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
    <BlockIntroTemplate {...page.block1introSecondPart} iconVersion />
    {/* <WhoTrustedUs comments={page.block2feedback} /> */}
    <Testimonies title="They trust us" data={companiesTestimony} />
    <BlockHowToTemplate {...page.block3howto} />
    <LineSeparator />
    <Footer />
  </Layout>
);

export default CompaniesPage;
