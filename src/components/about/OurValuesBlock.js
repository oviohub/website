import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { spacing, stylesBase } from '../styledComponents';

import orangeMark from '../../assets/aboutPage/ourValues.jpg';
import itemImg1 from '../../assets/aboutPage/ourValuesItem.1.png';
import itemImg2 from '../../assets/aboutPage/ourValuesItem.2.png';
import itemImg3 from '../../assets/aboutPage/ourValuesItem.3.png';
import itemImg4 from '../../assets/aboutPage/ourValuesItem.4.png';

const items = [
  {
    title: 'Impact-Oriented',
    content: `We place people before technology and work to maximize social benefit.
      We consider the impact of our work on communities, other living beings, ecosystems and the world-at-large.`,
    image: itemImg1,
  },
  {
    title: 'Playful Professionalism',
    content: `What is better than having fun while changing the world? We value adventures, challenges,
      and happiness to solve social challenges.`,
    image: itemImg2,
  },
  {
    title: 'Collaboration',
    content: `We value teamwork and collective actions. Our success is driven by our ability to build
      connections across the world and between sectors, break silos and foster exchange of competencies.`,
    image: itemImg3,
  },
  {
    title: 'Inspire Change',
    content: `We embrace positive change and continuously work to improve the lives of others whether
      it’s harnessing market forces for social good, inspiring purposeful goals for people or helping
      civil agents work together.`,
    image: itemImg4,
  },
];

const { muiGridBlockContainer, muiGridBackground } = stylesBase;
const useStyles = makeStyles({
  muiGridBlockContainer,
  muiGridBackground,
  container: { paddingTop: spacing(6) },
  title2: { marginTop: '0px' },
  itemIconContainer: { textAlign: 'center' },
  itemTextContainer: { marginBottom: spacing(6) },
  title4: { marginBottom: spacing(1) },
  imageComponent: {
    left: '0px',
    marginTop: '-250px',
  },
});

const OurValuesBlock = () => {
  const {
    // eslint-disable-next-line no-shadow
    muiGridBlockContainer,
    // eslint-disable-next-line no-shadow
    muiGridBackground,
    container,
    title2,
    itemIconContainer,
    itemTextContainer,
    imageComponent,
    title4,
  } = useStyles();
  return (
    <Grid className={`${muiGridBlockContainer} ${container}`} container>
      <Grid item xs={5}>
        <img className={`${muiGridBackground} ${imageComponent}`} src={orangeMark} alt="Our values" />
        <Typography variant="h2" className={title2}>Our Values</Typography>
      </Grid>
      <Grid item xs={7}>
        {items.map(({ title, image, content }) => (
          <Grid key={title} container>
            <Grid item xs={2} className={itemIconContainer}>
              <img src={image} alt={title} />
            </Grid>
            <Grid item xs={10} size="2" className={itemTextContainer}>
              <Typography variant="h4" className={title4}>{title}</Typography>
              <Typography variant="body2">{content}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default OurValuesBlock;
