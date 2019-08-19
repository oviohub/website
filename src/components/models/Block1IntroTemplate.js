import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import { makeStyles } from '@material-ui/styles';
import { contentWidthPixels, fontSizing, spacing, colors, stylesBase } from '../styledComponents';
import { toFormattedText } from '../../services/formatting';

const { muiGridBlockContainer } = stylesBase;
const useStyles = makeStyles(theme => ({
  muiGridBlockContainer,
  container: ({ iconVersion }) => ({
    width: 'calc(100vw - 8px)',
    left: 'calc(-1 * (100vw - 100%) / 2)',
    position: 'relative',
    background: iconVersion ? colors.white : colors.lightGrey,
    border: iconVersion ? '0px' : '1px solid #DCDCDC',
    boxSizing: 'border-box',
    padding: spacing(2),
    [theme.breakpoints.down('md')]: { width: '100vw' },

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
    objectFit: iconVersion ? 'none' : 'unset',
    boxShadow: iconVersion ? '0px' : '0px 40px 80px rgba(0, 0, 0, 0.15)',
    [theme.breakpoints.down('xs')]: { width: '80%' },

  }),
  markImg: ({ isMarkOnLeft }) => ({
    position: 'absolute',
    right: isMarkOnLeft ? 'unset' : '0px',
    left: isMarkOnLeft ? '0px' : 'unset',
  }),
}));

const Block1IntroTemplate = ({
  title,
  markImage: { publicURL: markImageUrl },
  isMarkOnLeft,
  items,
  iconVersion,
  width,
}) => {
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
  const itemDirection = isWidthDown('xs', width) ? 'column' : 'row';
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
              direction={index % 2 || isWidthDown('xs', width) ? `${itemDirection}-reverse` : itemDirection}
              alignItems={isWidthDown('sm', width) ? 'center' : 'flex-start'}
              justify="center"
            >
              <Grid className={textContainer} item sm={6} md={5}>
                <Typography className={title3} variant="h3" color="textSecondary">{itemTitle}</Typography>
                <Typography variant="body2">{toFormattedText(paragraph)}</Typography>
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
  width: PropTypes.string.isRequired,
};

Block1IntroTemplate.defaultProps = {
  markImage: {},
  isMarkOnLeft: false,
  iconVersion: false,
};

export default withWidth()(Block1IntroTemplate);
