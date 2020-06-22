import React from 'react';
import PropTypes from 'prop-types';
import { pick } from 'lodash';
import { Grid, Typography, Button, withStyles } from '@material-ui/core';

import Iframe from '../ui-library/Iframe';
import { stylesBase, spacing } from '../styledComponents';

const buttons = [
  { title: 'Browse Projects', href: 'https://explore.ovio.org/projects' },
  // { title: 'Browse Tasks', href: 'https://explore.ovio.org/issues' },
];

const ExploreProjects = ({ classes }) => (
  <Grid className={classes.muiGridBlockContainer} container direction="column">
    <Typography variant="h2" color="secondary">
      Open Source for All
    </Typography>
    <Typography variant="subtitle2" color="secondary">
      Discover a selection of 300+ open-source projects and start contributing
      to great repos now!
    </Typography>

    <div className={classes.buttonsContainer}>
      {buttons.map(({ title, href }) => (
        <Button
          key={title}
          component="a"
          target="_blank"
          href={href}
          className={classes.buttons}
        >
          {title}
        </Button>
      ))}
    </div>

    <Iframe
      src="https://explore.ovio.org/collection/featured/projects/iframe/"
      className={classes.iframe}
      scrolling="no"
      title="Explore projects slider"
    />
  </Grid>
);

ExploreProjects.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = () => ({
  ...pick(stylesBase, ['muiGridBlockContainer', 'muiButtonLarge']),
  iframe: {
    marginTop: spacing(4),
    border: 'none',
    height: '520px',
    width: '100%',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  buttons: {
    margin: spacing(3, 2, 0),
  },
});

export default withStyles(styles)(ExploreProjects);
