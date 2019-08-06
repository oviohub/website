import React from 'react';
import { Link } from 'gatsby';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { getPageUrl } from '../Routes';
import { spacing, useStylesBase, fontSizing } from './styledComponents';

import volunteersIcon from '../assets/icons/icon.volunteers.png';
import socialImpactIcon from '../assets/icons/icon.socialImpact.png';
import companiesIcon from '../assets/icons/icon.companies.png';

const cards = [
  {
    image: volunteersIcon,
    title: 'Volunteers',
    paragraph: 'Access a catalog of open-source projects and find opportunities that match your interests and skills.',
    link: getPageUrl('HomePage'),
  },
  {
    image: socialImpactIcon,
    title: 'Social impact organizations',
    paragraph: `As a social impact organization, you have the opportunity to showcase your Tech for Good projects
      and engage more qualified contributors.`,
    link: getPageUrl('HomePage'),
  },
  {
    image: companiesIcon,
    title: 'Companies',
    paragraph: `Attract and meaningfully engage employees with Explore. Use our platform to build a purpose-driven
      culture and scale your skill-based volunteering program.`,
    link: getPageUrl('HomePage'),
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
  cardTitle: { margin: `${spacing(4)} 0px ${spacing(2)}` },
  cardParagraph: {
    marginBottom: spacing(2),
    minHeight: '130px',
  },
  buttonContainer: {
    position: 'relative',
    bottom: '-4px',
  },
});

const GetInvolved = () => {
  const { muiGridBlockContainer } = useStylesBase();
  const { cardContainer, image, cardTitle, cardParagraph, buttonContainer } = useStyles();
  return (
    <Grid className={muiGridBlockContainer} container>
      <Typography variant="h2">
        Interested in Collaborating?
        <br />
        Get Involved!
      </Typography>
      <Grid container>
        {cards.map(card => (
          <Grid className={cardContainer} item key={card.title}>
            <img className={image} src={card.image} alt={card.title} />
            <Typography className={cardTitle} variant="h4">{card.title}</Typography>
            <Typography className={cardParagraph} variant="body2">{card.paragraph}</Typography>
            <Grid className={buttonContainer}>
              <Link to={card.link} style={{ textDecoration: 'none' }}>
                <Button>Learn More</Button>
              </Link>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default GetInvolved;