import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { contentWidthPixels, spacing, fontSizing, stylesBase } from '../styledComponents';

import image1 from '../../assets/aboutPage/makesUsUnique.block1.jpg';
import image2 from '../../assets/aboutPage/makesUsUnique.block2.jpg';
import image3 from '../../assets/aboutPage/makesUsUnique.block3.jpg';

const cardList = [
  { title: 'Coding', subTitle: 'We engage engineers', image: image1 },
  { title: 'Open-source', subTitle: 'We foster collaboration', image: image2 },
  { title: 'Micro-volunteering', subTitle: 'we accelerate change', image: image3 },
];

const { muiGridBlockContainer } = stylesBase;
const useStyles = makeStyles({
  muiGridBlockContainer,
  cardsContainer: {
    display: 'flex',
    position: 'relative',
    width: contentWidthPixels,
    marginTop: spacing(11),
  },
  cardContainer: ({ backgroundImage }) => ({
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: `calc(${contentWidthPixels} / ${cardList.length})`,
    height: `calc(${contentWidthPixels} / ${cardList.length})`,
  }),
  cardTitle: { fontSize: fontSizing(6) },
  cardParagraph: {
    fontSize: fontSizing(2),
    marginTop: spacing(2),
    fontWeight: 'normal',
  },
});

const WhatMakesUsUnique = () => {
  // eslint-disable-next-line no-shadow
  const { muiGridBlockContainer, cardsContainer, cardTitle, cardParagraph } = useStyles();
  return (
    <Grid className={muiGridBlockContainer} container>
      <Typography variant="h2">What makes us unique?</Typography>
      <Typography variant="subtitle2">
        By focusing on coding, we transform micro-volunteering opportunities into long term impact.
      </Typography>
      <div className={cardsContainer}>
        {cardList.map(({ title, image, subTitle }) => (
          <Grid
            key={title}
            container
            alignItems="center"
            className={useStyles({ backgroundImage: image }).cardContainer}
          >
            <Grid container direction="column" justify="center" alignItems="center">
              <Typography className={cardTitle} variant="h3" color="primary">{title}</Typography>
              <Typography className={cardParagraph} variant="h4" color="primary">{subTitle}</Typography>
            </Grid>
          </Grid>
        ))}
      </div>
    </Grid>
  );
};

export default WhatMakesUsUnique;
