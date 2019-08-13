import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { menuHeightOffset, spacing, stylesBase } from '../styledComponents';
import heroImage from '../../assets/homePage/heroImage.jpg';
import ScrollArrow from '../ui-library/ScrollArrow';

const imageHeight = 680; // 680px ==  height of the header image in the design
const useStyles = makeStyles({
  muiButtonTransparent: stylesBase.muiButtonTransparent,
  mainContainer: { height: `${imageHeight - menuHeightOffset}px` },
  imageContainer: {
    position: 'absolute',
    width: 'calc(100vw - 15px)', // 15px == scroll bar size
    left: '0px',
    top: '0px',
    zIndex: '-1',
  },
  image: {
    width: '100%',
    height: `${imageHeight}px`,
    objectFit: 'cover',
  },
  textContainer: { marginLeft: spacing(2) },
  typography: {
    textAlign: 'left',
    marginLeft: '0px',
  },
  buttonContainer: { margin: '50px 0px 105px' },
});

const Hero = () => {
  const {
    mainContainer,
    imageContainer,
    image,
    textContainer,
    typography,
    buttonContainer,
    muiButtonTransparent,
  } = useStyles();
  const scrollRef = React.createRef();
  return (
    <React.Fragment>
      <Grid className={mainContainer} container>
        <Grid className={imageContainer}>
          <img className={image} src={heroImage} alt="Ovio" />
        </Grid>
        <Grid container item className={textContainer} direction="column" xs={6}>
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
