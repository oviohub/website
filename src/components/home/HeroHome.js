import React from 'react';
import { Link } from 'gatsby';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { useWidth, stylesBase, menuHeightOffset } from '../styledComponents';
import heroImage from '../../assets/homePage/heroImage.jpg';
import { getPageUrl } from '../../Routes';

const { muiButtonWhiteBackground, muiGridFullScreen } = stylesBase;
const imageHeight = '680px'; // 680px ==  height of the header image in the design
const useStyles = makeStyles(theme => ({
  muiButtonWhiteBackground,
  muiGridFullScreen,
  mainContainer: {
    height: `calc(${imageHeight} - ${menuHeightOffset}px)`,
  },
  imageContainer: {
    position: 'absolute',
    left: '0px',
    top: '0px',
    zIndex: '-1',
  },
  image: {
    width: '100%',
    height: imageHeight,
    objectFit: 'cover',
    [theme.breakpoints.down('md')]: { objectPosition: 'left' },
  },
  textContainer: {
    marginLeft: '0px',
    [theme.breakpoints.down('sm')]: { textAlign: 'center' },
  },
  typography: {
    textAlign: 'left',
    marginLeft: '0px',
    [theme.breakpoints.down('sm')]: { textAlign: 'center' },
  },
  buttonContainer: {
    margin: '50px 0px 105px',
    [theme.breakpoints.down('xs')]: { marginBottom: '35px' },
  },
}));

const Hero = () => {
  const width = useWidth();
  const {
    // eslint-disable-next-line no-shadow
    muiButtonWhiteBackground,
    // eslint-disable-next-line no-shadow
    muiGridFullScreen,
    mainContainer,
    imageContainer,
    image,
    textContainer,
    typography,
    buttonContainer,
  } = useStyles();

  return (
    <React.Fragment>
      <Grid container className={mainContainer}>
        <Grid className={`${muiGridFullScreen} ${imageContainer}`}>
          <img className={image} src={heroImage} alt="Ovio" />
        </Grid>
        <Grid
          container
          item
          className={textContainer}
          direction="column"
          justify={width === 'xs' ? 'flex-start' : 'center'}
          lg={6}
          md={8}
          xs={12}
        >
          <Typography className={typography} variant="h1">Connecting Tech Minds and Impact Makers</Typography>
          <Typography className={typography} variant="subtitle1">
            We revolutionize pro-bono work for the tech industry and bring together social impact organizations,
            passionate people and companies to make skill-based volunteering easy and rewarding for all.
          </Typography>
          <Grid className={buttonContainer} item>
            <Link to={getPageUrl('AboutPage')} style={{ textDecoration: 'none' }}>
              <Button className={muiButtonWhiteBackground}>Learn More</Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>

    </React.Fragment>
  );
};

export default Hero;
