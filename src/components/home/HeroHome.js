import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Grid, Typography, Button, withWidth } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { stylesBase, menuHeightOffset } from '../styledComponents';
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

const Hero = ({ width }) => {
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
  const scrollRef = React.createRef();

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
            We revolutionize pro-bono for the tech industry and bring together social impact organizations, people
            and companies to make skill-based volunteering easy and rewarding for all.
          </Typography>
          <Grid className={buttonContainer} item>
            <Link to={getPageUrl('AboutPage')} style={{ textDecoration: 'none' }}>
              <Button className={muiButtonWhiteBackground}>Learn More</Button>
            </Link>
          </Grid>
        </Grid>
        <ScrollArrow scrollRef={scrollRef} />
      </Grid>
      <div ref={scrollRef} />
    </React.Fragment>
  );
};

Hero.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(Hero);
