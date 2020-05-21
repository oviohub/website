import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layouts/Layout';
import MenuBar from '../components/MenuBar';
import Hero from '../components/Hero';
import Testimonies from '../components/Testimonies';
import BlockIntroTemplate from '../components/models/BlockIntroTemplate';
import BlockHowToTemplate from '../components/models/BlockHowToTemplate';
import LineSeparator from '../components/ui-library/LineSeparator';
import Footer from '../components/Footer';
import { companiesTestimony } from '../services/testimonies';

const ModelPageTemplate = ({
  data: {
    modelPageJson: {
      slug,
      hero: {
        backgroundImage: { publicURL: backgroundImageURL },
        ...hero
      },
      block1intro,
      // block2feedback,
      block3howto,
    },
  },
}) => (
  <Layout routeSlug={slug}>
    <MenuBar />
    <Hero {...hero} backgroundImage={backgroundImageURL} />
    <BlockIntroTemplate {...block1intro} />
    {slug === 'CompaniesPage' && (
      <Testimonies title="They trust us" data={companiesTestimony} />
    )}
    <BlockHowToTemplate {...block3howto} />
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
        subSubtitle: PropTypes.string,
        backgroundImage: PropTypes.shape({
          publicURL: PropTypes.string.isRequired,
        }).isRequired,
        button: PropTypes.shape({
          text: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
        }),
      }).isRequired,

      block1intro: PropTypes.shape({
        title: PropTypes.string,
        markImage: PropTypes.shape({
          publicURL: PropTypes.string.isRequired,
        }).isRequired,
        items: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string.isRequired,
            paragraph: PropTypes.string.isRequired,
            image: PropTypes.shape({
              publicURL: PropTypes.string.isRequired,
            }).isRequired,
          }),
        ).isRequired,
      }).isRequired,

      block2feedback: PropTypes.arrayOf(
        PropTypes.shape({
          author: PropTypes.string.isRequired,
          position: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
          photo: PropTypes.shape({
            publicURL: PropTypes.string.isRequired,
          }).isRequired,
        }),
      ).isRequired,

      block3howto: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        markImage: PropTypes.shape({
          publicURL: PropTypes.string.isRequired,
        }).isRequired,
        processItems: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string,
            text: PropTypes.string.isRequired,
            image: PropTypes.shape({
              publicURL: PropTypes.string.isRequired,
            }).isRequired,
            button: PropTypes.shape({
              text: PropTypes.string.isRequired,
              link: PropTypes.string.isRequired,
            }),
          }),
        ).isRequired,
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
        backgroundImage {
          publicURL
        }
        button {
          text
          link
        }
      }
      block1intro {
        title
        markImage {
          publicURL
        }
        items {
          title
          paragraph
          image {
            publicURL
          }
        }
      }
      block2feedback {
        author
        position
        text
        photo {
          publicURL
        }
      }
      block3howto {
        title
        subtitle
        markImage {
          publicURL
        }
        processItems {
          title
          text
          image {
            publicURL
          }
          buttons {
            text
            link
          }
        }
        button {
          text
          link
        }
      }
    }
  }
`;
