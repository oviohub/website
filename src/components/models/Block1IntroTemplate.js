import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { contentWidthPixels, fontSizing, spacing, colors, stylesBase } from '../styledComponents';
import { toFormattedText } from '../../services/formatting';

const { muiGridBlockContainer } = stylesBase;
const useStyles = makeStyles({
  muiGridBlockContainer,
  container: ({ iconVersion }) => ({
    width: 'calc(100vw - 8px)',
    left: 'calc(-1 * (100vw - 100%) / 2)',
    position: 'relative',
    background: iconVersion ? colors.white : colors.lightGrey,
    border: iconVersion ? '0px' : '1px solid #DCDCDC',
    boxSizing: 'border-box',
  }),
  blockContainer: {
    width: contentWidthPixels,
    zIndex: 1,
  },
  itemContainer: ({ iconVersion }) => ({ margin: iconVersion ? `${spacing(10)} 0px` : `${spacing(5)} 0px` }),
  textContainer: ({ iconVersion }) => ({
    padding: iconVersion ? '0px 3%' : '0px 8%',
    margin: 'auto 0px',
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
    objectFit: iconVersion ? 'none' : 'unset',
    boxShadow: iconVersion ? '0px' : '0px 40px 80px rgba(0, 0, 0, 0.15)',
  }),
  markImg: ({ isMarkOnLeft }) => ({
    position: 'absolute',
    right: isMarkOnLeft ? 'unset' : '0px',
    left: isMarkOnLeft ? '0px' : 'unset',
  }),
});

const Block1IntroTemplate = ({ title, markImage: { publicURL: markImageUrl }, isMarkOnLeft, items, iconVersion }) => {
  const {
    // eslint-disable-next-line no-shadow
    muiGridBlockContainer,
    container,
    blockContainer,
    itemContainer,
    textContainer,
    title3,
    image,
    markImg,
  } = useStyles({ isMarkOnLeft, iconVersion });
  return (
    <Grid className={container} container justify="center">
      {markImageUrl && <img className={markImg} src={markImageUrl} alt={title} />}
      <Grid className={`${muiGridBlockContainer} ${blockContainer}`} container>
        {title && <Typography variant="h2">{title}</Typography>}
        <Grid container>
          {items.map(({ title: itemTitle, paragraph, image: { publicURL: imageURL } }, index) => (
            <Grid
              key={itemTitle}
              className={itemContainer}
              container
              direction={index % 2 ? 'row-reverse' : 'row'}
              justify="center"
            >
              <Grid className={textContainer} item xs={5}>
                <Typography className={title3} variant="h3" color="textSecondary">{itemTitle}</Typography>
                <Typography variant="body2">{toFormattedText(paragraph)}</Typography>
              </Grid>
              <Grid container item xs={5} justify="center">
                <img className={image} src={imageURL} alt={itemTitle} />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

Block1IntroTemplate.propTypes = {
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

Block1IntroTemplate.defaultProps = {
  markImage: {},
  isMarkOnLeft: false,
  iconVersion: false,
};

export default Block1IntroTemplate;
