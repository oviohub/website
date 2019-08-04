import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { useStylesBase } from '../styledComponents';
import map from '../../assets/homePage/mapFull.png';

const useStyles = makeStyles({
  title2: {
    margin: '100px 0px -250px',
  },
  image: {
    position: 'relative',
    width: 'calc(100vw - 8px)',
    left: 'calc(-1 * (100vw - 100%) / 2)', // to centered the div
    objectFit: 'cover',
    zIndex: -1,
  },
});

const MapSection = () => {
  const { muiGridBlockContainer } = useStylesBase();
  const { image } = useStyles();
  return (
    <Grid className={muiGridBlockContainer} container>
      <Typography variant="h2" color="secondary">Need a title here</Typography>
      <img className={image} src={map} alt="Ovio" />
    </Grid>
  );
};

export default MapSection;
