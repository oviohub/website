import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { spacing, useStylesBase, fontSizing } from '../styledComponents';
import cardImage1 from '../../assets/homePage/CardImage_Volunteers.jpg';
import cardImage2 from '../../assets/homePage/CardImage_SocialImpact.jpg';
import cardImage3 from '../../assets/homePage/CardImage_Companies.jpg';

const cards = [
  {
    image: { src: cardImage1, alt: 'Volunteers' },
    title: 'Volunteers',
    paragraph: 'Access a catalog of open-source projects and find opportunities that match your interests and skills.',
  },
  {
    image: { src: cardImage2, alt: 'Social impact organizations' },
    title: 'Social impact organizations',
    // eslint-disable-next-line max-len
    paragraph: 'As a social impact organization, you have the opportunity to showcase your Tech for Good projects and engage more qualified contributors.',
  },
  {
    image: { src: cardImage3, alt: 'Companies' },
    title: 'Companies',
    // eslint-disable-next-line max-len
    paragraph: 'Attract and meaningfully engage employees with Explore. Use our platform to build a purpose-driven culture and scale your skill-based volunteering program.',
  },
];

const useStyles = makeStyles({
  cardContainer: {
    height: '520px',
    width: '330px',
    padding: spacing(3),
    '&:hover': {
      border: '1px solid #DCDCDC',
      boxShadow: '0 30px 60px 0 rgba(0,0,0,0.05)',
    },
  },
  image: { marginTop: spacing(2) },
  cardTitle: {
    margin: `${spacing(4)} 0px ${spacing(2)}`,
  },
  cardParagraph: {
    fontSize: fontSizing(2.3), // to be close to 16px
    marginBottom: spacing(2),
    minHeight: '130px',
  },
  buttonContainer: {
    position: 'relative',
    bottom: '-4px',
  },
});

const GetInvolved = () => {
  const baseClasses = useStylesBase();
  const { cardContainer, image, cardTitle, cardParagraph, buttonContainer } = useStyles();
  return (
    <Grid className={baseClasses.muiGridBlockContainer} container>
      <Grid className={baseClasses.muiGridContent}>
        <Typography variant="h2">
          Interested in Collaborating?
          <br />
          Get Involved!
        </Typography>
        <Grid container>
          {cards.map(card => (
            <Grid className={cardContainer} item key={card.title}>
              <img className={image} src={card.image.src} alt={card.image.alt} />
              <Typography className={cardTitle} variant="h4">{card.title}</Typography>
              <Typography className={cardParagraph} variant="body1">{card.paragraph}</Typography>
              <Grid className={buttonContainer}><Button>Learn More</Button></Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GetInvolved;
