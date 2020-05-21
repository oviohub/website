import React from 'react';

import Layout from '../components/layouts/Layout';
import MenuBar from '../components/MenuBar';
import Hero from '../components/Hero';
import Testimonies from '../components/Testimonies';
import Features from '../components/companies/Features';
import BlockIntroTemplate from '../components/models/BlockIntroTemplate';
import BlockHowToTemplate from '../components/models/BlockHowToTemplate';
import LineSeparator from '../components/ui-library/LineSeparator';
import Footer from '../components/Footer';
import {
  companiesTestimony,
  wfpDescription,
  cmsDescription,
} from '../services/testimonies';

import backgroundImage from '../assets/companiesPage/companies.hero.jpg';
import introMark from '../assets/companiesPage/companies.intro.mark.png';
import intro1 from '../assets/companiesPage/companies.intro.1.svg';
import intro2 from '../assets/companiesPage/companies.intro.2.svg';
import intro3 from '../assets/companiesPage/companies.intro.3.svg';
import intro4 from '../assets/companiesPage/companies.intro.4.svg';
import intro5 from '../assets/companiesPage/companies.intro.5.svg';
import howToMark from '../assets/companiesPage/companies.howTo.mark.jpg';
import howToRequest from '../assets/companiesPage/companies.howTo.request.png';

const pageInfo = {
  hero: {
    title: 'Companies',
    subtitle:
      'Open source management booster for <br /> contributing companies',
    backgroundImage,
    button: { text: 'Explore', link: 'https://explore.ovio.org' },
  },
  intro: {
    markImage: introMark,
    isMarkOnLeft: true,
    items: [
      {
        title: 'Accelerate open source visibility',
        paragraph:
          // eslint-disable-next-line max-len
          'The best tech talent values open source. Ovio lets you grow, manage, and showcase your open source program to help you attract and hire a more diverse team.',
        image: intro1,
      },
      {
        title: 'Empower developers to contribute',
        paragraph:
          // eslint-disable-next-line max-len
          'Ovio hosts a large portfolio of curated open source projects. We connect developers with projects and tasks that match their skills and interests, engaging your engineering team on the open source dependencies you use and developing your open culture.',
        image: intro2,
      },
      {
        title: 'Boost open source velocity',
        paragraph:
          // eslint-disable-next-line max-len
          'Activate the open source community and save your maintainers’ time. Use Ovio Maintainer Toolbox (in beta) to evaluate projects’ performance and attract contributors. Ovio helps you make your repository contributor-friendly so you can grow your engagement rate.',
        image: intro3,
      },
      {
        title: 'Track your engagement',
        paragraph:
          // eslint-disable-next-line max-len
          'In order to manage something you have to measure it. That’s why Ovio provides performance metrics for you to keep accurate records of both internal and external contributions.',
        image: intro4,
      },
      {
        title: 'Grow your impact',
        paragraph:
          // eslint-disable-next-line max-len
          'Inspire your team with impactful projects and take community engagement to the next level. With Ovio, you can engage engineering teams on projects that have an impact and do more good in the world. ',
        image: intro5,
      },
    ],
  },
  block2feedback: [
    {
      author: 'Sylvia Thornton',
      position: 'Apple Inc.',
      text:
        // eslint-disable-next-line max-len
        '“This is the testimonial text, this is the testimonial text, this is the testimonial text long long long long long version. 1”',
    },
  ],
  howTo: {
    title: 'Get in Touch',
    markImage: howToMark,
    processItems: [
      {
        text:
          // eslint-disable-next-line max-len
          'Realizing their success as open source consumers, companies are getting more involved as collaborators and contributors. Our work is intended to meet new workforce demands caused by this shift. Request a demo and learn more!',
        image: howToRequest,
        buttons: [
          {
            text: 'Work with us',
            link: 'https://calendly.com/founders-ovio',
          },
          { text: 'Get in Touch', link: 'mailto:founders@ovio.org' },
        ],
      },
    ],
  },
};

const { hero, intro, howTo } = pageInfo;

const Companies = () => (
  <Layout routeSlug="CompaniesPage">
    <MenuBar />
    <Hero {...hero} />
    <BlockIntroTemplate {...intro} />
    <Features />
    <Testimonies
      title="They trust us"
      data={[...companiesTestimony, wfpDescription, cmsDescription]}
    />
    <BlockHowToTemplate {...howTo} />
    <LineSeparator />
    <Footer />
  </Layout>
);

Companies.propTypes = {};

export default Companies;
