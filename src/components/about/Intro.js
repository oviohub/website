import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { spacing, fontSizing, menuHeightOffset, useStylesBase } from '../styledComponents';
import ericPitching from '../../assets/aboutPage/ericPitching.jpg';
import ourVisionBackground from '../../assets/aboutPage/ourVisionBackground.jpg';
import ourMissionBackground from '../../assets/aboutPage/ourMissionBackground.jpg';

const cardList = [
  {
    title: 'Our Vision',
    subTitle: 'Ovio aims to be a catalyst of the Tech for Good ecosystem.',
    backgroundimage: ourVisionBackground,
    // eslint-disable-next-line max-len
    paragraph: 'We believe that technology should be in service of humanity both in terms of development and inclusion. Our vision is to improve the way technology interacts with social change agents.',
  },
  {
    title: 'Our Mission',
    subTitle: 'We are creating a scalable and inclusive Tech for Good ecosystem.',
    backgroundimage: ourMissionBackground,
    // eslint-disable-next-line max-len
    paragraph: 'Ovio is developing the ecosystem for digital collaboration and cooperation towards social impact. Bringing together tech for good solutions and talents, we help do-gooders efficiently turn world-changing ideas into reality and empower changemakers with resources to implement sustainable tech-solutions.',
  },
];

const useStyles = makeStyles({
  mainContainer: {
    padding: `${menuHeightOffset}px 0px 0px`,
  },
  headerContainer: {
    height: '360px',
    backgroundImage: `url(${ericPitching})`,
    backgroundPosition: 'center',
    width: 'calc(100vw - 15px)',
  },
  title1: { marginTop: spacing(-7) },
  cardContainer: props => ({
    width: '470px',
    height: '620px',
    marginRight: props.withmargin ? '0px' : spacing(4),
    boxShadow: '0 20px 30px 0 rgba(0,0,0,0.1)',
    marginTop: spacing(-7),
    zIndex: 2,
  }),
  cardContent: {
    padding: spacing(7),
  },
  cardSubtitle: {
    fontFamily: 'Montserrat',
    fontSize: fontSizing(3),
    fontStyle: 'italic',
    fontWeight: '500',
    lineHeight: '30px',
    letterSpacing: '0.5px',
    margin: `${spacing(5)} 0px ${spacing(8)}`,
    minHeight: '90px',
  },
});

const Intro = () => {
  const { muiGridBackground } = useStylesBase();
  const { mainContainer, headerContainer, title1, cardContent, cardSubtitle } = useStyles();
  return (
    <Grid className={mainContainer} container justify="center">
      <Grid>
        <Grid className={headerContainer} container justify="center" alignItems="center">
          <Typography variant="h1" className={title1}>About</Typography>
        </Grid>
      </Grid>
      <Grid container justify="center">
        {cardList.map((card, index) => (
          <Grid className={useStyles({ withmargin: index }).cardContainer} key={card.title}>
            <img className={muiGridBackground} src={card.backgroundimage} alt={card.subTitle} />
            <Grid className={cardContent}>
              <Typography variant="h3" color={index ? 'primary' : 'textSecondary'}>{card.title}</Typography>
              <Typography className={cardSubtitle} color={index ? 'secondary' : 'primary'}>{card.subTitle}</Typography>
              <Typography variant="body1" color={index ? 'secondary' : 'primary'}>{card.paragraph}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Intro;
