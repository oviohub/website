import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
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
  subsubtitle1: {
    marginTop: spacing(3),
    textAlign: 'center',
  },
});

const Hero = ({ title, subtitle, subSubtitle, backgroundImage }) => {
  // eslint-disable-next-line no-shadow
  const { muiGridFullScreen, mainContainer, heroContainer, subsubtitle1 } = useStyles({ backgroundImage });
  return (
    <Grid className={mainContainer} container justify="center">
      <Grid>
        <Grid className={`${muiGridFullScreen} ${heroContainer}`} container item justify="center" alignItems="center">
          <Grid container item direction="column" justify="center" alignItems="center" xs={10} sm={8}>
            <Typography variant="h1">{title}</Typography>
            {subtitle && <Typography variant="subtitle1">{toFormattedText(subtitle)}</Typography>}
            {subSubtitle && (
              <Typography className={subsubtitle1} variant="body2" color="primary">
                {toFormattedText(subSubtitle)}
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
};

export default Hero;
