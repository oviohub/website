import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { spacing, useStylesBase, colors } from '../styledComponents';

const lineHeight = spacing(1.5);
const useStyles = makeStyles({
  container: {
    marginBottom: spacing(12),
    height: lineHeight,
  },
  lineContainer: {
    position: 'absolute',
    right: '0px',
  },
  thickLine: {
    width: '250px',
    height: lineHeight,
    backgroundColor: colors.orange,
  },
});

const LineSeparator = () => {
  const { muiGridBlockContainer } = useStylesBase();
  const { container, lineContainer, thickLine } = useStyles();
  return (
    <Grid container justify="flex-end" className={`${muiGridBlockContainer} ${container} ${container}`}>
      <Grid className={lineContainer}>
        <div className={thickLine} width="250px" />
      </Grid>
    </Grid>
  );
};

export default LineSeparator;
