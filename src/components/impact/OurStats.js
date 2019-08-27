import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { isWidthDown } from '@material-ui/core/withWidth';
import { makeStyles } from '@material-ui/styles';

import { spacing, fontSizing, stylesBase, MetricContainer, useWidth } from '../styledComponents';

const stats = [
  {
    label: 'Social impact organizations and',
    count: '145',
    style: { scale: 0.8, rotation: 90 },
  },
  {
    label: 'projects are listed on Explore.',
    count: '250',
    style: { scale: 0.8, rotation: 0 },
  },
  {
    label: 'Organizations receive regular volunteering support.',
    count: '5',
    style: { scale: 0.6, rotation: 0 },
  },
];

const { muiGridBlockContainer } = stylesBase;
const useStyles = makeStyles({
  container: {
    ...muiGridBlockContainer,
    margin: `${spacing(16)} 0px`,
  },
  blockTitle: { marginTop: '0px' },
  subContainer: {
    marginBottom: spacing(4),
  },
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
  const width = useWidth();
  // eslint-disable-next-line no-shadow
  const { container, blockTitle, subContainer, labelContainer, labelText } = useStyles();
  return (
    <Grid className={container} container direction={isWidthDown('sm', width) ? 'column' : 'row'}>
      <Grid item xs={12} md={5}>
        <Typography className={blockTitle} variant="h2">
          Since 2018, Ovio initiated over 500 hours of volunteering.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        {stats.map(({ label, count, style }) => (
          <Grid key={label} className={subContainer} container alignItems="center">
            <Grid item xs={3} container justify="center">
              <MetricContainer {...style} container alignItems="center" justify="center">
                <Typography className={useStyles(style).countText} variant="h4" color="textSecondary">
                  {count}
                </Typography>
              </MetricContainer>
            </Grid>
            <Grid className={labelContainer} item xs={9}>
              <Typography className={labelText} variant="body1">{label}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default OurStats;
