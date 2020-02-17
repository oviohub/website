import React from 'react';
import { Link } from 'gatsby';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { getPageUrl } from '../Routes';
import { spacing, fontSizing, stylesBase } from './styledComponents';

import volunteersIcon from '../assets/icons/icon.volunteers.png';
import socialImpactIcon from '../assets/icons/icon.socialImpact.png';
import companiesIcon from '../assets/icons/icon.companies.png';

const cards = [
  {
    image: volunteersIcon,
    title: 'Volunteers',
    // eslint-disable-next-line max-len
    paragraph: 'Help change lives! Access to diverse catalog of open-source projects and find opportunities that match your skills and interests.',
    link: getPageUrl('VolunteersPage'),
  },
  {
    image: socialImpactIcon,
    title: 'Social Impact Organizations',
    paragraph: 'Showcase your tech for good projects, engage highly qualified contributors and accelerate your impact.',
    link: getPageUrl('SocialImpactPage'),
  },
  {
    image: companiesIcon,
    title: 'Companies',
    // eslint-disable-next-line max-len
    paragraph: 'Attract and meaningfully engage employees. Use our platform to build a purpose-driven culture and scale your skill-based volunteering program.',
    link: getPageUrl('CompaniesPage'),
  },
];

const { muiGridBlockContainer } = stylesBase;
const useStyles = makeStyles(theme => ({
  muiGridBlockContainer,
  cardContainer: {
    height: '520px',
    width: '330px',
    padding: spacing(3),
    marginRight: spacing(2),
    '&:hover': {
      border: '1px solid #DCDCDC',
      boxShadow: '0 30px 60px 0 rgba(0,0,0,0.05)',
    },
    [theme.breakpoints.down('xs')]: { textAlign: 'center' },
  },
  cardTextContainer: {
    textAlign: 'left',
  },
  imgComponent: { marginTop: spacing(2) },
  cardTitle: { margin: `${spacing(4)} 0px ${spacing(2)}` },
  cardParagraph: {
    fontSize: fontSizing(2.3), // to be close to 16px
    marginBottom: spacing(2),
    minHeight: '150px',
  },
  buttonContainer: {
    position: 'relative',
    bottom: '-4px',
  },
}));

const GetInvolved = () => {
  const {
    // eslint-disable-next-line no-shadow
    muiGridBlockContainer,
    cardContainer,
    cardTextContainer,
    imgComponent,
    cardTitle,
    cardParagraph,
    buttonContainer,
  } = useStyles();
  return (
    <Grid className={muiGridBlockContainer} container>
      <Typography variant="h2">
        Interested in maximizing your impact?
      </Typography>
      <Grid container justify="center">
        {cards.map(({ title, image, paragraph, link }) => (
          <Grid className={cardContainer} item key={title}>
            <img className={imgComponent} src={image} alt={title} />
            <Grid className={cardTextContainer}>
              <Typography className={cardTitle} variant="h4">{title}</Typography>
              <Typography className={cardParagraph} variant="body2">{paragraph}</Typography>
              <Grid className={buttonContainer}>
                <Link to={link} style={{ textDecoration: 'none' }}>
                  <Button>Learn More</Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default GetInvolved;
