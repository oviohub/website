import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { spacing, useStylesBase } from '../styledComponents';
import iconGithub from '../../assets/icons/icon.github.white.svg';

const useStyles = makeStyles({
  itemContainer: { margin: `${spacing(10)} 0px ${spacing(10)}` },
  textContainer: { marginLeft: spacing(4) },
  body2: { margin: `0px 0px ${spacing(4)} ${spacing(4)}` },
  buttonLink: {
    marginLeft: spacing(4),
    textDecoration: 'none',
  },
  image: {
    objectFit: 'contain',
  },
  icon: { marginRight: spacing(2) },
  markImg: {
    position: 'absolute',
    left: '0px',
    zIndex: -1,
  },
});

const Block3HowTo = ({ title, subtitle, markImage, processItems }) => {
  const { muiGridBlockContainer } = useStylesBase();
  const { itemContainer, textContainer, body2, buttonLink, image, icon, markImg } = useStyles();
  return (
    <Grid className={muiGridBlockContainer}>
      <img className={markImg} src={markImage && markImage.publicURL} alt="Ovio - Volunteers - The process" />
      <Typography variant="h2">{title}</Typography>
      <Typography variant="subtitle2">{subtitle}</Typography>
      <Grid>
        {processItems.map((item, index) => (
          <Grid className={itemContainer} key={item.text} container>
            <img className={image} src={item.image && item.image.publicURL} alt={item.text} />
            <Grid className={textContainer} item xs={4}>
              <Typography component="p" variant="h2" color="textSecondary">{item.title || index + 1}</Typography>
              <Typography className={body2} variant="body2">{item.text}</Typography>
              {item.button && (
                <a href={item.button.link} className={buttonLink} target="_blank" rel="noreferrer noopener">
                  <Button>
                    {item.button.withGitHubIcon && <img className={icon} src={iconGithub} alt={item.button.text} />}
                    {item.button.text}
                  </Button>
                </a>
              )}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

Block3HowTo.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  markImage: PropTypes.shape({
    publicURL: PropTypes.string.isRequired,
  }).isRequired,
  processItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string.isRequired,
    image: PropTypes.shape({
      publicURL: PropTypes.string.isRequired,
    }).isRequired,
    button: PropTypes.shape({
      text: PropTypes.string.isRequired,
      withGitHubIcon: PropTypes.bool,
      link: PropTypes.string.isRequired,
    }),
  })).isRequired,
};

export default Block3HowTo;
