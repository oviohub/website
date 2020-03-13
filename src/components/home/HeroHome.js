import React from 'react';
import { Link } from 'gatsby';
import { Grid, Typography, Button, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { useWidth, stylesBase, menuHeightOffset } from '../styledComponents';
import ScrollArrow from '../ui-library/ScrollArrow';
import heroImage from '../../assets/homePage/heroImage.jpg';
import { getPageUrl } from '../../Routes';

const { muiButtonWhiteBackground, muiGridFullScreen } = stylesBase;
const useStyles = makeStyles(theme => ({
  muiButtonWhiteBackground,
  muiGridFullScreen,
  mainContainer: {
    height: `calc(100vh - ${menuHeightOffset}px)`,
  },
  imageContainer: {
    position: 'absolute',
    left: '0px',
    top: '0px',
    zIndex: '-1',
  },
  image: {
    width: '100%',
    height: '100vh',
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
    [theme.breakpoints.down('xs')]: { margin: '35px 0px' },
  },
}));

const Hero = () => {
  const width = useWidth();
  const scrollRef = React.createRef();
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
          <Typography className={typography} variant="h1">Empowering developers to become active open source contributors</Typography>
          <Typography className={typography} variant="subtitle1">
          Our platform Explore is building a more accessible and inclusive open source ecosystem, empowering millions of developers to become active contributors.
          </Typography>
          <Grid className={buttonContainer} item>
            <Link to={getPageUrl('AboutPage')} style={{ textDecoration: 'none' }}>
              <Button className={muiButtonWhiteBackground}>Learn More</Button>
            </Link>
          </Grid>
          <Hidden xsDown>
            <ScrollArrow scrollRef={scrollRef} />
          </Hidden>
        </Grid>
      </Grid>
      <div ref={scrollRef} />
    </React.Fragment>
  );
};

export default Hero;
