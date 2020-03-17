import React from 'react';
import { Grid, Typography, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { spacing, menuHeightOffset, colors, stylesBase } from '../styledComponents';
import hero from '../../assets/aboutPage/hero.jpg';
import heroMobile from '../../assets/aboutPage/hero.mobile.jpg';
import ourVisionBackground from '../../assets/aboutPage/ourVisionBackground.jpg';
import ourMissionBackground from '../../assets/aboutPage/ourMissionBackground.jpg';

const cardList = [
  {
    title: 'Our Vision',
    // eslint-disable-next-line max-len
    subTitle: 'We are building a more accessible and inclusive open source ecosystem where every line of code makes a difference.',
    backgroundImage: ourVisionBackground,
    // eslint-disable-next-line max-len
    paragraph: 'We dream of a world where open technology, technology access and technology diversity are democratized.',
  },
  {
    title: 'Our Mission',
    subTitle: 'We are creating a scalable and inclusive open source ecosystem.',
    backgroundImage: ourMissionBackground,
    // eslint-disable-next-line max-len
    paragraph: 'We are building a more accessible open source ecosystem, empowering millions of developers to become active contributors.',
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
    [theme.breakpoints.down('xs')]: {
      height: '330px',
      backgroundSize: 'contain',
      backgroundImage: `url(${heroMobile})`,
      backgroundPositionY: 'top',
    },

  },
  title1: { marginTop: spacing(-7) },
  cardContainer: ({ isEven }) => ({
    width: '400px',
    height: '560px',
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
    padding: spacing(5),
    [theme.breakpoints.down('md')]: { padding: spacing(4) },
  },
  cardSubtitle: {
    lineHeight: '30px',
    letterSpacing: '0.5px',
    margin: `${spacing(5)} 0px ${spacing(4)}`,
    minHeight: '120px',
    [theme.breakpoints.down('md')]: { marginBottom: spacing(3) },
    [theme.breakpoints.down('sm')]: { minHeight: '60px' },
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
    </Grid>
  );
};

export default Intro;
