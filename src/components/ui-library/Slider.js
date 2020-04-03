import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { spacing, Dot } from '../styledComponents';

const slideTime = 4000;
const slideTimeInSec = `${slideTime / 1000}s`;

const bounceKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  20%, 80% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
`;

const halfBounceKeyframes = keyframes`
  0%, 80% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
`;

const bounceAnimation = css`animation: ${bounceKeyframes} ${slideTimeInSec} linear infinite;`;
const halfBounceAnimation = css`animation: ${halfBounceKeyframes} ${slideTimeInSec} linear infinite;`;
const AnimatedGrid = styled(Grid)`
  opacity: 0;
  ${({ half }) => half ? halfBounceAnimation : bounceAnimation}
`;

const style = {
  controllers: { marginTop: spacing(5) },
};

class Slider extends React.Component {
  constructor(props) {
    super(props);
    const { children, viewsToShow, autoSlide } = this.props;
    this.numberOfDot = Math.ceil(children.length / viewsToShow);
    this.state = { activeDotIndex: 0, isFirstVisibleAnimated: false };
    if (autoSlide) this.setInterval();
  }

  componentDidUpdate(prevProps) {
    const { autoSlide: prevAutoSlide } = prevProps;
    const { autoSlide } = this.props;
    if (prevAutoSlide !== autoSlide) {
      if (autoSlide) this.setInterval();
      else this.clearInterval();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  setInterval() {
    // the order of the next two lines is important to keep the animation smooth
    this.timeout = setTimeout(() => this.setState({ isFirstVisibleAnimated: true }), slideTime);
    this.interval = setInterval(() => this.next(), slideTime);
  }

  clearInterval() {
    if (this.interval) clearInterval(this.interval);
    if (this.timeout) clearTimeout(this.timeout);
    this.setState({ isFirstVisibleAnimated: false });
  }

  next() {
    const { activeDotIndex } = this.state;
    if (this.numberOfDot !== 1) this.setState({ activeDotIndex: (activeDotIndex + 1) % this.numberOfDot });
  }


  render() {
    const { children, viewsToShow, classes, autoSlide } = this.props;
    const { activeDotIndex, isFirstVisibleAnimated } = this.state;
    const Dots = [];
    for (let index = 0; index < this.numberOfDot; index += 1) {
      Dots.push(
        <Dot
          key={index}
          orange={index === activeDotIndex ? 1 : 0}
          onClick={() => this.setState({ activeDotIndex: index })}
        />,
      );
    }

    const { controllers } = classes;
    const currIndex = activeDotIndex * viewsToShow;
    const visibleChildren = children.slice(currIndex, currIndex + viewsToShow);
    return (
      <Grid container justify="center">
        {(autoSlide && this.numberOfDot !== 1) ? (
          <AnimatedGrid container justify="center" half={isFirstVisibleAnimated ? 0 : 1}>
            {visibleChildren}
          </AnimatedGrid>
        ) : (
          <Grid container justify="center">
            {visibleChildren}
          </Grid>
        )}
        { Dots.length > 1 ? <Grid className={controllers} container justify="center">{Dots}</Grid> : null}
      </Grid>
    );
  }
}

Slider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  viewsToShow: PropTypes.number,
  autoSlide: PropTypes.bool,
  classes: PropTypes.shape({
    controllers: PropTypes.string.isRequired,
  }).isRequired,
};

Slider.defaultProps = {
  viewsToShow: 3,
  autoSlide: false,
};

export default withStyles(style)(Slider);
