import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { spacing, stylesBase } from '../styledComponents';
import iconGithub from '../../assets/icons/icon.github.white.svg';

const { muiGridBlockContainer } = stylesBase;
const useStyles = makeStyles({
  muiGridBlockContainer,
  itemContainer: { margin: `${spacing(10)} 0px ${spacing(10)}` },
  textContainer: { marginLeft: spacing(4) },
  body2: { margin: `0px 0px ${spacing(4)} ${spacing(4)}` },
  buttonLink: {
    marginLeft: spacing(4),
    textDecoration: 'none',
  },
  icon: { marginRight: spacing(2) },
  markImg: {
    position: 'absolute',
    left: '0px',
    zIndex: -1,
  },
});

const Block3HowTo = ({ title, subtitle, markImage, processItems }) => {
  const { muiGridBlockContainer, itemContainer, textContainer, body2, buttonLink, icon, markImg } = useStyles();
  return (
    <Grid className={muiGridBlockContainer}>
      <img className={markImg} src={markImage && markImage.publicURL} alt="Ovio - Volunteers - The process" />
      <Typography variant="h2">{title}</Typography>
      <Typography variant="subtitle2">{subtitle}</Typography>
      <Grid>
        {processItems.map(({ text, button, image: { publicURL: imageURL } }, index) => {
          const { link: btnLink, withGitHubIcon, text: btnText } = button || {};
          return (
            <Grid className={itemContainer} key={text} container>
              <img src={imageURL} alt={text} />
              <Grid className={textContainer} item xs={4}>
                <Typography component="p" variant="h2" color="textSecondary">{index + 1}</Typography>
                <Typography className={body2} variant="body2">{text}</Typography>
                {btnLink && (
                  <a href={btnLink} className={buttonLink} target="_blank" rel="noreferrer noopener">
                    <Button>
                      {withGitHubIcon && <img className={icon} src={iconGithub} alt={btnText} />}
                      {btnText}
                    </Button>
                  </a>
                )}
              </Grid>
            </Grid>
          );
        })}
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
    text: PropTypes.string.isRequired,
    image: PropTypes.shape({
      publicURL: PropTypes.string.isRequired,
    }).isRequired,
    button: PropTypes.shape({
      text: PropTypes.string.isRequired,
      withGitHubIcon: PropTypes.bool.isRequired,
      link: PropTypes.string.isRequired,
    }),
  })).isRequired,
};

export default Block3HowTo;
