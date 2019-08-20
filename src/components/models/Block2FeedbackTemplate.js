import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { stylesBase, spacing } from '../styledComponents';
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
});

const Block2FeedbackTemplate = ({ comments }) => {
  // eslint-disable-next-line no-shadow
  const { muiGridBlockContainer, card, body2, photo, caption } = useStyles();
  return (
    <Grid className={muiGridBlockContainer} container>
      <Slider>
        {comments.map(({ author, text, position, photo: { publicURL: photoUrl } }) => (
          <Grid key={author} item xs={4}>
            <Grid className={card}>
              <Typography className={body2} variant="body2">{text}</Typography>
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

Block2FeedbackTemplate.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    photo: PropTypes.shape({
      publicURL: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
};

export default Block2FeedbackTemplate;
