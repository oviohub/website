import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { spacing, Dot } from '../styledComponents';

const styles = {
  controllers: { marginTop: spacing(5) },
};

const stringify = (element) => {
  let res = '';
  for (let index = 0; index < element.length; index += 1) res += element[index].key;
  return res;
};

class Slider extends React.Component {
  constructor(props) {
    super(props);
    const { children, viewsToShow } = this.props;
    this.state = { visibleChildren: children.slice(0, viewsToShow) };
  }

  getControllers() {
    const { children, viewsToShow } = this.props;
    const { visibleChildren } = this.state;
    const items = [];
    const numberOfDot = Math.ceil(children.length / viewsToShow);
    for (let indice = 0, currVisibleComments = null, currIndex = 0; indice < numberOfDot; indice += 1) {
      currIndex = indice * viewsToShow;
      currVisibleComments = children.slice(currIndex, currIndex + viewsToShow);
      items.push(<Dot
        key={stringify(currVisibleComments)}
        orange={stringify(visibleChildren) === stringify(currVisibleComments) ? 1 : 0}
        onClick={() => this.setState({ visibleChildren: currVisibleComments })}
      />);
    }
    return items;
  }

  render() {
    const { classes: { controllers } } = this.props;
    const { visibleChildren } = this.state;
    const Dots = this.getControllers();
    return (
      <Grid container>
        {visibleChildren}
        <Grid className={controllers} container justify="center">{Dots}</Grid>
      </Grid>
    );
  }
}

Slider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  classes: PropTypes.shape({ controllers: PropTypes.string }).isRequired,
  viewsToShow: PropTypes.number,
};

Slider.defaultProps = {
  viewsToShow: 3,
};

export default withStyles(styles)(Slider);
