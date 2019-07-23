import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { menuHeightOffset, useStylesBase } from '../styledComponents';
import headerImage from '../../assets/homePage/headerImage.jpg';
import ScrollArrow from '../ui-library/ScrollArrow';

const imageHeight = 680; // 680px ==  height of the header image in the design
const useStyles = makeStyles({
  mainContainer: { height: `${imageHeight - menuHeightOffset}px` },
  imageContainer: {
    position: 'absolute',
    width: 'calc(100vw - 15px)', // 15px == scroll bar size
    left: '0px',
    top: '0px',
    zIndex: '-1',
  },
  buttonContainer: { margin: '50px 0px 105px' },
  arrowContainer: {
    cursor: 'pointer',
    marginBottom: '90px',
  },
  image: {
    width: '100%',
    height: `${imageHeight}px`,
  },
});

const Hero = () => {
  const baseClasses = useStylesBase();
  const classes = useStyles();
  const scrollRef = React.createRef();
  return (
    <React.Fragment>
      <Grid className={classes.mainContainer} container justify="center">
        <Grid className={classes.imageContainer}>
          <img className={classes.image} src={headerImage} alt="Ovio" />
        </Grid>
        <Grid container item justify="center" direction="column" alignItems="center" xs={6}>
          <Typography variant="h1">Ovio brings Technology in Service of Humanity</Typography>
          <Typography variant="subtitle1">
            Technology can, and should, fuel solutions to the greatest
            challenges of our time and be in service to humanity.
          </Typography>
          <Grid className={classes.buttonContainer} item>
            <Button className={baseClasses.muiButtonTransparent}>Learn More</Button>
          </Grid>
          <ScrollArrow scrollRef={scrollRef} />
        </Grid>
      </Grid>
      <div ref={scrollRef} />
    </React.Fragment>
  );
};

export default Hero;
