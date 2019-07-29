import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { useStylesBase } from '../styledComponents';
import map from '../../assets/homePage/map.jpg';

const useStyles = makeStyles({
  mainContainer: {
    height: '680px',
    backgroundImage: `url(${map})`,
  },
});

const MapSection = () => {
  const baseClasses = useStylesBase();
  const classes = useStyles();
  return (
    <Grid className={`${baseClasses.muiGridBlockContainer} ${classes.mainContainer}`} container>
      <Grid className={baseClasses.muiGridContent}>
        <Typography variant="h2" color="secondary">Need a title here</Typography>
      </Grid>
    </Grid>
  );
};

export default MapSection;
