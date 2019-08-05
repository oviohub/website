import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { contentWidthPixels, fontSizing, spacing, colors, useStylesBase } from '../styledComponents';
import { toFormattedText } from '../../services/formatting';

const useStyles = makeStyles({
  container: {
    width: 'calc(100vw - 8px)',
    left: 'calc(-1 * (100vw - 100%) / 2)',
    position: 'relative',
    background: colors.lightGrey,
    border: '1px solid #DCDCDC',
    boxSizing: 'border-box',
  },
  blockContainer: {
    width: contentWidthPixels,
    zIndex: 1,
  },
  itemContainer: { margin: `${spacing(5)} 0px` },
  textContainer: {
    padding: '0px 8%',
    margin: 'auto 0px',
  },
  title3: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: fontSizing(3),
    lineHeight: 'initial',
    textTransform: 'uppercase',
    margin: `0px 0px ${spacing(4)} 0px`,
  },
  image: {
    width: 'inherit',
    boxShadow: '0px 40px 80px rgba(0, 0, 0, 0.15)',
  },
  markImg: {
    position: 'absolute',
    right: '0px',
  },
});

const Block1Intro = ({ title, markImage, items }) => {
  const { muiGridBlockContainer } = useStylesBase();
  const { container, blockContainer, itemContainer, textContainer, title3, image, markImg } = useStyles();
  return (
    <Grid className={container} container justify="center">
      <img className={markImg} src={markImage && markImage.publicURL} alt="Ovio - Volunteers" />
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
              <Grid container item xs={5} justify={index % 2 ? 'flex-end' : 'flex-start'}>
                <img className={image} src={imageURL} alt={itemTitle} />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

Block1Intro.propTypes = {
  title: PropTypes.string,
  markImage: PropTypes.shape({
    publicURL: PropTypes.string.isRequired,
  }).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    image: PropTypes.shape({
      publicURL: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
};

Block1Intro.defaultProps = {
  title: undefined,
};

export default Block1Intro;
