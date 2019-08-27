import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { stylesBase, spacing, useWidth } from '../styledComponents';
import Slider from '../ui-library/Slider';

const { muiGridBlockContainer } = stylesBase;
const useStyles = makeStyles({
  muiGridBlockContainer,
  card: {
    margin: `0px ${spacing(2)}`,
    padding: spacing(4),
    border: '1px solid #DCDCDC',
    boxSizing: 'border-box',
    boxShadow: '0px 30px 20px rgba(0, 0, 0, 0.05)',
  },
  body1: {
    fontStyle: 'italic',
    marginBottom: spacing(3),
  },
  caption: {
    fontFamily: 'Montserrat',
  },
  photo: {
    marginRight: spacing(2),
  },
});

const BlockFeedbackTemplate = ({ comments }) => {
  const width = useWidth();
  // eslint-disable-next-line no-shadow
  const { muiGridBlockContainer, card, body1, photo, caption } = useStyles();
  let viewsToShow;
  switch (width) {
    case 'xs': case 'sm':
      viewsToShow = 1;
      break;
    case 'md':
      viewsToShow = 2;
      break;
    default:
      viewsToShow = 3;
  }
  return (
    <Grid className={muiGridBlockContainer} container>
      <Slider viewsToShow={viewsToShow}>
        {comments.map(({ author, text, position, photo: { publicURL: photoUrl } }) => (
          <Grid key={`${author}${text}`} item xs={12} md={6} lg={4}>
            <Grid className={card}>
              <Typography className={body1} variant="body1">{text}</Typography>
              <Grid container alignItems="center">
                <img className={photo} src={photoUrl} alt={author} />
                <Grid>
                  <Typography variant="h4">{author}</Typography>
                  <Typography className={caption} variant="caption">{position}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Slider>
    </Grid>
  );
};

BlockFeedbackTemplate.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    photo: PropTypes.shape({
      publicURL: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
};

export default BlockFeedbackTemplate;
