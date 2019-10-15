import React from 'react';
import PropTypes from 'prop-types';
import JsxParser from 'react-jsx-parser';
import { Grid, Typography, Button } from '@material-ui/core';
import { isWidthDown } from '@material-ui/core/withWidth';

import { makeStyles } from '@material-ui/styles';
import { spacing, stylesBase, useWidth, ExternalLink, Tag } from '../styledComponents';

const { muiGridBlockContainer } = stylesBase;
const useStyles = makeStyles(theme => ({
  muiGridBlockContainer,
  itemContainer: { margin: `${spacing(10)} 0px ${spacing(10)}` },
  textContainer: {
    marginLeft: spacing(4),
    [theme.breakpoints.down('sm')]: { marginLeft: '0px' },
  },
  subtitle2: ({ withoutTitle }) => ({
    paddingTop: withoutTitle && spacing(20),
    width: withoutTitle && '50%',
  }),
  blockBodyContainer: {
    width: '85%',
    [theme.breakpoints.down('xs')]: { width: '100%' },
  },
  blockBody: ({ withMarginBotton, taggedTextVersion }) => ({
    margin: `0px 0px 0px ${spacing(4)}`,
    marginBottom: withMarginBotton ? spacing(4) : '0px',
    fontSize: taggedTextVersion && '12px',
  }),
  itemTitle: {
    marginLeft: spacing(4),
  },
  buttonLink: {
    marginLeft: spacing(4),
    textDecoration: 'none',
  },
  blockButtons: {
    [theme.breakpoints.down('xs')]: { marginTop: spacing(2) },
  },
  image: {
    objectFit: 'contain',
    [theme.breakpoints.down('sm')]: { width: '40%' },
    [theme.breakpoints.down('xs')]: { width: '260px' },
  },
  markImg: {
    position: 'absolute',
    left: '0px',
    zIndex: -1,
    [theme.breakpoints.down('xs')]: { paddingTop: '80px' },
  },
}));

const BlockHowToTemplate = ({
  title: blockTitle,
  subtitle: blockSubtitle,
  taggedTextVersion,
  markImage,
  processItems,
  button: blockButton,
}) => {
  const width = useWidth();
  const {
    // eslint-disable-next-line no-shadow
    muiGridBlockContainer,
    itemContainer,
    textContainer,
    blockBodyContainer,
    buttonLink,
    blockButtons,
    image,
    markImg,
  } = useStyles({ withoutTitle: !blockTitle });
  const { text: blockButtonText, link: blockButtonLink } = blockButton || {};
  return (
    <Grid className={muiGridBlockContainer}>
      <img className={markImg} src={markImage && markImage.publicURL} alt={blockTitle} />
      {blockTitle && <Typography variant="h2">{blockTitle}</Typography>}
      <Grid item xs={12} md={7}>
        {blockSubtitle && <Typography variant="subtitle2">{blockSubtitle}</Typography>}
      </Grid>
      <Grid>
        {processItems.map(({ title, text, buttons, image: { publicURL: imageURL } }) => {
          const { itemTitle, blockBody } = useStyles({ withMarginBotton: !!buttons, taggedTextVersion });
          return (
            <Grid
              className={itemContainer}
              key={text}
              container
              direction={isWidthDown('xs', width) ? 'column' : 'row'}
            >
              <img className={image} src={imageURL} alt={text} />
              <Grid
                className={textContainer}
                container
                item
                direction={isWidthDown('xs', width) ? 'row' : 'column'}
                md={taggedTextVersion ? 6 : 5}
                sm={taggedTextVersion ? 7 : 6}
                xs={12}
              >
                <Grid>
                  {title && (
                    <Typography className={itemTitle} component="p" variant="h2" color="textSecondary">
                      {title}
                    </Typography>
                  )}
                </Grid>
                <Grid container wrap="nowrap" direction="column" className={blockBodyContainer}>
                  <Typography className={blockBody} variant="body1">
                    <JsxParser renderInWrapper={false} components={{ ExternalLink, Tag }} jsx={text} />
                  </Typography>
                  <Grid>
                    {(buttons || []).map(({ link: btnLink, text: btnText }) => (
                      <a key={btnLink} href={btnLink} className={buttonLink} target="_blank" rel="noreferrer noopener">
                        <Button className={blockButtons}>{btnText}</Button>
                      </a>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
      {blockButtonText && (
        <Grid container item xs={6} justify="center">
          <a href={blockButtonLink} className={buttonLink} target="_blank" rel="noreferrer noopener">
            <Button>{blockButtonText}</Button>
          </a>
        </Grid>
      )}
    </Grid>
  );
};

BlockHowToTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  markImage: PropTypes.shape({
    publicURL: PropTypes.string.isRequired,
  }).isRequired,
  taggedTextVersion: PropTypes.bool,
  processItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    text: PropTypes.string.isRequired,
    image: PropTypes.shape({
      publicURL: PropTypes.string.isRequired,
    }).isRequired,
    buttons: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })),
  })).isRequired,
  button: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
};

export default BlockHowToTemplate;
