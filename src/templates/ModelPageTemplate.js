import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layouts/Layout';
import MenuBar from '../components/MenuBar';
import Hero from '../components/Hero';
import Block1Intro from '../components/models/Block1Intro';
import Block2Feedback from '../components/models/Block2Feedback';
import Block3HowTo from '../components/models/Block3HowTo';
import LineSeparator from '../components/ui-library/LineSeparator';
import Footer from '../components/Footer';

const ModelPageTemplate = ({ data: { modelPageJson: page } }) => (
  <Layout routeSlug={page.slug}>
    <MenuBar />
    <Hero {...page.hero} backgroundImage={page.hero.backgroundImage && page.hero.backgroundImage.publicURL} />
    <Block1Intro {...page.block1intro} />
    <Block2Feedback comments={page.block2feedback} />
    <Block3HowTo {...page.block3howto} />
    <LineSeparator />
    <Footer />
  </Layout>
);

ModelPageTemplate.propTypes = {
  data: PropTypes.shape({
    modelPageJson: PropTypes.shape({
      slug: PropTypes.string.isRequired,

      hero: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        subSubtitle: PropTypes.string.isRequired,
        backgroundImage: PropTypes.shape({
          publicURL: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,

      block1intro: PropTypes.shape({
        title: PropTypes.string,
        markImage: PropTypes.shape({
          publicURL: PropTypes.string.isRequired,
        }).isRequired,
        isMarkOnLeft: PropTypes.bool,
        items: PropTypes.arrayOf(PropTypes.shape({
          title: PropTypes.string.isRequired,
          paragraph: PropTypes.string.isRequired,
          image: PropTypes.shape({
            publicURL: PropTypes.string.isRequired,
          }).isRequired,
        })).isRequired,
      }).isRequired,

      block2feedback: PropTypes.arrayOf(PropTypes.shape({
        author: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        photo: PropTypes.shape({
          publicURL: PropTypes.string.isRequired,
        }).isRequired,
      })).isRequired,

      block3howto: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        markImage: PropTypes.shape({
          publicURL: PropTypes.string.isRequired,
        }).isRequired,
        processItems: PropTypes.arrayOf(PropTypes.shape({
          title: PropTypes.string,
          text: PropTypes.string.isRequired,
          image: PropTypes.shape({
            publicURL: PropTypes.string.isRequired,
          }).isRequired,
          button: PropTypes.shape({
            text: PropTypes.string.isRequired,
            withGitHubIcon: PropTypes.bool,
            link: PropTypes.string.isRequired,
          }),
        })).isRequired,
      }).isRequired,

    }).isRequired,
  }).isRequired,
};

export default ModelPageTemplate;

// eslint-disable-next-line no-undef
export const modelPage = graphql`
  query modelPageQuery($path: String!) {
    modelPageJson(path: { eq: $path }) {
      slug
      hero {
        title
        subtitle
        subSubtitle
        backgroundImage { publicURL }
      }
      block1intro {
        title
        markImage { publicURL }
        isMarkOnLeft
        items {
          title
          paragraph
          image { publicURL }
        }
      },
      block2feedback {
        author
        position
        text
        photo { publicURL }
      },
      block3howto {
        title
        subtitle
        markImage { publicURL }
        processItems {
          title
          text
          image { publicURL }
          button {
            text
            withGitHubIcon
            link
          }
        }
      },
    }
  }
`;
