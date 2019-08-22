import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { colors, contentWidthPixels, spacing, fontSizing, stylesBase } from '../styledComponents';

import image1 from '../../assets/aboutPage/makesUsUnique.block1.jpg';
import image2 from '../../assets/aboutPage/makesUsUnique.block2.jpg';
import image3 from '../../assets/aboutPage/makesUsUnique.block3.jpg';

const cardList = [
  {
    title: 'Coding',
    subTitle: 'Engage engineers',
    image: image1,
    // eslint-disable-next-line max-len
    textOnOver: 'At a time when technology is becoming more prevalent and powerful, it is critical to engage technologists and engineers as a force for good.',
  },
  {
    title: 'Open-source',
    subTitle: 'Foster collaboration',
    image: image2,
    // eslint-disable-next-line max-len
    textOnOver: 'We focus on developing open-source solutions to foster collaboration, increase transparency and maximize sustainability of the projects.',
  },
  {
    title: 'Micro-volunteering',
    subTitle: 'Accelerate change',
    image: image3,
    // eslint-disable-next-line max-len
    textOnOver: 'Micro-volunteering makes it easy and flexible to do good. We offer our volunteers a variety of tasks that can be done anytime, anywhere, on their own terms.',
  },
];

const { muiGridBlockContainer } = stylesBase;
const useStyles = makeStyles(theme => ({
  muiGridBlockContainer,
  cardsContainer: {
    display: 'flex',
    position: 'relative',
    width: contentWidthPixels,
    [theme.breakpoints.down('md')]: { width: '100%' },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    marginTop: spacing(11),
  },
  cardContainer: {
    width: `calc(${contentWidthPixels} / ${cardList.length})`,
    height: `calc(${contentWidthPixels} / ${cardList.length})`,
    [theme.breakpoints.down('md')]: {
      width: `calc((100vw - 24px * 2) / ${cardList.length})`,
      height: `calc((100vw - 24px * 2) / ${cardList.length})`,
    },
    [theme.breakpoints.down('xs')]: {
      width: '280px',
      height: '280px',
      margin: spacing(2),
    },
    '&:hover #onHoverDisplay': { display: 'flex' },
    '&:hover #onHoverHide': { display: 'none' },
  },
  cardOnHoverDisplay: {
    height: '100%',
    width: '100%',
    display: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.orange,
    padding: '0px 10%',
    textAlign: 'center',
    [theme.breakpoints.only('sm')]: { padding: '0px 6px' },
  },
  cardOnHoverHide: ({ backgroundImage }) => ({
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
  }),
  cardTitle: {
    color: colors.grey,
    fontSize: fontSizing(6),
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: fontSizing(4),
    },
  },
  cardParagraph: {
    color: colors.grey,
    fontSize: fontSizing(2),
    marginTop: spacing(2),
    fontWeight: 'normal',
  },
  cardParagraphOnHover: {
    [theme.breakpoints.only('sm')]: { lineHeight: 'normal' },
  },
}));

const WhatMakesUsUnique = () => {
  const {
    // eslint-disable-next-line no-shadow
    muiGridBlockContainer,
    cardsContainer,
    cardContainer,
    cardOnHoverDisplay,
    cardTitle,
    cardParagraph,
    cardParagraphOnHover,
  } = useStyles();
  return (
    <Grid className={muiGridBlockContainer} container>
      <Typography variant="h2">What makes us unique?</Typography>
      <Typography variant="subtitle2">
        By focusing on coding, we transform micro-volunteering opportunities into long term impact.
      </Typography>
      <div className={cardsContainer}>
        {cardList.map(({ title, image, subTitle, textOnOver }) => (
          <Grid key={title} container alignItems="center" className={cardContainer}>
            <Grid
              id="onHoverHide"
              container
              direction="column"
              justify="center"
              alignItems="center"
              className={useStyles({ backgroundImage: image }).cardOnHoverHide}
            >
              <Typography className={cardTitle} variant="h3">{title}</Typography>
              <Typography className={cardParagraph} variant="h4">{subTitle}</Typography>
            </Grid>
            <Grid id="onHoverDisplay" className={cardOnHoverDisplay}>
              <Typography className={cardParagraphOnHover} variant="body2" color="primary">{textOnOver}</Typography>
            </Grid>
          </Grid>
        ))}
      </div>
    </Grid>
  );
};

export default WhatMakesUsUnique;
