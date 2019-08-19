import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { spacing, Dot } from '../styledComponents';

const useStyles = makeStyles({
  controllers: { marginTop: spacing(5) },
});

const stringify = element => element.reduce((accumulator, currentValue) => accumulator + currentValue.key, '');

const Slider = ({ children, viewsToShow }) => {
  const [visibleChildren, setVisibleChildren] = React.useState(children.slice(0, viewsToShow));

  function getControllers() {
    const items = [];
    const numberOfDot = Math.ceil(children.length / viewsToShow);
    for (let index = 0; index < numberOfDot; index += 1) {
      const currIndex = index * viewsToShow;
      const currVisibleComments = children.slice(currIndex, currIndex + viewsToShow);
      items.push(<Dot
        key={stringify(currVisibleComments)}
        orange={stringify(visibleChildren) === stringify(currVisibleComments) ? 1 : 0}
        onClick={() => setVisibleChildren(currVisibleComments)}
      />);
    }
    return items;
  }

  const Dots = getControllers();
  const { controllers } = useStyles();
  return (
    <Grid container>
      {visibleChildren}
      <Grid className={controllers} container justify="center">{Dots}</Grid>
    </Grid>
  );
};

Slider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  viewsToShow: PropTypes.number,
};

Slider.defaultProps = {
  viewsToShow: 3,
};

export default Slider;
