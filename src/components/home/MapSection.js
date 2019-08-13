import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { stylesBase } from '../styledComponents';
import map from '../../assets/homePage/map.png';

const useStyles = makeStyles({
  muiGridBlockContainer: stylesBase.muiGridBlockContainer,
  title2: { margin: '100px 0px -250px' },
  image: {
    position: 'relative',
    width: 'calc(100vw - 8px)',
    objectFit: 'cover',
    zIndex: -1,
  },
});

const MapSection = () => {
  const { muiGridBlockContainer, title2, image } = useStyles();
  return (
    <Grid className={muiGridBlockContainer} container>
      <Typography className={title2} variant="h2" color="secondary">Need a title here</Typography>
      <img className={image} src={map} alt="Ovio" />
    </Grid>
  );
};

export default MapSection;
