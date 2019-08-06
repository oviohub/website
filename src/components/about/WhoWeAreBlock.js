import React from 'react';
import { Grid, Typography, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { spacing, fontSizing, useStylesBase } from '../styledComponents';
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
    \n\nWhen I moved to San Francisco, I was shocked by local nonprofits struggling to leverage technology solutions.
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
    linkedInUrl: 'https://www.linkedin.com/company/oviohub/',
    aboutMe: `Ben is a data scientist and software engineer with experience working on web engineering and design,
    embedded systems, platform architecture, and machine learning. \n\nHe studied Physics, Mechanical Engineering
    (with a focus on adaptive control theory), and Computer Science at Dartmouth College and has spent the past 9 years
    in a variety of software and analyst positions, ranging from programming smart HVAC systems for high performance
    homes to developing data pipelines, storage, and tools for an education startup working with satellites.
    \nBen loves mountains and spends most of his free time skiing, rock climbing, and mountain biking.`,
    photo: photoBen,
  },
];

const imagesWidth = 371;
const useStyles = makeStyles({
  backgroundImg: { zIndex: -1 },
  subContainer: { width: `${imagesWidth}px` },
  cardContainer: { width: 'fit-content' },
  cardTextContainer: {
    padding: `0px ${spacing(2)}`,
    marginTop: '-68px',
  },
  title4: {
    fontSize: fontSizing(3),
    marginBottom: spacing(1),
  },
  textContainer: { marginTop: spacing(6) },
  icon: {
    margin: '0px',
    fontSize: '1.9rem',
  },
});

const OurValuesBlock = () => {
  const { muiGridBlockContainer, backgroundImg } = useStylesBase();
  const { subContainer, cardContainer, cardTextContainer, title4, textContainer, icon } = useStyles();
  return (
    <Grid className={muiGridBlockContainer} container>
      <Typography variant="h2">Who we are</Typography>
      <Grid container>
        {teamMembers.map(member => (
          <Grid item xs={4} key={member.name}>
            <Grid className={subContainer}>
              <Grid className={cardContainer}>
                <img className={backgroundImg} src={member.photo} alt={member.name} />
                <Grid className={cardTextContainer} container item xs={12} justify="space-between" alignItems="center">
                  <Grid>
                    <Typography className={title4} variant="h4" color="primary">{member.name}</Typography>
                    <Typography variant="caption" color="primary">{member.position}</Typography>
                  </Grid>
                  <a href={member.linkedInUrl} target="_blank" rel="noreferrer noopener">
                    <Icon component="img" className={icon} src={linkedinIcon} alt="linkedIn profil" />
                  </a>
                </Grid>
              </Grid>
              <Grid className={textContainer}>
                <Typography variant="body2">
                  {toFormattedText(member.aboutMe)}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default OurValuesBlock;