import React from 'react';
import { pick } from 'lodash';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Iframe from '../ui-library/Iframe';
import { ExternalLink, stylesBase, spacing, colors } from '../styledComponents';

const useStyles = makeStyles(() => ({
  ...pick(stylesBase, ['muiGridBlockContainer', 'muiButtonLarge']),
  iframe: {
    marginTop: spacing(4),
    border: 'none',
    height: '520px',
    width: '100%',
  },
  buttonContainer: {
    marginTop: spacing(7),
  },
}));

const ExploreProjects = () => {
  const { muiGridBlockContainer, muiButtonLarge, iframe, buttonContainer } = useStyles();

  return (
    <Grid className={muiGridBlockContainer} container direction="column">
      <Typography variant="h2" color="secondary">Open Source for All</Typography>
      <Typography variant="subtitle2" color="secondary">Discover a selection of 500+ open-source projects and start contributing to great repos now! </Typography>
      <Iframe
        src="https://explore.ovio.org/iframe/projects/featured/"
        className={iframe}
        scrolling="no"
        title="Explore projects slider"
      />
      <Grid container justify="center" className={buttonContainer}>
        <ExternalLink href="https://explore.ovio.org" noDecoration>
          <Button className={muiButtonLarge}>Browse More Projects</Button>
        </ExternalLink>
      </Grid>
    </Grid>
  );
};

export default ExploreProjects;
