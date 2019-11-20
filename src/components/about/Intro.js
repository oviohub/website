import React from 'react';
import { Link } from 'gatsby';
import { Grid, Typography, Hidden, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { getPageUrl } from '../../Routes';
import { spacing, menuHeightOffset, colors, stylesBase } from '../styledComponents';
import hero from '../../assets/aboutPage/hero.jpg';
import ourVisionBackground from '../../assets/aboutPage/ourVisionBackground.jpg';
import ourMissionBackground from '../../assets/aboutPage/ourMissionBackground.jpg';

const cardList = [
  {
    title: 'Our Vision',
    // eslint-disable-next-line max-len
    subTitle: 'We are building the world’s leading tech-for-good movement where every line of code makes a difference.',
    backgroundImage: ourVisionBackground,
    // eslint-disable-next-line max-len
    paragraph: 'We dream of a world where we improve technology and technology access for social agents by helping organizations to be more collaborative in the creation and scaling of their solutions.',
  },
  {
    title: 'Our Mission',
    subTitle: 'We are creating a scalable and inclusive tech-for-good ecosystem.',
    backgroundImage: ourMissionBackground,
    // eslint-disable-next-line max-len
    paragraph: 'Ovio is developing the ecosystem for digital collaboration and cooperation toward social impact. Bringing together tech for good solutions and talents, we help do-gooders efficiently turn their world-changing ideas into reality and empower changemakers with resources to implement sustainable tech-solutions.',
  },
];

const { muiGridBackground, muiGridFullScreen } = stylesBase;
const useStyles = makeStyles(theme => ({
  muiGridBackground,
  muiGridFullScreen,
  mainContainer: { padding: `${menuHeightOffset}px 0px 0px` },
  headerContainer: {
    height: '360px',
    backgroundImage: `url(${hero})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  title1: { marginTop: spacing(-7) },
  cardContainer: ({ isEven }) => ({
    width: '470px',
    height: '620px',
    marginRight: isEven ? '0px' : spacing(4),
    boxShadow: '0 20px 30px 0 rgba(0,0,0,0.1)',
    marginTop: spacing(-7),
    zIndex: 2,
    [theme.breakpoints.down('md')]: { width: '370px' },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      height: 'auto',
      marginTop: isEven ? spacing(4) : spacing(-7),
      marginRight: '0px',
      backgroundColor: isEven ? colors.orange : colors.darkBlue,
    },
  }),
  cardContent: {
    padding: spacing(7),
    [theme.breakpoints.down('md')]: { padding: spacing(4) },
  },
  cardSubtitle: {
    fontStyle: 'italic',
    lineHeight: '30px',
    letterSpacing: '0.5px',
    margin: `${spacing(5)} 0px ${spacing(8)}`,
    minHeight: '70px',
    [theme.breakpoints.down('md')]: {
      minHeight: '90px',
      marginBottom: spacing(3),
    },
  },
  buttonContainer: {
    marginTop: spacing(10),
  },
}));

const Intro = () => {
  const {
    // eslint-disable-next-line no-shadow
    muiGridBackground,
    // eslint-disable-next-line no-shadow
    muiGridFullScreen,
    mainContainer,
    headerContainer,
    title1,
    cardContent,
    cardSubtitle,
    buttonContainer,
  } = useStyles();
  return (
    <Grid className={mainContainer} container justify="center">
      <Grid>
        <Grid className={`${muiGridFullScreen} ${headerContainer}`} container justify="center" alignItems="center">
          <Typography variant="h1" className={title1}>About</Typography>
        </Grid>
      </Grid>
      <Grid container justify="center">
        {cardList.map(({ title, backgroundImage, subTitle, paragraph }, index) => (
          <Grid className={useStyles({ isEven: index % 2 }).cardContainer} key={title}>
            <Hidden smDown>
              <img className={muiGridBackground} src={backgroundImage} alt={subTitle} />
            </Hidden>
            <Grid className={cardContent}>
              <Typography variant="h3" color={index % 2 ? 'primary' : 'textSecondary'}>{title}</Typography>
              <Typography variant="h4" className={cardSubtitle} color={index % 2 ? 'secondary' : 'primary'}>
                {subTitle}
              </Typography>
              <Typography variant="body1" color={index % 2 ? 'secondary' : 'primary'}>{paragraph}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid className={buttonContainer}>
        <Link to={getPageUrl('ImpactPage')} style={{ textDecoration: 'none' }}>
          <Button>Learn more about our impact</Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Intro;
