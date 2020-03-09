import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { isWidthDown } from '@material-ui/core/withWidth';
import { makeStyles } from '@material-ui/styles';

import { spacing, fontSizing, stylesBase, useWidth, ExternalLink } from '../styledComponents';
import illustration from '../../assets/impactPage/illustration.jpg';

const contributions = [
  {
    percentage: 15,
    label: 'Civic Tech',
    color: '#F47820',
  },
  {
    percentage: 12,
    label: 'Good Health and Well-being',
    color: '#FFD3B3',
  },
  {
    percentage: 10,
    label: 'Quality Education',
    color: '#acdbc2',
  },
  {
    percentage: 10,
    label: 'Humanitarian',
    color: '#919FB3',
  },
  {
    percentage: 53,
    label: 'Other',
    color: '#2F4058',
  },
];

const { muiGridBlockContainer } = stylesBase;
const useStyles = makeStyles(theme => ({
  muiGridBlockContainer,
  textsContainer: {
    paddingLeft: spacing(5),
    [theme.breakpoints.down('md')]: { paddingLeft: '0px' },
  },
  textContainer: {
    margin: `${spacing(2)} 0px`,
  },
  illustrationStyle: {
    width: '350px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: spacing(4),
      width: '300px',
    },
  },
  title2: {
    fontSize: spacing(5),
    margin: `0px 0px 0px ${spacing(2)}`,
  },
  caption: {
    fontFamily: 'Montserrat',
    marginLeft: spacing(10),
    width: '45%',
    fontSize: fontSizing(2),
    lineHeight: '18px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: spacing(2),
      width: '100%',
    },
  },
  pastilleContainer: ({ color }) => ({
    width: '10px',
    height: '10px',
    backgroundColor: color,
    borderRadius: '50%',
    margin: `auto ${spacing(2)}`,
  }),
}));

const OurContributions = () => {
  const width = useWidth();
  // eslint-disable-next-line no-shadow
  const { muiGridBlockContainer, illustrationStyle, textsContainer, textContainer, title2, caption } = useStyles();
  return (
    <Grid
      className={muiGridBlockContainer}
      container
      direction={isWidthDown('sm', width) ? 'column' : 'row'}
    >
      <Grid container justify={width === 'sm' ? 'flex-start' : 'center'} alignItems="center" item xs={12} md={5}>
        <img className={illustrationStyle} src={illustration} alt="" />
      </Grid>
      <Grid className={textsContainer} container alignItems="center" item xs={12} md={7}>
        <Typography className={title2} variant="h2">SDG Contribution</Typography>
        {contributions.map(({ label, percentage, color }) => (
          <Grid key={label} container className={textContainer}>
            <Grid className={useStyles({ color }).pastilleContainer} />
            <Grid item xs={10}>
              <Typography>
                <strong>{`${percentage}%`}</strong>
                &nbsp;
                {label}
              </Typography>
            </Grid>
          </Grid>
        ))}
        <Typography className={caption} variant="caption">
          % calculated from the contribution provided via
          {' '}
          <ExternalLink href="https://explore.ovio.org">Explore</ExternalLink>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default OurContributions;
