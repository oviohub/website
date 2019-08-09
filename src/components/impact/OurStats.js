import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { spacing, fontSizing, stylesBase } from '../styledComponents';

import markImage from '../../assets/impactPage/mark.jpg';
import statMark from '../../assets/impactPage/statMark.png';

const stats = [
  {
    label: 'social impact organizations and',
    count: '145',
    style: { scale: 0.85, rotation: 90 },
  },
  {
    label: 'projects are listed on Explore, showcasing',
    count: '250',
    style: { scale: 0.85, rotation: 0 },
  },
  {
    label: 'contributors.',
    count: '3,700',
    style: { scale: 1, rotation: 200 },
  },
  {
    label: 'organizations, receive regular volunteering support.',
    count: '5',
    style: { scale: 0.6, rotation: 0 },
  },
];

const { muiGridBlockContainer, muiGridBackground } = stylesBase;
const useStyles = makeStyles({
  muiGridBlockContainer,
  muiGridBackground,
  subContainer: {
    marginBottom: spacing(4),
  },
  countContainer: ({ scale, rotation }) => ({
    backgroundImage: `url(${statMark})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: `calc(${scale} * 100px)`,
    height: `calc(${scale} * 100px)`,
    transform: `rotate(${rotation}deg)`,
  }),
  countText: ({ rotation }) => ({
    fontFamily: 'Caveat Brush',
    fontSize: fontSizing(6),
    fontWeight: 'normal',
    lineHeight: '56px',
    transform: `rotate(-${rotation}deg)`,
  }),
  labelContainer: { paddingLeft: spacing(2) },
  markStyle: {
    width: 'auto',
    left: '0px',
    marginTop: '-350px',
  },
});

const OurStats = () => {
  // eslint-disable-next-line no-shadow
  const { muiGridBlockContainer, muiGridBackground, subContainer, labelContainer, markStyle } = useStyles();
  return (
    <Grid className={muiGridBlockContainer} container>
      <img className={`${muiGridBackground} ${markStyle}`} src={markImage} alt="Our values" />
      <Grid item xs={5}>
        <Typography variant="h2">Ovio initiated over 300 hours of volunteering.</Typography>
      </Grid>
      <Grid item xs={6}>
        {stats.map(({ label, count, style }) => (
          <Grid key={label} className={subContainer} container alignItems="center">
            <Grid item xs={2} container justify="center">
              <Grid className={useStyles(style).countContainer} container alignItems="center" justify="center">
                <Typography className={useStyles(style).countText} variant="h4" color="textSecondary">
                  {count}
                </Typography>
              </Grid>
            </Grid>
            <Grid className={labelContainer} item xs={10}>
              <Typography>{label}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default OurStats;
