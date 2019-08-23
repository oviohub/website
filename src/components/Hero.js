import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import { makeStyles } from '@material-ui/styles';
import { menuHeightOffset, spacing, stylesBase } from './styledComponents';
import { toFormattedText } from '../services/formatting';

const { muiGridFullScreen } = stylesBase;
const useStyles = makeStyles({
  muiGridFullScreen,
  mainContainer: { paddingTop: `${menuHeightOffset}px` },
  heroContainer: ({ backgroundImage }) => ({
    height: '500px', // hero height
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }),
  subSubtitle1: {
    marginTop: spacing(3),
    textAlign: 'center',
  },
});

const Hero = ({ title, subtitle, subSubtitle, backgroundImage, width }) => {
  // eslint-disable-next-line no-shadow
  const { muiGridFullScreen, mainContainer, heroContainer, subSubtitle1 } = useStyles({ backgroundImage });
  return (
    <Grid className={mainContainer} container justify="center">
      <Grid>
        <Grid className={`${muiGridFullScreen} ${heroContainer}`} container item justify="center" alignItems="center">
          <Grid container item direction="column" justify="center" alignItems="center" xs={10} sm={8} md={6}>
            <Typography variant="h1">{title}</Typography>
            {subtitle && (
              <Typography variant="subtitle1">
                {toFormattedText(subtitle)}
              </Typography>
            )}
            {subSubtitle && (
              <Typography className={subSubtitle1} variant="body1" color="primary">
                {isWidthDown('md', width) ? subSubtitle : toFormattedText(subSubtitle)}
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  subSubtitle: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default withWidth()(Hero);
