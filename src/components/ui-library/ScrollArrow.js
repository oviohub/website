import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { spacing, Arrow } from '../styledComponents';

// spacing(12) === next block margin top
const nextBlockMarginTop = parseInt(spacing(12).replace('px', ''), 10);
const scrollToRef = ref => window.scrollTo({ top: ref.current.offsetTop + nextBlockMarginTop, behavior: 'smooth' });

const bounceKeyframes = keyframes`
  0%, 10%, 20% { transform: translateY(0); }
  5% { transform: translateY(-30px); }
  15% { transform: translateY(-15px); }
`;

const bounceAnimation = css`animation: ${bounceKeyframes} 5s linear infinite;`;
const ArrowContainer = styled(Grid)`${bounceAnimation}`;
const useStyles = makeStyles(theme => ({
  arrowContainer: {
    position: 'absolute',
    bottom: '42px',
    left: '50vw',
    cursor: 'pointer',
    alignSelf: 'center',
    marginLeft: '-20px',
    [theme.breakpoints.down('xs')]: { bottom: '26px' },
  },
}));

const ScrollArrow = ({ scrollRef }) => {
  const { arrowContainer } = useStyles();
  return (
    <ArrowContainer className={arrowContainer} onClick={() => scrollToRef(scrollRef)}>
      <Arrow />
    </ArrowContainer>
  );
};

ScrollArrow.propTypes = {
  scrollRef: PropTypes.shape({}),
};

ScrollArrow.defaultProps = {
  scrollRef: null,
};

export default ScrollArrow;
