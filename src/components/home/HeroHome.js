import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { spacing, stylesBase } from '../styledComponents';
import heroImage from '../../assets/homePage/heroImage.jpg';
import ScrollArrow from '../ui-library/ScrollArrow';

const { muiButtonTransparent, muiGridFullScreen } = stylesBase;
const useStyles = makeStyles(theme => ({
  muiButtonTransparent,
  muiGridFullScreen,
  imageContainer: {
    position: 'absolute',
    left: '0px',
    top: '0px',
    zIndex: '-1',
  },
  image: {
    width: '100%',
    height: '680px', // 680px ==  height of the header image in the design
    objectFit: 'cover',
    [theme.breakpoints.down('md')]: { objectPosition: 'left' },
  },
  textContainer: {
    marginLeft: spacing(2),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginLeft: '0px',
    },
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
  const {
    // eslint-disable-next-line no-shadow
    muiButtonTransparent,
    // eslint-disable-next-line no-shadow
    muiGridFullScreen,
    imageContainer,
    image,
    textContainer,
    typography,
    buttonContainer,
  } = useStyles();
  const scrollRef = React.createRef();
  return (
    <React.Fragment>
      <Grid container>
        <Grid className={`${muiGridFullScreen} ${imageContainer}`}>
          <img className={image} src={heroImage} alt="Ovio" />
        </Grid>
        <Grid container item className={textContainer} direction="column" lg={6} md={8} xs={12}>
          <Typography className={typography} variant="h1">Ovio brings Technology in Service of Humanity</Typography>
          <Typography className={typography} variant="subtitle1">
            Technology can, and should, fuel solutions to the greatest
            challenges of our time and be in service to humanity.
          </Typography>
          <Grid className={buttonContainer} item>
            <Button className={muiButtonTransparent}>Learn More</Button>
          </Grid>
          <ScrollArrow scrollRef={scrollRef} />
        </Grid>
      </Grid>
      <div ref={scrollRef} />
    </React.Fragment>
  );
};

export default Hero;
