import React from 'react';

import Layout from '../components/layouts/Layout';
import MenuBar from '../components/MenuBar';
import Hero from '../components/Hero';
import Contribute from '../components/developers/Contribute';
import Testimonials from '../components/developers/Testimonials';
import BlockIntroTemplate from '../components/models/BlockIntroTemplate';
import BlockHowToTemplate from '../components/models/BlockHowToTemplate';
import LineSeparator from '../components/ui-library/LineSeparator';
import Footer from '../components/Footer';

import backgroundImage from '../assets/developersPage/developers.hero.jpg';
import introMark from '../assets/developersPage/developers.intro.mark.png';
import intro1 from '../assets/developersPage/developers.intro.1.png';
import intro2 from '../assets/developersPage/developers.intro.2.png';
import intro3 from '../assets/developersPage/developers.intro.3.png';
import intro4 from '../assets/developersPage/developers.intro.4.png';
import howToMark from '../assets/developersPage/developers.howTo.mark.jpg';
import howToFillProfile from '../assets/developersPage/developers.howTo.fillProfile.png';
import howToLogin from '../assets/developersPage/developers.howTo.login.png';
import howToMatching from '../assets/developersPage/developers.howTo.matching.png';
import howToSubmit from '../assets/developersPage/developers.howTo.submit.png';

const pageInfo = {
  hero: {
    title: 'Developers',
    subtitle:
      'Get matched with open source projects where your skills are most needed.',
    backgroundImage,
    button: {
      text: 'Explore Projects',
      link: 'https://explore.ovio.org',
    },
  },
  intro: {
    markImage: introMark,
    items: [
      {
        title: 'Find tasks matching your skills and interests',
        image: intro1,
      },
      {
        title: 'Build a portfolio and grow your network',
        image: intro2,
      },
      {
        title: 'Track your performance ',
        image: intro3,
      },
      {
        title: 'Compete with friends and colleagues',
        image: intro4,
      },
    ],
  },
  howTo: {
    title: 'Get started in minutes',
    markImage: howToMark,
    processItems: [
      {
        title: '1. Visit',
        text:
          // eslint-disable-next-line max-len
          "Visit <ExternalLink noDecoration orange href='https://explore.ovio.org'>Explore</ExternalLink> and discover our curated list of open source projects",
        buttons: [
          {
            text: 'Explore Projects',
            link: 'https://explore.ovio.org',
          },
        ],
        image: howToLogin,
      },
      {
        title: '2. Log in',
        text: 'Log in to personalize your experience',
        image: howToFillProfile,
      },
      {
        title: '3. Add details',
        text:
          'Fill out your profile to get matched to more project and task opportunities.',
        image: howToMatching,
      },
      {
        title: '4. Spread the word',
        text:
          // eslint-disable-next-line max-len
          'Post details of your contributions on social media, encourage your friends and coworkers to contribute and help OSS communities thrive!',
        image: howToSubmit,
      },
    ],
  },
};

const { hero, intro, howTo } = pageInfo;

const Developers = () => (
  <Layout routeSlug="DevelopersPage">
    <MenuBar />
    <Hero {...hero} />
    <Contribute />
    <BlockIntroTemplate {...intro} />
    <Testimonials />
    <BlockHowToTemplate {...howTo} />
    <LineSeparator />
    <Footer />
  </Layout>
);

Developers.propTypes = {};

export default Developers;
