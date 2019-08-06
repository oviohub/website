import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { spacing, useStylesBase, colors } from '../styledComponents';

const lineHeight = spacing(1.5);
const useStyles = makeStyles({
  container: props => ({
    marginTop: props.withoutMarginTo && `calc(-1 * ${lineHeight} / 2)`,
    marginBottom: spacing(12),
    height: lineHeight,
  }),
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

const LineSeparator = ({ withoutMarginTo }) => {
  const { muiGridBlockContainer } = useStylesBase();
  const { container, lineContainer, thickLine } = useStyles({ withoutMarginTo });
  return (
    <Grid container justify="flex-end" className={`${muiGridBlockContainer} ${container}`}>
      <Grid className={lineContainer}>
        <div className={thickLine} />
      </Grid>
    </Grid>
  );
};

LineSeparator.propTypes = {
  withoutMarginTo: PropTypes.bool,
};

LineSeparator.defaultProps = {
  withoutMarginTo: false,
};


export default LineSeparator;
