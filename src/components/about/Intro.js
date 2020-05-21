import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Hero from '../Hero';
import { useValueBasedOnWidth, useWidthDown } from '../../hooks/width';

import hero from '../../assets/aboutPage/hero.jpg';
import heroMobile from '../../assets/aboutPage/hero.mobile.jpg';
import ourVisionBackground from '../../assets/aboutPage/ourVisionBackground.jpg';
import ourMissionBackground from '../../assets/aboutPage/ourMissionBackground.jpg';

const useStyles = makeStyles({
  background: {
    backgroundImage: ({ image }) => `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
});

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
      // eslint-disable-next-line max-len
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
      <Grid container justify="center">
        <Grid container justify="center" spacing={isDownSm ? 2 : 4}>
          {cardList.map(({ title, image, paragraph }, index) => (
            <Grid key={title} item>
              <Box
                className={useStyles({ image }).background}
                boxShadow={3}
                width={isDownSm ? '90%' : 400}
                height={isDownSm ? 'auto' : 400}
                mx="auto"
                zIndex="tooltip"
                mt={isDownSm ? 6 : -7}
              >
                <Box p={5}>
                  <Grid container spacing={3}>
                    <Grid item>
                      <Typography
                        variant="h3"
                        color={index % 2 ? 'primary' : 'textSecondary'}
                      >
                        {title}
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Typography
                        variant="body1"
                        color={index % 2 ? 'secondary' : 'primary'}
                      >
                        {paragraph}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Intro;
