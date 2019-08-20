import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { colors, spacing, fontSizing, stylesBase } from '../styledComponents';
import { toFormattedText } from '../../services/formatting';

import img1 from '../../assets/impactPage/poverty.png';
import img2 from '../../assets/impactPage/hunger.png';
import img3 from '../../assets/impactPage/health.png';
import img4 from '../../assets/impactPage/education.png';
import img5 from '../../assets/impactPage/gender.png';
import img6 from '../../assets/impactPage/water.png';
import img7 from '../../assets/impactPage/energy.png';
import img8 from '../../assets/impactPage/growth.png';
import img9 from '../../assets/impactPage/infractructure.png';
import img10 from '../../assets/impactPage/inequalities.png';
import img11 from '../../assets/impactPage/communities.png';
import img12 from '../../assets/impactPage/consuption.png';
import img13 from '../../assets/impactPage/climate.png';
import img14 from '../../assets/impactPage/belowWater.png';
import img15 from '../../assets/impactPage/liveOnSand.png';
import img16 from '../../assets/impactPage/justice.png';
import img17 from '../../assets/impactPage/partnerships.png';

const cards = [
  {
    title: 'No Poverty',
    image: img1,
    textOnOver: 'Lorem ipsum dolor sit amet, lorem ipsum dolro sit emat Lorem ipsum dolor sit amet, lorem ipsum dolro',
  },
  {
    title: 'Zero Hunger',
    image: img2,
    textOnOver: 'Lorem ipsum dolor sit amet, lorem ipsum dolro sit emat Lorem ipsum dolor sit amet, lorem ipsum dolro',
  },
  {
    title: 'Good Health &\nWell-being',
    image: img3,
    textOnOver: 'Lorem ipsum dolor sit amet, lorem ipsum dolro sit emat Lorem ipsum dolor sit amet, lorem ipsum dolro',
  },
  {
    title: 'Quality\nEducation',
    image: img4,
    textOnOver: 'Lorem ipsum dolor sit amet, lorem ipsum dolro sit emat Lorem ipsum dolor sit amet, lorem ipsum dolro',
  },
  {
    title: 'Gender\nEquality',
    image: img5,
    textOnOver: 'Lorem ipsum dolor sit amet, lorem ipsum dolro sit emat Lorem ipsum dolor sit amet, lorem ipsum dolro',
  },
  {
    title: 'Clean Water\n& Sanitation',
    image: img6,
    textOnOver: 'Lorem ipsum dolor sit amet, lorem ipsum dolro sit emat Lorem ipsum dolor sit amet, lorem ipsum dolro',
  },
  {
    title: 'Affordable &\nClean Energy',
    image: img7,
    textOnOver: 'Lorem ipsum dolor sit amet, lorem ipsum dolro sit emat Lorem ipsum dolor sit amet, lorem ipsum dolro',
  },
  {
    title: 'Decent Work &\nEconomic Growth',
    image: img8,
    textOnOver: 'Lorem ipsum dolor sit amet, lorem ipsum dolro sit emat Lorem ipsum dolor sit amet, lorem ipsum dolro',
  },
  {
    title: 'Industry,\nInnovation &\nInfrastructure',
    image: img9,
    textOnOver: 'Lorem ipsum dolor sit amet, lorem ipsum dolro sit emat Lorem ipsum dolor sit amet, lorem ipsum dolro',
  },
  {
    title: 'Reduced\nInequalities',
    image: img10,
    textOnOver: 'Lorem ipsum dolor sit amet, lorem ipsum dolro sit emat Lorem ipsum dolor sit amet, lorem ipsum dolro',
  },
  {
    title: 'Sustainable Cities\n& Communities',
    image: img11,
    textOnOver: 'Lorem ipsum dolor sit amet, lorem ipsum dolro sit emat Lorem ipsum dolor sit amet, lorem ipsum dolro',
  },
  {
    title: 'Responsible\nConsuption &\nProduction',
    image: img12,
    textOnOver: 'Lorem ipsum dolor sit amet, lorem ipsum dolro sit emat Lorem ipsum dolor sit amet, lorem ipsum dolro',
  },
  {
    title: 'Climate Action',
    image: img13,
    textOnOver: 'Lorem ipsum dolor sit amet, lorem ipsum dolro sit emat Lorem ipsum dolor sit amet, lorem ipsum dolro',
  },
  {
    title: 'Life Below\nWater',
    image: img14,
    textOnOver: 'Lorem ipsum dolor sit amet, lorem ipsum dolro sit emat Lorem ipsum dolor sit amet, lorem ipsum dolro',
  },
  {
    title: 'Life On Land',
    image: img15,
    textOnOver: 'Lorem ipsum dolor sit amet, lorem ipsum dolro sit emat Lorem ipsum dolor sit amet, lorem ipsum dolro',
  },
  {
    title: 'Peace, Justice\n& Strong\nInstitutions',
    image: img16,
    textOnOver: 'Lorem ipsum dolor sit amet, lorem ipsum dolro sit emat Lorem ipsum dolor sit amet, lorem ipsum dolro',
  },
  {
    title: 'Partmerships\nFor The Goals',
    image: img17,
    textOnOver: 'Lorem ipsum dolor sit amet, lorem ipsum dolro sit emat Lorem ipsum dolor sit amet, lorem ipsum dolro',
  },
  {
    title: 'UNKNOW\nTITLE',
    image: img17,
    textOnOver: 'Lorem ipsum dolor sit amet, lorem ipsum dolro sit emat Lorem ipsum dolor sit amet, lorem ipsum dolro',
  },
];

const { muiGridBlockContainer } = stylesBase;
const useStyles = makeStyles({
  muiGridBlockContainer,
  thickLine: {
    width: '13px',
    height: '80%',
    backgroundColor: colors.orange,
  },
  subtitle2: {
    margin: `${spacing(10)} 0px ${spacing(5)}`,
    fontWeight: 'bold',
    width: '80%',
  },
  cardsContainer: { marginLeft: `-${spacing(2)}` },
  cardContainer: {
    width: '211px',
    height: '211px',
    margin: spacing(2),
    '&:hover #onHoverDisplay': { display: 'flex' },
    '&:hover #onHoverHide': { display: 'none' },
  },
  cardOnHoverDisplay: {
    height: '100%',
    width: '100%',
    display: 'none',
    backgroundColor: colors.darkBlue,
  },
  cardOnHoverHide: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.orange,
  },
  h4: {
    width: '80%',
    fontSize: fontSizing(2),
    lineHeight: '18px',
    textAlign: 'center',
    marginTop: spacing(4),
  },
  imgComponent: { marginBottom: spacing(4) },
  body2: {
    fontSize: fontSizing(2),
    padding: spacing(2),
  },
});

const OurSolution = () => {
  const {
    // eslint-disable-next-line no-shadow
    muiGridBlockContainer,
    thickLine,
    subtitle2,
    cardsContainer,
    cardContainer,
    cardOnHoverDisplay,
    cardOnHoverHide,
    h4,
    imgComponent,
    body2,
  } = useStyles();
  return (
    <Grid className={muiGridBlockContainer} container>
      <Grid item xs={1} container alignItems="center">
        <div className={thickLine} />
      </Grid>
      <Grid item xs={11} container justify="center" alignItems="center">
        <Typography variant="body2">
          Our solution redirects talent volunteering towards useful actions. Talented developers can use their
          most valuable and powerful skills to support the causes they care about. By enabling organizations
          accessing such expensive resources, Ovio empowers them to advance their mission. Being able to
          measure the scope of our actions sounds essential to improve our user-oriented services and inform
          stakeholders about our positive changes in the world.
        </Typography>
      </Grid>
      <Typography className={subtitle2} variant="subtitle2">
        Engaging people through skill-based volunteering can take The UN Sustainable Development Goals impact to
        the next level.
      </Typography>
      <Grid container className={cardsContainer}>
        {cards.map(({ title, image, textOnOver }) => (
          <Grid item className={cardContainer} key={title}>
            <Grid
              id="onHoverHide"
              className={cardOnHoverHide}
              container
              direction="column"
              alignItems="center"
              justify="space-between"
            >
              <Typography className={h4} variant="h4" color="primary">{toFormattedText(title)}</Typography>
              <img className={imgComponent} src={image} alt={title} />
            </Grid>
            <Grid id="onHoverDisplay" className={cardOnHoverDisplay}>
              <Typography className={body2} variant="body2" color="primary">{textOnOver}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default OurSolution;
