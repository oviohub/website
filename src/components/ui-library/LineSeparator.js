import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ThickLine, spacing } from '../styledComponents';

const useStyles = makeStyles({
  container: { margin: `${spacing(12)} 0px` },
  lineContainer: {
    position: 'absolute',
    right: '0px',
  },
});

const LineSeparator = () => {
  const classes = useStyles();
  return (
    <Grid container justify="flex-end" className={classes.container}>
      <Grid className={classes.lineContainer}><ThickLine width="250px" /></Grid>
    </Grid>
  );
};

export default LineSeparator;
