import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Grid, Typography, Button, withStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

import Layout from '../components/layouts/Layout';
import { spacing } from '../components/styledComponents';
import { getPageUrl } from '../Routes';

const NotFoundPage = ({ classes: { container, image } }) => (
  <Layout routeSlug="NotFound">
    <Grid className={container} container direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h1" color="secondary">
          Oops!
          <br />
          Page Not Found
        </Typography>
        <Typography variant="subtitle1" color="secondary">
          The page you are looking for doesn&apos;t exit or an error occurred!
        </Typography>
      </Grid>
      <Grid item>
        <img className={image} src="/404.webp" alt="404 Not Found" />
      </Grid>
      <Grid item>
        <Button component={Link} to={getPageUrl('HomePage')}>
          Home Page
        </Button>
      </Grid>
    </Grid>
  </Layout>
);

NotFoundPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  container: {
    position: 'absolute',
    left: 0,
    width: '100vw',
    height: '100vh',
    padding: spacing(4, 2),
    backgroundColor: grey[300],
  },

  image: {
    width: 500,
    margin: spacing(4, 0),
    [theme.breakpoints.down('md')]: { width: 250 },
  },
});

export default withStyles(styles)(NotFoundPage);
