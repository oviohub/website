import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { spacing, stylesBase, colors } from '../styledComponents';

const lineHeight = spacing(1.5);
const useStyles = makeStyles({
  muiGridBlockContainer: stylesBase.muiGridBlockContainer,
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
  const { muiGridBlockContainer, container, lineContainer, thickLine } = useStyles();
  return (
    <Grid container justify="flex-end" className={`${muiGridBlockContainer} ${container}`}>
      <Grid className={lineContainer}>
        <div className={thickLine} width="250px" />
      </Grid>
    </Grid>
  );
};

export default LineSeparator;
