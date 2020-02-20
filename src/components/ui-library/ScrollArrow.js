import React from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { spacing, Arrow, useWidth } from '../styledComponents';

const getNextBlockMarginTop = factor => parseInt(spacing(factor).replace('px', ''), 10);

export const scrollToRef = (ref, offset = 0) => window.scrollTo({
  top: get(ref, 'current.offsetTop') + offset,
  behavior: 'smooth',
});

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
  const width = useWidth();
  const { arrowContainer } = useStyles();
  const scrollOffset = getNextBlockMarginTop(width === 'xs' ? 8 : 12);

  return (
    <ArrowContainer className={arrowContainer} onClick={() => scrollToRef(scrollRef, scrollOffset)}>
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
