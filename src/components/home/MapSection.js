import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { stylesBase } from '../styledComponents';
import map from '../../assets/homePage/map.png';

const { muiGridBlockContainer } = stylesBase;
const useStyles = makeStyles(theme => ({
  muiGridBlockContainer,
  title2: {
    margin: '100px 0px -250px',
    [theme.breakpoints.down('sm')]: { margin: '50px 0px -120px' },
    [theme.breakpoints.down('xs')]: { margin: '0px 0px -50px' },
  },
  image: {
    position: 'relative',
    width: '100%',
    objectFit: 'cover',
    zIndex: -1,
  },
}));

const MapSection = () => {
  // eslint-disable-next-line no-shadow
  const { muiGridBlockContainer, title2, image } = useStyles();
  return (
    <Grid className={muiGridBlockContainer} container>
      <Typography className={title2} variant="h2" color="secondary">Worldwide Impact</Typography>
      <img className={image} src={map} alt="Ovio" />
    </Grid>
  );
};

export default MapSection;
