import React from 'react';

import Layout from '../components/layouts/Layout';
import MenuBar from '../components/MenuBar';
import Hero from '../components/Hero';
import Testimonials from '../components/developers/Testimonials';
import BlockIntroTemplate from '../components/models/BlockIntroTemplate';
import BlockHowToTemplate from '../components/models/BlockHowToTemplate';
import TextColumnSection from '../components/models/TextColumnSection';
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
import contributeImg1 from '../assets/developersPage/contribute.1.svg';
import contributeImg2 from '../assets/developersPage/contribute.2.svg';

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

const contribute = [
  {
    title:
      'Contributing to open source shouldn’t feel like climbing a mountain!',
    content:
      // eslint-disable-next-line max-len
      'We know that the contributor journey is not always an easy one. Finding a project in the first place can take hours of searching, but even then, there may not be enough information to start solving issues. From missing instructions and unanswered questions to inefficient validation of pull requests, the open source journey can be much more difficult than it should be. ',
    image: contributeImg1,
  },
  {
    title: 'Ovio makes open source simple',
    content: (
      <>
        Ovio makes researching and contributing to open source software
        straightforward and rewarding. With Ovio, you can find the perfect
        match, with projects and tasks that fit your skills, role and interests.
        <br />
        <br />
        We select and categorize the most contributor-friendly repositories,
        making discovering the right opportunity easier. Ovio’s search tool
        saves you time with both a code languages filter and an engineering role
        filter. Our platform makes it easier than ever to become an active open
        source contributor.
      </>
    ),
    image: contributeImg2,
  },
];

const { hero, intro, howTo } = pageInfo;

const Developers = () => (
  <Layout routeSlug="DevelopersPage">
    <MenuBar />
    <Hero {...hero} />
    <TextColumnSection sectionTitle="Features" list={contribute} />
    <BlockIntroTemplate {...intro} />
    <Testimonials />
    <BlockHowToTemplate {...howTo} />
    <LineSeparator />
    <Footer />
  </Layout>
);

Developers.propTypes = {};

export default Developers;
