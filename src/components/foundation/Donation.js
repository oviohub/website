import React from 'react';
import PropTypes from 'prop-types';
import { pick } from 'lodash';
import { Typography, withStyles } from '@material-ui/core';

import Iframe from '../ui-library/Iframe';
import { stylesBase } from '../styledComponents';

const Donation = ({ classes }) => (
  <div className={classes.muiGridBlockContainer}>
    <Typography variant="h2" color="secondary" gutterBottom>
      Make a donation
    </Typography>

    <div>
      <div
        id="fc-embed-loader"
        className="fc-direct-embed-loader"
        style={{ top: '257.5px' }}
      />

      <div id="fc-embed-main-box" className="fc-embed-main-box">
        <Iframe
          title="Donation iframe by flipcause"
          id="fc-embed-frame"
          className={classes.iframe}
          src="https://www.flipcause.com/widget/NzAwMzE="
          scrolling="no"
        />
      </div>
    </div>
  </div>
);

Donation.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  ...pick(stylesBase, ['muiGridBlockContainer']),

  iframe: {
    height: '680px',
    width: '100%',
    border: '0px',
    margin: '0 auto 0 auto',

    [theme.breakpoints.down('sm')]: {
      height: '1060px',
    },
  },
});

export default withStyles(styles)(Donation);
