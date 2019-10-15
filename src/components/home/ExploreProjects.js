import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Iframe from '../ui-library/Iframe';
import { stylesBase, spacing } from '../styledComponents';

const { muiGridBlockContainer } = stylesBase;
const useStyles = makeStyles(() => ({
  muiGridBlockContainer,
  iframe: {
    marginTop: spacing(4),
    border: 'none',
    height: '520px',
    width: '100%',
  },
  spinner: {
    marginTop: spacing(6),
    textAlign: 'center',
  },
}));

const ExploreProjects = () => {
  // eslint-disable-next-line no-shadow
  const { muiGridBlockContainer, iframe } = useStyles();

  return (
    <Grid className={muiGridBlockContainer} container direction="column">
      <Typography variant="h2" color="secondary">Open Source for Good</Typography>
      <Typography variant="subtitle2" color="secondary">
        Discover a selection of open-source projects making a real difference. Through our platform Explore, you can
        leverage your skills and help maximize their impact.
      </Typography>
      <Iframe
        src="https://explore.ovio.org/iframe/projects/featured/"
        className={iframe}
        title="Explore projects slider"
      />
    </Grid>
  );
};

export default ExploreProjects;
