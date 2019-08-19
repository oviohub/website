import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { stylesBase, spacing, Dot } from '../styledComponents';

const { muiGridBlockContainer } = stylesBase;
const styles = {
  muiGridBlockContainer,
  card: {
    margin: `0px ${spacing(2)}`,
    padding: spacing(4),
    border: '1px solid #DCDCDC',
    boxSizing: 'border-box',
    boxShadow: '0px 30px 20px rgba(0, 0, 0, 0.05)',
  },
  body2: {
    fontStyle: 'italic',
    marginBottom: spacing(3),
  },
  caption: {
    fontFamily: 'Montserrat',
  },
  photo: {
    marginRight: spacing(2),
  },
  controllers: {
    marginTop: spacing(5),
  },
};

class Block2Feedback extends React.Component {
  constructor(props) {
    super(props);
    const { comments, viewsToShow } = this.props;
    this.state = { visibleComments: comments.slice(0, viewsToShow) };
  }

  getControllers() {
    const { comments, viewsToShow } = this.props;
    const { visibleComments } = this.state;
    const items = [];
    const numberOfDot = Math.ceil(comments.length / viewsToShow);
    for (let index = 0, currIndex = 0; index < numberOfDot; index += 1) {
      currIndex = index * viewsToShow;
      const currVisibleComments = comments.slice(currIndex, currIndex + viewsToShow);
      items.push(<Dot
        key={JSON.stringify(currVisibleComments)}
        orange={JSON.stringify(visibleComments) === JSON.stringify(currVisibleComments) ? 1 : 0}
        onClick={() => this.setState({ visibleComments: currVisibleComments })}
      />);
    }
    return items;
  }

  render() {
    // eslint-disable-next-line no-shadow
    const { classes: { muiGridBlockContainer, card, body2, photo, caption, controllers } } = this.props;
    const { visibleComments } = this.state;
    const Dots = this.getControllers();
    return (
      <Grid className={muiGridBlockContainer} container>
        {visibleComments.map(({ author, text, position, photo: { publicURL: photoURL } }) => (
          <Grid key={author} item xs={4}>
            <Grid className={card}>
              <Typography className={body2} variant="body2">{text}</Typography>
              <Grid container alignItems="center">
                <img className={photo} src={photoURL} alt={author} />
                <Grid>
                  <Typography variant="h4">{author}</Typography>
                  <Typography className={caption} variant="caption">{position}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
        <Grid className={controllers} container justify="center">
          {Dots}
        </Grid>
      </Grid>
    );
  }
}

Block2Feedback.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    photo: PropTypes.shape({
      publicURL: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
  viewsToShow: PropTypes.number,
  classes: PropTypes.shape({
    muiGridBlockContainer: PropTypes.string.isRequired,
    card: PropTypes.string.isRequired,
    body2: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    controllers: PropTypes.string.isRequired,
  }).isRequired,
};

Block2Feedback.defaultProps = {
  viewsToShow: 3,
};

export default withStyles(styles)(Block2Feedback);
