import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { pick } from 'lodash';

import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import {
  menuHeightOffset,
  spacing,
  stylesBase,
  colors,
  ExternalLink,
} from './styledComponents';

const useStyles = makeStyles((theme) => ({
  ...pick(stylesBase, ['muiGridFullScreen', 'muiButtonWhiteBackground']),

  mainContainer: { paddingTop: `${menuHeightOffset}px` },

  heroContainer: ({ backgroundImage }) => ({
    height: 500, // hero height
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    [theme.breakpoints.down('sm')]: {
      height: 300,
    },
  }),

  subSubtitle1: {
    marginTop: spacing(3),
    textAlign: 'center',
  },

  buttonContainer: {
    marginTop: spacing(6),

    [theme.breakpoints.down('md')]: {
      marginTop: spacing(3),
    },
  },

  buttonColor: {
    color: colors.darkBlue,
  },
}));

const Hero = ({ title, subtitle, subSubtitle, backgroundImage, button }) => {
  const {
    // eslint-disable-next-line no-shadow
    muiGridFullScreen,
    // eslint-disable-next-line no-shadow
    muiButtonWhiteBackground,
    mainContainer,
    heroContainer,
    subSubtitle1,
    buttonContainer,
    buttonColor,
  } = useStyles({ backgroundImage });

  const { text: buttonText, link: buttonLink, onClick } = button || {};
  const buttonClasses = classNames(muiButtonWhiteBackground, buttonColor);

  return (
    <Grid className={mainContainer} container justify="center">
      <Grid>
        <Grid
          className={`${muiGridFullScreen} ${heroContainer}`}
          container
          item
          justify="center"
          alignItems="center"
        >
          <Grid
            container
            item
            direction="column"
            justify="center"
            alignItems="center"
            xs={10}
            sm={8}
            md={6}
          >
            <Typography variant="h1">{title}</Typography>
            {subtitle && (
              <Typography variant="subtitle1">{subtitle}</Typography>
            )}
            {subSubtitle && (
              <Typography
                className={subSubtitle1}
                variant="body1"
                color="primary"
              >
                {subSubtitle}
              </Typography>
            )}
            {button && (
              <Grid className={buttonContainer}>
                {buttonLink ? (
                  <ExternalLink href={buttonLink} noDecoration>
                    <Button className={buttonClasses}>{buttonText}</Button>
                  </ExternalLink>
                ) : (
                  onClick && (
                    <Button className={buttonClasses} onClick={onClick}>
                      {buttonText}
                    </Button>
                  )
                )}
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
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

export default Hero;
