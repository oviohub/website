import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { spacing, stylesBase, colors } from '../styledComponents';

const lineHeight = spacing(1.5);
const { muiGridBlockContainer } = stylesBase;
const useStyles = makeStyles({
  muiGridBlockContainer,
  container: ({ withoutMarginTo }) => ({
    marginTop: withoutMarginTo && `calc(-1 * ${lineHeight} / 2)`,

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
  // eslint-disable-next-line no-shadow
  const { muiGridBlockContainer, container, lineContainer, thickLine } = useStyles({ withoutMarginTo });
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
