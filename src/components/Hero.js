import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { menuHeightOffset } from './styledComponents';

const useStyles = makeStyles({
  mainContainer: { paddingTop: `${menuHeightOffset}px` },
  heroContainer: props => ({
    width: 'calc(100vw - 15px)', // 15px == scroll bar width
    height: '503px', // image height
    backgroundImage: `url(${props.backgroundImage})`,
    backgroundPosition: 'center',
  }),
});

const Hero = ({ title, subtitle, backgroundImage }) => {
  const { mainContainer } = useStyles();
  const { heroContainer } = useStyles({ backgroundImage });
  return (
    <Grid className={mainContainer} container justify="center">
      <Grid>
        <Grid className={heroContainer} container item justify="center" alignItems="center">
          <Grid container item justify="center" alignItems="center" xs={8}>
            <Typography variant="h1">{title}</Typography>
            <Typography variant="subtitle1">{subtitle}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default Hero;
