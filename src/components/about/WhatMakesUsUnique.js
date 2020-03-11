import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { colors, contentWidthPixels, spacing, fontSizing, stylesBase } from '../styledComponents';

import image1 from '../../assets/aboutPage/makesUsUnique.block1.jpg';
import image2 from '../../assets/aboutPage/makesUsUnique.block2.jpg';
import image3 from '../../assets/aboutPage/makesUsUnique.block3.jpg';

const cardList = [
  {
    title: 'People',
    subTitle: 'Engage engineers',
    image: image1,
    // eslint-disable-next-line max-len
    textOnOver: 'Wether it’s one or one hundred contributors, open code is created and maintained by people who need to be rewarded for their contributions',
  },
  {
    title: 'Open-source',
    subTitle: 'Foster collaboration',
    image: image2,
    // eslint-disable-next-line max-len
    textOnOver: 'Open-source is part of every company, every technology, and every developers’ carrier. But with less than 2 maintainers and 1 contribution on average per project, we understand there is an urgent need to transition from consumers only to all contributors.',
  },
  {
    title: 'Task-based',
    subTitle: 'Scale contribution',
    image: image3,
    // eslint-disable-next-line max-len
    textOnOver: 'By allowing developers to find the right open source technology, project, task, we are transforming how the current OSS ecosystem rules.',
  },
];

const { muiGridBlockContainer, muiGridWithOnHoverText } = stylesBase;
const useStyles = makeStyles(theme => ({
  muiGridBlockContainer,
  muiGridWithOnHoverText,
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
    // eslint-disable-next-line no-shadow
    muiGridWithOnHoverText,
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
        We believe that the sustainability and reliability of open-source is about people, not code.
      </Typography>
      <div className={cardsContainer}>
        {cardList.map(({ title, image, subTitle, textOnOver }) => (
          <Grid key={title} container alignItems="center" className={`${muiGridWithOnHoverText} ${cardContainer}`}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              className={`${useStyles({ backgroundImage: image }).cardOnHoverHide} onHoverHide`}
            >
              <Typography className={cardTitle} variant="h3">{title}</Typography>
              <Typography className={cardParagraph} variant="h4">{subTitle}</Typography>
            </Grid>
            <Grid className={`${cardOnHoverDisplay} onHoverDisplay`}>
              <Typography className={cardParagraphOnHover} variant="body1" color="primary">{textOnOver}</Typography>
            </Grid>
          </Grid>
        ))}
      </div>
    </Grid>
  );
};

export default WhatMakesUsUnique;
