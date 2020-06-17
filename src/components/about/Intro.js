import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Hero from '../Hero';
import { useValueBasedOnWidth, useWidthDown } from '../../hooks/width';

import hero from '../../assets/aboutPage/hero.jpg';
import heroMobile from '../../assets/aboutPage/hero.mobile.jpg';
import ourVisionBackground from '../../assets/aboutPage/ourVisionBackground.jpg';
import ourMissionBackground from '../../assets/aboutPage/ourMissionBackground.jpg';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundImage: ({ image }) => `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow: theme.shadows[3],
    width: 420,
    height: 420,
    margin: theme.spacing(-7, 'auto', 0),

    [theme.breakpoints.down('sm')]: {
      width: '90%',
      height: 'auto',
      marginTop: theme.spacing(6),
    },
  },
}));

const cardList = [
  {
    title: 'Our Vision',
    image: ourVisionBackground,
    paragraph:
      // eslint-disable-next-line max-len
      'Unleashing the potential of collaboration through technology to bring people together and create impactful, positive solutions.',
  },
  {
    title: 'Our Mission',
    image: ourMissionBackground,
    paragraph: (
      <span>
        Empower developers to contribute to open-source and collaborate at
        scale.
        <br />
        <br />
        At Ovio, we strive to make the open source ecosystem more collaborative
        and accessible. We’re working both to make contributors feel confident
        about getting involved and to help maintainers feel empowered to
        activate their communities.
      </span>
    ),
  },
];

const Intro = () => {
  const isDownSm = useWidthDown('sm');
  const bgImage = useValueBasedOnWidth({
    xs: heroMobile,
    sm: heroMobile,
    default: hero,
  });

  return (
    <>
      <Hero
        title="About"
        // eslint-disable-next-line max-len
        subtitle="Ovio matches developers with the right project, the right task, and the right community, so that everyone feels empowered to become an active open source contributor."
        backgroundImage={bgImage}
      />
      <Grid container justify="center" spacing={isDownSm ? 2 : 4}>
        {cardList.map(({ title, image, paragraph }, index) => {
          const classes = useStyles({ image });
          const titleColor = index % 2 ? 'primary' : 'textSecondary';
          const bodyColor = index % 2 ? 'secondary' : 'primary';

          return (
            <Grid key={title} item>
              <Box className={classes.card}>
                <Box p={5}>
                  <Grid container spacing={3}>
                    <Grid item>
                      <Typography variant="h3" color={titleColor}>
                        {title}
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Typography variant="body1" color={bodyColor}>
                        {paragraph}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Intro;
