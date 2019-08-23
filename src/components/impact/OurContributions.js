import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { spacing, fontSizing, stylesBase } from '../styledComponents';
import camembert from '../../assets/impactPage/camembert.png';

const contributions = [
  {
    percentage: 30,
    label: 'Quality Education',
    color: '#F47820',
  },
  {
    percentage: 23,
    label: 'No Poverty',
    color: '#FFA667',
  },
  {
    percentage: 19,
    label: 'Zero Hunger',
    color: '#FFD3B3',
  },
  {
    percentage: 18,
    label: 'Peace Justice and Strong Institutions',
    color: '#919FB3',
  },
  {
    percentage: 10,
    label: 'others',
    color: '#2F4058',
  },
];

const { muiGridBlockContainer } = stylesBase;
const useStyles = makeStyles({
  muiGridBlockContainer,
  title2: {
    fontSize: spacing(5),
    margin: `0px 0px 0px ${spacing(2)}`,
  },
  caption: {
    fontFamily: 'Montserrat',
    marginLeft: spacing(10),
    width: '60%',
    fontSize: fontSizing(2),
    lineHeight: '18px',
  },
  pastilleContainer: ({ color }) => ({
    width: '10px',
    height: '10px',
    backgroundColor: color,
    borderRadius: '50%',
    margin: `auto ${spacing(2)}`,
  }),
});

const OurContributions = () => {
  // eslint-disable-next-line no-shadow
  const { muiGridBlockContainer, title2, caption } = useStyles();
  return (
    <Grid className={muiGridBlockContainer} container>
      <Grid item xs={6} container justify="center" alignItems="center">
        <img src={camembert} alt="" />
      </Grid>
      <Grid item xs={6} container alignItems="center">
        <Typography className={title2} variant="h2">SDG contribution:</Typography>
        {contributions.map(({ label, percentage, color }) => (
          <Grid key={label} container>
            <Grid className={useStyles({ color }).pastilleContainer} />
            <Grid item xs={11}>
              <Typography>
                <strong>{`${percentage}%`}</strong>
                &nbsp;
                {label}
              </Typography>
            </Grid>
          </Grid>
        ))}
        <Typography className={caption} variant="caption">
          % calculated from the contribution provided via Explore and other matching
        </Typography>
      </Grid>
    </Grid>
  );
};

export default OurContributions;
