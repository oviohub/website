import React from 'react';

import Layout from '../components/layouts/Layout';
import MenuBar from '../components/MenuBar';
import Hero from '../components/home/HeroHome';
import ExploreProjects from '../components/home/ExploreProjects';
import GetInvolved from '../components/GetInvolved';
import Testimonies from '../components/Testimonies';
import MapSection from '../components/home/MapSection';
import MailingListSubscription from '../components/ui-library/MailingListSubscription';
import Footer from '../components/Footer';
import { testimonies } from '../services/testimonies';

const IndexPage = () => (
  <Layout routeSlug="HomePage">
    <MenuBar homeVersion />
    <Hero />
    <ExploreProjects />
    <GetInvolved />
    <Testimonies title="Partnerships" data={testimonies} />
    <MapSection />
    <MailingListSubscription />
    <Footer />
  </Layout>
);

export default IndexPage;
