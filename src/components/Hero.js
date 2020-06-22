import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { pick } from 'lodash';

import { Grid, Typography, Button, Box, withStyles } from '@material-ui/core';

import {
  menuHeightOffset,
  stylesBase,
  colors,
  ExternalLink,
} from './styledComponents';

const Hero = ({
  classes,
  title,
  subtitle,
  subSubtitle,
  backgroundImage,
  button,
}) => {
  const { text: buttonText, link: buttonLink, onClick } = button || {};

  return (
    <div className={classes.container}>
      <div
        className={classNames(
          classes.muiGridFullScreen,
          classes.imageContainer,
        )}
      >
        <img className={classes.image} src={backgroundImage} alt="Ovio" />
      </div>

      <Grid container justify="center" alignItems="center">
        <Grid item xs={10} sm={8} md={6} className={classes.textContainer}>
          <Typography variant="h1">{title}</Typography>
          {subtitle && <Typography variant="subtitle1">{subtitle}</Typography>}
          {subSubtitle && (
            <Box mt={3}>
              <Typography align="center" variant="body1" color="primary">
                {subSubtitle}
              </Typography>
            </Box>
          )}
          {button && (
            <Box mt={{ xs: 3, lg: 6 }}>
              {buttonLink ? (
                <ExternalLink href={buttonLink} noDecoration>
                  <Button
                    className={classNames(
                      classes.muiButtonWhiteBackground,
                      classes.buttonColor,
                    )}
                  >
                    {buttonText}
                  </Button>
                </ExternalLink>
              ) : (
                onClick && (
                  <Button
                    className={classNames(
                      classes.muiButtonWhiteBackground,
                      classes.buttonColor,
                    )}
                    onClick={onClick}
                  >
                    {buttonText}
                  </Button>
                )
              )}
            </Box>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

const textPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.element]);
Hero.propTypes = {
  title: textPropType.isRequired,
  subtitle: textPropType,
  subSubtitle: textPropType,
  backgroundImage: PropTypes.string.isRequired,
  button: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string,
    onClick: PropTypes.func,
  }),
};

const styles = (theme) => ({
  ...pick(stylesBase, ['muiGridFullScreen', 'muiButtonWhiteBackground']),

  container: {
    display: 'flex',
    paddingTop: `${menuHeightOffset}px`,
    height: 500,

    [theme.breakpoints.down('sm')]: {
      height: 300,
    },
  },

  imageContainer: {
    position: 'absolute',
    height: 500,
    top: menuHeightOffset,
    left: 0,
    zIndex: '-1',

    [theme.breakpoints.down('sm')]: {
      height: 300,
    },
  },

  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  buttonColor: {
    color: colors.darkBlue,
  },
});

export default withStyles(styles)(Hero);
