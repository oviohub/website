import React, { createRef } from 'react';
import { Typography, withStyles } from '@material-ui/core';

import Layout from '../components/layouts/Layout';
import MenuBar from '../components/MenuBar';
import Hero from '../components/Hero';
import BlockHowToTemplate from '../components/models/BlockHowToTemplate';
import TextColumnSection from '../components/models/TextColumnSection';
import LineSeparator from '../components/ui-library/LineSeparator';
import Footer from '../components/Footer';
import { getPageUrl } from '../Routes';
import { scrollToRef } from '../components/ui-library/ScrollArrow';
import { BoldSpan } from '../components/styledComponents';
import { useBaseClasses } from '../hooks/styles';

import heroImage from '../assets/foundationPage/hero_foundation.jpg';
import nonprofits1 from '../assets/foundationPage/nonprofits.1.svg';
import nonprofits2 from '../assets/foundationPage/nonprofits.2.svg';
import iconMaintain from '../assets/icons/icon.maintain.orange.png';
import iconOffer from '../assets/icons/icon.offer.orange.png';
import testimonials1 from '../assets/foundationPage/testimonials.1.svg';
import testimonials2 from '../assets/foundationPage/testimonials.2.svg';
import request from '../assets/foundationPage/socialImpact.howTo.request.png';
import mark from '../assets/foundationPage/socialImpact.howTo.mark.jpg';

const heroContent = (scrollRef) => ({
  title: 'Ovio Foundation',
  subtitle:
    'Open source software has the power to change the world. The Ovio Foundation works to make it happen, faster.',
  backgroundImage: heroImage,
  button: {
    text: 'Reach out',
    onClick: () => scrollToRef(scrollRef),
  },
});

const howTo = {
  sectionTitle: 'Reach out',
  markImage: mark,
  items: [
    {
      content: (
        <>
          <BoldSpan>
            Are you a nonprofit or impact organization looking to leverage open
            source software?
          </BoldSpan>
          <br />
          <br />
          Create more maintainable code and foster collaboration around your
          project while lowering development costs. Done right, open source
          brings visibility, transparency and scalability to your project.
          Transform your solution into a collaborative and sustainable project.
        </>
      ),
      buttons: [
        {
          text: 'Email Us',
          href: 'mailto:hello@ovio.org',
          key: 'uniq-key-reach-out',
        },
      ],
      image: request,
    },
    {
      content: (
        <>
          <BoldSpan>
            Passionate about open source for good and want to support our cause?
          </BoldSpan>
          <br />
          <br />
          Increase our capacity to do this with you donation or sponsor more
          students
        </>
      ),
      buttons: [
        {
          text: 'Email Us',
          href: 'mailto:hello@ovio.org',
        },
      ],
      key: 'uniq-key-oss',
    },
  ],
};

const nonprofitsServices = [
  {
    title: 'Open your code and scale your projects',
    content:
      // eslint-disable-next-line max-len
      'Focus on your mission while we find the technical expertise you need to create impactful technical solutions. Our team supports organizations both in learning about existing open source software and building new solutions.',
    image: nonprofits1,
  },
  {
    title: 'Activate communities and attract talent',
    content:
      // eslint-disable-next-line max-len
      'The Ovio platform matches volunteer open source projects to developers who want to get involved, highlighting your programs and impact. We provide support with defining and creating the most contributor-friendly projects as well as on-demand technical expertise.',
    image: nonprofits2,
  },
];

const ossEcosystem = [
  {
    title: 'Helping student developers grow',
    content:
      // eslint-disable-next-line max-len
      'In collaboration with the MLH fellowship, the Ovio Foundation sponsors students who spend 12 weeks leveling up their software engineering skills by contributing to the open source technology the world depends on.',
    image: iconMaintain,
  },
  {
    title: 'Code review mentorship',
    content:
      // eslint-disable-next-line max-len
      'In partnership with nonprofits and workforce development programs across the U.S., we’re building a platform to connect students with senior developers for code reviews.',
    image: iconOffer,
  },
];

const testimonials = [
  {
    content: (
      <>
        “For our start-up run by scientists and disaster experts, Ovio has been
        extremely helpful quickly filling our biggest product gaps. We knew we
        needed professional level UX in order to help our developing country
        users and within one day, Ovio connected us to a UX expert who is
        completely revamping our information design and emergency
        communication.”
        <br />
        <BoldSpan>Bessie Schwarz, CEO, Cloud to Street</BoldSpan>
      </>
    ),
    image: testimonials1,
  },
  {
    content: (
      <>
        “We were matched with a volunteer who’s super passionate and engaged
        with the project! We have added her to our Slack and integrated her into
        our engineering workflow.”
        <br />
        <BoldSpan>Jack Rogers, Product Manager, Replate</BoldSpan>
      </>
    ),
    image: testimonials2,
  },
];

const FoundationPage = ({ classes }) => {
  const scrollRef = createRef();
  const baseClasses = useBaseClasses('muiGridBlockContainer');

  return (
    <Layout routeSlug="ContactUsPage">
      <MenuBar />
      <Hero {...heroContent(scrollRef)} />

      <div className={baseClasses.muiGridBlockContainer}>
        <Typography variant="subtitle2" align="center">
          Our vision is to make technology more available and replicable for
          nonprofits, connect talent with social impact projects, and leverage
          open-source contributions to foster a more diverse tech pipeline.
        </Typography>
      </div>

      <div id="impact" />
      <TextColumnSection
        sectionTitle="We support a more diverse open source ecosystem."
        // eslint-disable-next-line max-len
        sectionSubTitle="Ovio works with the next generation to bring more diversity and inclusivity into open source. We empower students from underrepresented backgrounds to improve their skills, build their portfolios and connect with mentors from the tech world. And we help nonprofits increase inclusivity in their open source management. "
        items={nonprofitsServices}
        classes={classes}
      />

      <TextColumnSection
        sectionTitle="We help nonprofits build and scale open source software solutions."
        // eslint-disable-next-line max-len
        sectionSubTitle="Conserve resources by working with top quality volunteer developers, make the right technical decisions early on, and ensure the sustainability of your project by working with the Ovio Foundation."
        items={ossEcosystem}
        classes={classes}
      />

      <TextColumnSection
        sectionTitle="Testimonials"
        items={testimonials}
        classes={classes}
      />

      <div ref={scrollRef} id="reachOut" />
      <BlockHowToTemplate {...howTo} />
      <LineSeparator withoutMarginTo />
      <Footer />
    </Layout>
  );
};

const styles = () => ({
  image: {
    width: 70,
  },
});

export default withStyles(styles)(FoundationPage);
