import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { getPageSEO } from '../../Routes';

function SEO({ routeSlug }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            lang
            url
            twitterId
          }
        }
      }
    `,
  );

  const { title, description, lang, meta } = getPageSEO(routeSlug);

  const metaTitle = title || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;
  const metaUrl = site.siteMetadata.url || 'https://ovio.org';
  const metaLang = lang || site.siteMetadata.lang;

  return (
    <Helmet
      htmlAttributes={{
        metaLang,
      }}
      title={metaTitle}
      meta={([
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: metaTitle,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: metaUrl,
        },
        {
          property: 'og:image',
          content: `${metaUrl}/photo-header.png`,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:site',
          content: site.siteMetadata.twitterId,
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: metaTitle,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'viewport',
          content: 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no',
        },
      ]).concat(meta || [])}
    />
  );
}


SEO.propTypes = {
  routeSlug: PropTypes.string.isRequired,
};

export default SEO;
