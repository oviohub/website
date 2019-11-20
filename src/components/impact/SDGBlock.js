import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import JsxParser from 'react-jsx-parser';
import { makeStyles } from '@material-ui/styles';

import { colors, spacing, fontSizing, stylesBase, useWidth } from '../styledComponents';

import markImage from '../../assets/impactPage/mark.jpg';
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

const sdgs = [
  {
    title: 'No Poverty',
    image: img1,
    textOnOver: 'End poverty in all its forms everywhere',
    color: '#E5243B',
  },
  {
    title: 'Zero Hunger',
    image: img2,
    textOnOver: 'End hunger, achieve food security and improved nutrition and promote sustainable agriculture',
    color: '#DDA63A',
  },
  {
    title: 'Good Health<br />& Well-being',
    image: img3,
    textOnOver: 'Ensure healthy lives and promote well-being for all at all ages',
    color: '#4C9F38',
  },
  {
    title: 'Quality<br />Education',
    image: img4,
    textOnOver: 'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all',
    color: '#C5192D',
  },
  {
    title: 'Gender<br />Equality',
    image: img5,
    textOnOver: 'Achieve gender equality and empower all women and girls',
    color: '#FF3A21',
  },
  {
    title: 'Clean Water<br />& Sanitation',
    image: img6,
    textOnOver: 'Ensure availability and sustainable management of water and sanitation for all',
    color: '#26BDE2',
  },
  {
    title: 'Affordable &<br />Clean Energy',
    image: img7,
    textOnOver: 'Ensure access to affordable, reliable, sustainable and modern energy for all',
    color: '#FCC30B',
  },
  {
    title: 'Decent Work &<br />Economic Growth',
    image: img8,
    // eslint-disable-next-line max-len
    textOnOver: 'Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all',
    color: '#A21942',
  },
  {
    title: 'Industry, Innovation<br />& Infrastructure',
    image: img9,
    // eslint-disable-next-line max-len
    textOnOver: 'Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation',
    color: '#FD6925',
  },
  {
    title: 'Reduced<br />Inequalities',
    image: img10,
    textOnOver: 'Reduce inequality within and among countries',
    color: '#DD1367',
  },
  {
    title: 'Sustainable Cities<br />& Communities',
    image: img11,
    textOnOver: 'Make cities and human settlements inclusive, safe, resilient and sustainable',
    color: '#FD9D24',
  },
  {
    title: 'Responsible<br />Consuption &<br />Production',
    image: img12,
    textOnOver: 'Ensure sustainable consumption and production patterns',
    color: '#BF8B2E',
  },
  {
    title: 'Climate Action',
    image: img13,
    textOnOver: 'Take urgent action to combat climate change and ',
    color: '#3F7E44',
  },
  {
    title: 'Life Below<br />Water',
    image: img14,
    textOnOver: 'Conserve and sustainably use the oceans, seas and marine resources for sustainable development',
    color: '#0A97D9',
  },
  {
    title: 'Life On Land',
    image: img15,
    // eslint-disable-next-line max-len
    textOnOver: 'Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss',
    color: '#56C02B',
  },
  {
    title: 'Peace, Justice &<br />Strong Institutions',
    image: img16,
    // eslint-disable-next-line max-len
    textOnOver: 'Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels',
    color: '#00689D',
  },
  {
    title: 'Partmerships<br />For The Goals',
    image: img17,
    // eslint-disable-next-line max-len
    textOnOver: 'Strengthen the means of implementation and revitalize the global partnership for sustainable development',
    color: '#19486A',
  },
];

const { muiGridBlockContainer, muiGridBackground, muiGridWithOnHoverText } = stylesBase;
const useStyles = makeStyles(theme => ({
  muiGridBlockContainer,
  muiGridBackground,
  muiGridWithOnHoverText,
  closing: {
    width: '86%',
    [theme.breakpoints.down('xs')]: { width: '100%' },
  },
  subtitle2: {
    marginBottom: spacing(5),
    fontWeight: 'bold',
  },
  cardsContainer: {
    margin: `0px 0px ${spacing(8)} -${spacing(2)}`,
  },
  cardContainer: {
    width: '170px',
    height: '170px',
    margin: '5px',
    boxShadow: '2px 2px 10px -4px black',
    [theme.breakpoints.down('xs')]: {
      width: '140px',
      height: '140px',
    },
  },
  cardOnHoverDisplay: { backgroundColor: colors.orange },
  cardOnHoverHide: ({ backgroundColor }) => ({ backgroundColor }),
  h4: {
    width: '90%',
    fontSize: fontSizing(2),
    lineHeight: '18px',
    textAlign: 'center',
    marginTop: '14px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
      width: '100%',
    },
  },
  imgComponent: {
    marginBottom: spacing(4),
    [theme.breakpoints.down('xs')]: { marginBottom: spacing(2) },
  },
  body1: {
    fontSize: '13px',
    lineHeight: 'normal',
    textAlign: 'center',
    padding: '6px',
    margin: 'auto',
    [theme.breakpoints.down('xs')]: {
      fontSize: '11px',
      padding: '2px',
    },
  },
  markStyle: {
    width: 'auto',
    left: '0px',
    marginTop: '-350px',
  },
}));

const SDGBlock = () => {
  const width = useWidth();
  const {
    // eslint-disable-next-line no-shadow
    muiGridBlockContainer,
    // eslint-disable-next-line no-shadow
    muiGridBackground,
    // eslint-disable-next-line no-shadow
    muiGridWithOnHoverText,
    subtitle2,
    closing,
    cardsContainer,
    cardContainer,
    cardOnHoverDisplay,
    h4,
    imgComponent,
    body1,
    markStyle,
  } = useStyles();
  return (
    <Grid className={muiGridBlockContainer} container>
      <img className={`${muiGridBackground} ${markStyle}`} src={markImage} alt="Our values" />
      <Typography variant="h2">
        The UN Sustainable Development Goals
      </Typography>
      <Grid container className={cardsContainer} justify={width === 'xs' ? 'center' : 'flex-start'}>
        {sdgs.map(({ title, image, textOnOver, color }) => (
          <Grid item className={`${muiGridWithOnHoverText} ${cardContainer}`} key={title}>
            <Grid
              className={`${useStyles({ backgroundColor: color }).cardOnHoverHide} onHoverHide`}
              container
              direction="column"
              alignItems="center"
              justify="space-between"
            >
              <Typography className={h4} variant="h4" color="primary">
                <JsxParser renderInWrapper={false} jsx={title} />
              </Typography>
              <img className={imgComponent} src={image} alt={title} />
            </Grid>
            <Grid className={`${cardOnHoverDisplay} onHoverDisplay`}>
              <Typography className={body1} variant="body1" color="primary">{textOnOver}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid className={closing}>
        <Typography className={subtitle2} variant="subtitle2">
          Engaging people through skill-based volunteering can take&nbsp;
          <a
            href="https://sustainabledevelopment.un.org/"
            style={{ color: 'inherit' }}
            target="_blank"
            rel="noreferrer noopener"
          >
            The UN Sustainable Development Goals
          </a>
          &nbsp;impact to the next level.
        </Typography>
        <Typography variant="body1">
          Ovio is playing a significant role in the “global partnership for the goals” (n°17) by encouraging
          cooperation between companies, citizens and social impact organizations, by scaling access to tech innovation
          and by encouraging everyone to make a positive impact on the world.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SDGBlock;
