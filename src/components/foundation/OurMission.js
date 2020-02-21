import React from 'react';
import { pick } from 'lodash';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles } from '@material-ui/core';
import classNames from 'classnames';

import { spacing, stylesBase } from '../styledComponents';

const missions = [
  {
    slug: 'open_source',
    title: (
      <>
        Open-source
        <br />
        for social impact
      </>
    ),
    // eslint-disable-next-line max-len
    description: 'Our team is here to help social impact organizations learn about existing technologies, and build new collaborative solutions. The Ovio Foundation will propose grants to nonprofits who are interested in open-sourcing their work. The grants can be associated with mentoring and access to technical expertise.',
  },
  {
    slug: 'cto_aaS',
    title: (
      <>
        CTO as
        <br />
        a service
      </>
    ),
    // eslint-disable-next-line max-len
    description: 'For social impact organization of all sizes, harnessing technology effectively can be a daunting task. Ovio engineers help make the right decisions early on and ensure the sustainability of their projects. We help build collaborative solutions to scale impact and attract talented volunteers.',
  },
];

const OurMission = ({ classes }) => (
  <div className={classes.muiGridBlockContainer}>
    <Typography variant="h2" color="secondary" gutterBottom>
      Our Mission
    </Typography>
    <Typography variant="subtitle2" color="secondary">
      The Ovio Foundation helps nonprofits, NGOs and social impact
      organizations through two programs that complement our tech volunteering
      efforts and capacity building in the social sector.
      <br />
      Our goal is to help your organization build up the capacity needed to
      make us useless.
    </Typography>

    <Grid className={classes.itemsContainer} container justify="space-around">
      {missions.map(({ slug, title, description }) => (
        <Grid
          key={slug}
          item
          xs={12}
          md={5}
          lg={4}
          className={classes.itemContainer}
        >
          <div className={classNames(slug, classes.titleContainer)}>
            <Typography variant="body2" color="primary">{title}</Typography>
          </div>

          <div className={classNames(slug, classes.descriptionContainer)}>
            <Typography color="primary">{description}</Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  </div>
);

OurMission.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  ...pick(stylesBase, ['muiGridBlockContainer']),

  itemsContainer: {
    marginTop: spacing(4),
    padding: spacing(0, 6),

    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },

  itemContainer: {
    margin: spacing(4, 0, 5),
    textAlign: 'center',
  },

  titleContainer: {
    padding: spacing(2, 3),

    '&.open_source': {
      backgroundColor: `${theme.palette.secondary.main}D0`,
    },

    '&.cto_aaS': {
      backgroundColor: theme.palette.text.secondary,
    },
  },

  descriptionContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: spacing(4),
    minHeight: 320,

    '&.open_source': {
      backgroundColor: theme.palette.secondary.main,
    },

    '&.cto_aaS': {
      backgroundColor: `${theme.palette.text.secondary}D0`,
    },

    [theme.breakpoints.down('sm')]: {
      minHeight: 'unset',
    },
  },
});

export default withStyles(styles)(OurMission);
