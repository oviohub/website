import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { contentWidthPixels, stylesBase, colors, spacing } from '../styledComponents';

import markImage from '../../assets/modelPage/companies.whyVolunteering.mark.jpg';

const reasons = [
  'It increases employee engagement and retention rates by providing a better working environment;',
  'It creates experience-based skills development, from leadership management to advanced machine learning;',
  'It answers the current workforce demand for purpose-driven work (91% of millennials);',
  "It expands corporate philanthropy's reach and multiplies impact.",
];

const { muiGridBlockContainer } = stylesBase;
const useStyles = makeStyles({
  muiGridBlockContainer,
  container: {
    width: 'calc(100vw - 8px)',
    left: 'calc(-1 * (100vw - 100%) / 2)',
    position: 'relative',
    backgroundImage: `url(${markImage})`,
    backgroundSize: 'cover',
  },
  blockContainer: {
    width: contentWidthPixels,
    marginTop: spacing(15),
    zIndex: 1,
  },
  reasonsContainer: { marginTop: spacing(4) },
  reasonContainer: { margin: `${spacing(7)} ${spacing(4)}` },
  body2: { fontWeight: '500' },
  thickLine: {
    width: '13px',
    height: '75px',
    backgroundColor: colors.orange,
  },
});

const WhyVolunteering = () => {
  const {
    // eslint-disable-next-line no-shadow
    muiGridBlockContainer,
    container,
    blockContainer,
    reasonsContainer,
    reasonContainer,
    body2,
    thickLine,
  } = useStyles();
  return (
    <Grid className={container} container justify="center">
      <Grid className={`${muiGridBlockContainer} ${blockContainer}`} container>
        <Typography variant="h2">Why skill-based volunteering?</Typography>
        <Grid className={reasonsContainer} container justify="center">
          {reasons.map(reason => (
            <Grid key={reason} className={reasonContainer} container item xs={5}>
              <Grid item xs={2} container justify="center" alignItems="center">
                <div className={thickLine} />
              </Grid>
              <Grid item xs={9} container justify="center" alignItems="center">
                <Typography className={body2} variant="body2">{reason}</Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WhyVolunteering;
