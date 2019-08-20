import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Icon } from '@material-ui/core';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import { makeStyles } from '@material-ui/styles';

import { spacing, fontSizing, stylesBase } from '../styledComponents';
import { toFormattedText } from '../../services/formatting';

import linkedinIcon from '../../assets/icons/icon.linkedin.orange.svg';
import photoTiphaine from '../../assets/aboutPage/photo.tiphaine.jpg';
import photoEric from '../../assets/aboutPage/photo.eric.jpg';
import photoBen from '../../assets/aboutPage/photo.ben.jpg';

const teamMembers = [
  {
    name: 'Tiphaine Boyer',
    position: 'Co-Founder & COO',
    linkedInUrl: 'https://www.linkedin.com/in/tiphaine-luciani-boyer-07628ab0/',
    aboutMe: `After receiving a Master of Art in Conflict, Security, and Development from Sussex University,
    I started my career as a project manager for multiple social impact organizations around the world such as UNHCR.
    \nWhen I moved to San Francisco, I was shocked by local nonprofits struggling to leverage technology solutions.
    That is why I decided to co-create Ovio, a tech volunteering platform. I am most passionate about refugee rights
    and women’s rights. My appetite for social justice oriented my early career towards humanitarian and social
    activities.`,
    photo: photoTiphaine,
  },
  {
    name: 'Eric Boucher',
    position: 'Co-Founder & CEO',
    linkedInUrl: 'https://www.linkedin.com/in/ericpboucher/',
    aboutMe: `After a Master of Science, Management Science and Engineering at Stanford University, I started my career
    as a software engineer in the Silicon Valley. My desire to code for good led me to work for a tech nonprofit,
    Bayes Impact. \n\nWitnessing the huge need for technology in the social impact sector, I decided to co-create Ovio,
    a tech volunteering platform. I am passionate about climate change and human rights. Since graduate school,
    I have engaged my time and skills to support these causes.`,
    photo: photoEric,
  },
  {
    name: 'Ben Peters',
    position: 'Director of Engineering',
    linkedInUrl: 'https://www.linkedin.com/in/ben-peters-19463329/',
    aboutMe: `Ben is a data scientist and software engineer with experience working on web engineering and design,
    embedded systems, platform architecture, and machine learning. \n\nHe studied Physics, Mechanical Engineering
    (with a focus on adaptive control theory), and Computer Science at Dartmouth College and has spent the past 9 years
    in a variety of software and analyst positions, ranging from programming smart HVAC systems for high performance
    homes to developing data pipelines, storage, and tools for an education startup working with satellites.
    \nBen loves mountains and spends most of his free time skiing, rock climbing, and mountain biking.`,
    photo: photoBen,
  },
];

const { muiGridBlockContainer } = stylesBase;
const useStyles = makeStyles(theme => ({
  muiGridBlockContainer,
  backgroundImg: stylesBase.backgroundImg,
  subContainer: {
    width: '370px', // image width
    [theme.breakpoints.down('md')]: {
      width: 'unset',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    [theme.breakpoints.down('sm')]: { flexDirection: 'column' },
  },
  cardContainer: { width: 'fit-content' },
  cardTextContainer: {
    padding: `0px ${spacing(2)}`,
    marginTop: '-68px',
  },
  title4: {
    fontSize: fontSizing(3),
    marginBottom: spacing(1),
  },
  textContainer: {
    marginTop: spacing(6),
    [theme.breakpoints.down('md')]: { margin: spacing(6) },
    [theme.breakpoints.down('xs')]: { margin: `${spacing(6)} ${spacing(3)}` },
  },
  icon: {
    margin: '0px',
    fontSize: '1.9rem',
  },
}));

const WhoWeAreBlock = ({ width }) => {
  const {
    // eslint-disable-next-line no-shadow
    muiGridBlockContainer,
    backgroundImg,
    subContainer,
    cardContainer,
    cardTextContainer,
    title4,
    textContainer,
    icon,
  } = useStyles();
  return (
    <Grid className={muiGridBlockContainer} container>
      <Typography variant="h2">Who we are</Typography>
      <Grid
        container
        direction={isWidthDown('md', width) ? 'column' : 'row'}
        wrap={isWidthDown('md', width) ? 'nowrap' : 'wrap'}
      >
        {teamMembers.map(({ name, photo, position, linkedInUrl, aboutMe }) => (
          <Grid item xs={12} lg={4} key={name}>
            <Grid className={subContainer}>
              <Grid className={cardContainer}>
                <img className={backgroundImg} src={photo} alt={name} />
                <Grid className={cardTextContainer} container item xs={12} justify="space-between" alignItems="center">
                  <Grid>
                    <Typography className={title4} variant="h4" color="primary">{name}</Typography>
                    <Typography variant="caption" color="primary">{position}</Typography>
                  </Grid>
                  <a href={linkedInUrl} target="_blank" rel="noreferrer noopener">
                    <Icon component="img" className={icon} src={linkedinIcon} alt="linkedIn profil" />
                  </a>
                </Grid>
              </Grid>
              <Grid className={textContainer}>
                <Typography variant="body2">
                  {toFormattedText(aboutMe)}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

WhoWeAreBlock.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(WhoWeAreBlock);
