import React from 'react';
import { pick } from 'lodash';
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
    backgroundImage: ourVisionBackground,
    // eslint-disable-next-line max-len
    paragraph: 'We are building a more accessible and inclusive open source ecosystem where every line of code makes a difference.',
  },
  {
    title: 'Our Mission',
    backgroundImage: ourMissionBackground,
    // eslint-disable-next-line max-len
    paragraph: 'Ovio empowers millions of developers to become active open source contributors. We want to make sure that every developer can contribute with their skillsto meaningful opportunities',
  },
];

const useStyles = makeStyles(theme => ({
  ...pick(stylesBase, ['muiGridBackground', 'muiGridFullScreen']),
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
    width: 400,
    height: 400,
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
    margin: `${spacing(8)} 0px ${spacing(4)}`,
    minHeight: '120px',
    [theme.breakpoints.down('md')]: { marginBottom: spacing(3) },
    [theme.breakpoints.down('sm')]: { minHeight: '60px' },
  },
}));

const Intro = () => {
  const {
    muiGridBackground,
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
        {cardList.map(({ title, backgroundImage, paragraph }, index) => (
          <Grid item className={useStyles({ isEven: index % 2 }).cardContainer} key={title}>
            <Hidden smDown>
              <img className={muiGridBackground} src={backgroundImage} alt={title} />
            </Hidden>
            <div className={cardContent}>
              <Typography variant="h3" color={index % 2 ? 'primary' : 'textSecondary'}>{title}</Typography>
              <Typography className={cardSubtitle} variant="body1" color={index % 2 ? 'secondary' : 'primary'}>
                {paragraph}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Intro;
