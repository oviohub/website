import React from 'react';
import PropTypes from 'prop-types';
import JsxParser from 'react-jsx-parser';
import { Grid, Typography } from '@material-ui/core';
import { isWidthDown } from '@material-ui/core/withWidth';
import { makeStyles } from '@material-ui/styles';

import {
  contentWidthPixels, fontSizing, spacing, colors, stylesBase, useWidth, ExternalLink,
} from '../styledComponents';

const { muiGridBlockContainer, muiGridFullScreenWithBackground } = stylesBase;
const useStyles = makeStyles(theme => ({
  muiGridBlockContainer,
  muiGridFullScreenWithBackground,
  container: ({ iconVersion }) => ({
    background: iconVersion ? colors.white : colors.lightGrey,
    border: iconVersion ? '0px' : '1px solid #DCDCDC',
    boxSizing: 'border-box',
    padding: spacing(2),
  }),
  blockContainer: {
    width: contentWidthPixels,
    zIndex: 1,
  },
  itemContainer: ({ iconVersion }) => ({ margin: iconVersion ? `${spacing(10)} 0px` : `${spacing(5)} 0px` }),
  textContainer: ({ iconVersion }) => ({
    padding: iconVersion ? '0px 3%' : '0px 8%',
    margin: 'auto 0px',
    [theme.breakpoints.down('md')]: { padding: '0px 4%' },
    [theme.breakpoints.down('xs')]: { marginTop: spacing(4) },
  }),
  title3: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: fontSizing(3),
    lineHeight: 'initial',
    textTransform: 'uppercase',
    margin: `0px 0px ${spacing(4)} 0px`,
  },
  image: ({ iconVersion }) => ({
    width: iconVersion ? 'auto' : 'inherit',
    objectFit: iconVersion ? 'contain' : 'unset',
    boxShadow: iconVersion ? '0px' : '0px 40px 80px rgba(0, 0, 0, 0.15)',
    [theme.breakpoints.down('xs')]: { width: '80%' },

  }),
  markImg: ({ isMarkOnLeft }) => ({
    position: 'absolute',
    right: isMarkOnLeft ? 'unset' : '0px',
    left: isMarkOnLeft ? '0px' : 'unset',
  }),
}));

const BlockIntroTemplate = ({
  title,
  markImage: { publicURL: markImageUrl },
  isMarkOnLeft,
  items,
  iconVersion,
}) => {
  const width = useWidth();
  const {
    // eslint-disable-next-line no-shadow
    muiGridBlockContainer,
    // eslint-disable-next-line no-shadow
    muiGridFullScreenWithBackground,
    container,
    blockContainer,
    itemContainer,
    textContainer,
    title3,
    image,
    markImg,
  } = useStyles({ isMarkOnLeft, iconVersion });
  return (
    <Grid className={`${muiGridFullScreenWithBackground} ${container}`} container justify="center">
      {markImageUrl && <img className={markImg} src={markImageUrl} alt={title} />}
      <Grid className={`${muiGridBlockContainer} ${blockContainer}`} container>
        {title && <Typography variant="h2">{title}</Typography>}
        <Grid container>
          {items.map(({ title: itemTitle, paragraph, image: { publicURL: imageURL } }, index) => (
            <Grid
              key={itemTitle}
              className={itemContainer}
              container
              direction={isWidthDown('xs', width) ? 'column-reverse' : `row${index % 2 ? '-reverse' : ''}`}
              alignItems={isWidthDown('sm', width) ? 'center' : 'flex-start'}
              justify="center"
            >
              <Grid className={textContainer} item sm={6} md={5}>
                <Typography className={title3} variant="h3" color="textSecondary">{itemTitle}</Typography>
                <Typography variant="body1">
                  <JsxParser renderInWrapper={false} components={{ ExternalLink }} jsx={paragraph} />
                </Typography>
              </Grid>
              <Grid container item sm={6} md={5} justify="center">
                <img className={image} src={imageURL} alt={itemTitle} />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

BlockIntroTemplate.propTypes = {
  title: PropTypes.string,
  markImage: PropTypes.shape({
    publicURL: PropTypes.string,
  }),
  isMarkOnLeft: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    image: PropTypes.shape({
      publicURL: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
  iconVersion: PropTypes.bool,
};

BlockIntroTemplate.defaultProps = {
  markImage: {},
  isMarkOnLeft: false,
  iconVersion: false,
};

export default BlockIntroTemplate;