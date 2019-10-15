import React from 'react';
import { Grid, Typography, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { stylesBase } from '../styledComponents';
import map from '../../assets/homePage/map.png';
import markLeftImage from '../../assets/homePage/map.mark.left.jpg';
import markRightImage from '../../assets/homePage/map.mark.right.jpg';

const { muiGridBlockContainer, muiGridBackground } = stylesBase;
const useStyles = makeStyles(theme => ({
  muiGridBlockContainer,
  muiGridBackground,
  title2: {
    margin: '100px 0px -250px',
    [theme.breakpoints.down('sm')]: { margin: '50px 0px -120px' },
    [theme.breakpoints.down('xs')]: { margin: '0px 0px -50px' },
  },
  image: {
    position: 'relative',
    objectFit: 'contain',
    width: '100%',
    zIndex: -1,
    [theme.breakpoints.down('xs')]: { margin: '-120px 0px' },
  },
  markLeft: {
    width: '320px',
    left: '0px',
    marginTop: '60px',
    [theme.breakpoints.down('md')]: { width: '260px' },
    [theme.breakpoints.down('sm')]: {
      width: '200px',
      marginTop: '30px',
    },
  },
  markRight: {
    width: '300px',
    right: '0px',
    marginTop: '-100px',
    [theme.breakpoints.down('md')]: {
      width: '220px',
      marginTop: '-20px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '180px',
      marginTop: '0px',
    },
  },
}));

const MapSection = () => {
  // eslint-disable-next-line no-shadow
  const { muiGridBlockContainer, muiGridBackground, title2, image, markLeft, markRight } = useStyles();
  return (
    <Grid className={muiGridBlockContainer} container>
      <Hidden smDown>
        <img className={`${muiGridBackground} ${markLeft}`} src={markLeftImage} alt="Global Impact" />
        <img className={`${muiGridBackground} ${markRight}`} src={markRightImage} alt="Global Impact" />
      </Hidden>
      <Typography className={title2} variant="h2" color="secondary">Global Impact</Typography>
      <img className={image} src={map} alt="Ovio" />
    </Grid>
  );
};

export default MapSection;
