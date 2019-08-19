import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import { makeStyles } from '@material-ui/styles';
import { spacing, stylesBase, colors } from '../styledComponents';

const { muiGridBlockContainer } = stylesBase;
const useStyles = makeStyles(theme => ({
  muiGridBlockContainer,
  container: ({ withoutMarginTo, lineHeight }) => ({
    marginTop: withoutMarginTo && `calc(-1 * ${lineHeight} / 2)`,
    marginBottom: spacing(12),
    [theme.breakpoints.down('sm')]: { marginBottom: spacing(7) },
    height: lineHeight,
  }),
  lineContainer: {
    position: 'absolute',
    right: '0px',
    [theme.breakpoints.down('sm')]: { left: '0px' },
  },
  thickLine: ({ lineHeight }) => ({
    width: '250px',
    height: lineHeight,
    backgroundColor: colors.orange,
    [theme.breakpoints.down('sm')]: { width: '90vw' },
  }),
}));

const LineSeparator = ({ withoutMarginTo, width }) => {
  // eslint-disable-next-line no-shadow
  const { muiGridBlockContainer, container, lineContainer, thickLine } = useStyles({
    withoutMarginTo, lineHeight: isWidthDown('sm', width) ? '3px' : '12px',
  });
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
  width: PropTypes.string.isRequired,
};

LineSeparator.defaultProps = {
  withoutMarginTo: false,
};


export default withWidth()(LineSeparator);
