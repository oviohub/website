import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { menuHeightOffset, spacing } from './styledComponents';
import { toFormattedText } from '../services/formatting';

const useStyles = makeStyles({
  mainContainer: { paddingTop: `${menuHeightOffset}px` },
  heroContainer: props => ({
    width: 'calc(100vw - 15px)', // 15px == scroll bar width
    height: '500px', // hero height
    backgroundImage: `url(${props.backgroundImage})`,
    backgroundSize: 'cover',
  }),
  subsubtitle1: {
    marginTop: spacing(3),
    textAlign: 'center',
  },
});

const Hero = ({ title, subtitle, subSubtitle, backgroundImage }) => {
  const { mainContainer, heroContainer, subsubtitle1 } = useStyles({ backgroundImage });
  return (
    <Grid className={mainContainer} container justify="center">
      <Grid>
        <Grid className={heroContainer} container item justify="center" alignItems="center">
          <Grid container item direction="column" justify="center" alignItems="center" xs={8}>
            <Typography variant="h1">{title}</Typography>
            <Typography variant="subtitle1">{subtitle}</Typography>
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
  subtitle: PropTypes.string.isRequired,
  subSubtitle: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired,
};

Hero.defaultProps = {
  subSubtitle: undefined,
};

export default Hero;