import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
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
    title: 'Collaboration',
    content: `We value teamwork and collective actions. Our success is driven by our ability to build
      connections across the world and between sectors, break silos and foster exchange of competencies.`,
    image: itemImg2,
  },
  {
    title: 'Inspire Change',
    content: `We embrace positive change and continuously work to improve the lives of others whether
      it’s harnessing market forces for social good, inspiring purposeful goals for people or helping
      civil agents work together.`,
    image: itemImg3,
  },
  {
    title: 'Fun',
    content: `What is better than having fun while changing the world? We value adventures, challenges,
      and happiness to solve social challenges.`,
    image: itemImg4,
  },
];

const { muiGridBlockContainer, muiGridBackground } = stylesBase;
const useStyles = makeStyles(theme => ({
  muiGridBlockContainer,
  muiGridBackground,
  container: { paddingTop: spacing(6) },
  title2: { marginTop: '0px' },
  itemIconContainer: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: { marginBottom: spacing(2) },
  },
  icon: { width: '80px' },
  itemTextContainer: { marginBottom: spacing(6) },
  title4: { marginBottom: spacing(1) },
  imageComponent: {
    left: '0px',
    marginTop: '-130px',
  },
}));

const OurValuesBlock = ({ width }) => {
  const {
    // eslint-disable-next-line no-shadow
    muiGridBlockContainer,
    // eslint-disable-next-line no-shadow
    muiGridBackground,
    container,
    title2,
    itemIconContainer,
    icon,
    itemTextContainer,
    imageComponent,
    title4,
  } = useStyles();
  return (
    <Grid
      className={`${muiGridBlockContainer} ${container}`}
      container
      direction={isWidthDown('sm', width) ? 'column' : 'row'}
    >
      <Grid item xs={12} md={5}>
        <img className={`${muiGridBackground} ${imageComponent}`} src={orangeMark} alt="Our values" />
        <Typography variant="h2" className={title2}>Our Values</Typography>
      </Grid>
      <Grid item xs={12} md={7}>
        {items.map(({ title, image, content }) => (
          <Grid
            key={title}
            container
            direction={isWidthDown('sm', width) ? 'column' : 'row'}
            alignItems={isWidthDown('sm', width) ? 'center' : 'flex-start'}
          >
            <Grid item xs={10} md={2} className={itemIconContainer} container>
              <img className={icon} src={image} alt={title} />
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

OurValuesBlock.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(OurValuesBlock);
