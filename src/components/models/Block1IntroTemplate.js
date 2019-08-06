import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { contentWidthPixels, fontSizing, spacing, colors, useStylesBase } from '../styledComponents';
import { toFormattedText } from '../../services/formatting';

const useStyles = makeStyles({
  container: props => ({
    width: 'calc(100vw - 8px)',
    left: 'calc(-1 * (100vw - 100%) / 2)',
    position: 'relative',
    background: props.secondVersion ? colors.white : colors.lightGrey,
    border: props.secondVersion ? '0px' : '1px solid #DCDCDC',
    boxSizing: 'border-box',
  }),
  blockContainer: {
    width: contentWidthPixels,
    zIndex: 1,
  },
  itemContainer: props => ({ margin: props.secondVersion ? `${spacing(10)} 0px` : `${spacing(5)} 0px` }),
  textContainer: props => ({
    padding: props.secondVersion ? '0px 0px 0px 8%' : '0px 8%',
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
  image: props => ({
    width: props.secondVersion ? 'auto' : 'inherit',
    objectFit: props.secondVersion ? 'none' : 'unset',
    boxShadow: props.secondVersion ? '0px' : '0px 40px 80px rgba(0, 0, 0, 0.15)',
  }),
  markImg: props => ({
    position: 'absolute',
    right: props.isMarkOnLeft ? 'unset' : '0px',
    left: !props.isMarkOnLeft ? 'unset' : '0px',
  }),
});

const Block1IntroTemplate = ({ title, markImage, isMarkOnLeft, items, secondVersion }) => {
  const { muiGridBlockContainer } = useStylesBase();
  const { container, blockContainer, itemContainer, textContainer, title3, image, markImg } = useStyles({
    isMarkOnLeft, secondVersion,
  });
  return (
    <Grid className={container} container justify="center">
      {markImage && <img className={markImg} src={markImage && markImage.publicURL} alt="Ovio - Volunteers" />}
      <Grid className={`${muiGridBlockContainer} ${blockContainer}`} container>
        {title && <Typography variant="h2">{title}</Typography>}
        <Grid container>
          {items.map((item, index) => (
            <Grid
              key={item.title}
              className={itemContainer}
              container
              direction={index % 2 ? 'row-reverse' : 'row'}
              justify="center"
            >
              <Grid className={textContainer} item xs={5}>
                <Typography className={title3} variant="h3" color="textSecondary">{item.title}</Typography>
                <Typography variant="body2">{toFormattedText(item.paragraph)}</Typography>
              </Grid>
              <Grid container item xs={5} justify="center">
                <img className={image} src={item.image.publicURL} alt={item.title} />
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
    publicURL: PropTypes.string.isRequired,
  }),
  isMarkOnLeft: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    image: PropTypes.shape({
      publicURL: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
  secondVersion: PropTypes.bool,
};

Block1IntroTemplate.defaultProps = {
  title: undefined,
  markImage: undefined,
  isMarkOnLeft: false,
  secondVersion: false,
};

export default Block1IntroTemplate;
