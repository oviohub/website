import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { spacing, fontSizing, stylesBase } from '../styledComponents';

import statMark from '../../assets/impactPage/statMark.svg';

const stats = [
  {
    label: 'social impact organizations and',
    count: '145',
    style: { scale: 0.8, rotation: 90 },
  },
  {
    label: 'projects are listed on Explore, showcasing',
    count: '250',
    style: { scale: 0.8, rotation: 0 },
  },
  {
    label: 'contributors.',
    count: '3,700',
    style: { scale: 0.9, rotation: 200 },
  },
  {
    label: 'organizations, receive regular volunteering support.',
    count: '5',
    style: { scale: 0.6, rotation: 0 },
  },
];

const { muiGridBlockContainer } = stylesBase;
const useStyles = makeStyles({
  muiGridBlockContainer,
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
  labelText: { fontWeight: 500 },
});

const OurStats = () => {
  // eslint-disable-next-line no-shadow
  const { muiGridBlockContainer, subContainer, labelContainer, labelText } = useStyles();
  return (
    <Grid className={muiGridBlockContainer} container>
      <Grid item xs={5}>
        <Typography variant="h2">Since 2018, Ovio initiated over 500 hours of volunteering.</Typography>
      </Grid>
      <Grid item xs={6}>
        {stats.map(({ label, count, style }) => (
          <Grid key={label} className={subContainer} container alignItems="center">
            <Grid item xs={3} container justify="center">
              <Grid className={useStyles(style).countContainer} container alignItems="center" justify="center">
                <Typography className={useStyles(style).countText} variant="h4" color="textSecondary">
                  {count}
                </Typography>
              </Grid>
            </Grid>
            <Grid className={labelContainer} item xs={9}>
              <Typography className={labelText} variant="body2">{label}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default OurStats;
