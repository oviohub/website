import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { spacing, useStylesBase, ThickLine } from '../styledComponents';

const useStyles = makeStyles({
  container: { marginBottom: spacing(12) },
  lineContainer: {
    position: 'absolute',
    right: '0px',
  },
});

const LineSeparator = () => {
  const { muiGridBlockContainer } = useStylesBase();
  const { container, lineContainer } = useStyles();
  return (
    <Grid container justify="flex-end" className={`${muiGridBlockContainer} ${container}`}>
      <Grid className={lineContainer}><ThickLine width="250px" /></Grid>
    </Grid>
  );
};

export default LineSeparator;
