import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Arrow } from '../styledComponents';

const scrollToRef = ref => window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });

const useStyles = makeStyles({
  arrowContainer: props => ({
    cursor: 'pointer',
    margin: props.margin,
    scrollBehavior: 'smooth',
  }),
});

const ScrollArrow = ({ scrollRef, margin }) => (
  <Grid className={useStyles({ margin }).arrowContainer} onClick={() => scrollToRef(scrollRef)}>
    <Arrow />
  </Grid>
);

ScrollArrow.propTypes = {
  scrollRef: PropTypes.shape({}),
  margin: PropTypes.string,
};

ScrollArrow.defaultProps = {
  scrollRef: null,
  margin: '0px 0px 90px',
};

export default ScrollArrow;
