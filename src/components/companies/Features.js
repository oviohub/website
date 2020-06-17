import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { pick } from 'lodash';
import classNames from 'classnames';

import { stylesBase } from '../styledComponents';

import featureImage1 from '../../assets/companiesPage/feature.1.png';
import featureImage2 from '../../assets/companiesPage/feature.2.png';
import featureImage3 from '../../assets/companiesPage/feature.3.png';
import featureImage4 from '../../assets/companiesPage/feature.4.png';

const cardList = [
  {
    title: 'Collection',
    image: featureImage1,
    textOnOver: 'Display your most popular projects',
  },
  {
    title: 'Metrics',
    image: featureImage2,
    textOnOver: 'Track your project performance',
  },
  {
    title: 'Leaderboard',
    image: featureImage3,
    textOnOver: 'Gamify your OSS efforts',
  },
  {
    title: 'Issue Search',
    image: featureImage4,
    textOnOver: 'Highlight your priorities ',
  },
];

const Features = ({ classes }) => (
  <div className={classes.muiGridBlockContainer}>
    <Typography variant="h2">Features</Typography>

    <Grid container spacing={4} justify="center">
      {cardList.map(({ title, image, textOnOver }) => (
        <Grid key={title} container spacing={2} item xs={12} sm={8} md={6}>
          <Grid item xs={12}>
            <Typography align="center" variant="h4">
              {title}
            </Typography>
          </Grid>

          <Grid
            item
            className={classNames(
              classes.muiGridWithOnHoverText,
              classes.cardContent,
            )}
            component={Box}
            flexGrow={1}
            height={1}
          >
            <div className="onHoverHide">
              <img src={image} alt={title} className={classes.image} />
            </div>

            <Box
              justifyContent="center"
              alignItems="center"
              bgcolor="text.secondary"
              className="onHoverDisplay"
            >
              <Typography variant="body1" color="primary">
                {textOnOver}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      ))}
    </Grid>
  </div>
);

const styles = (theme) => ({
  ...pick(stylesBase, ['muiGridBlockContainer', 'muiGridWithOnHoverText']),

  cardContent: {
    height: 450,

    [theme.breakpoints.down('xs')]: {
      height: 250,
    },
  },

  image: {
    width: '100%',
    objectFit: 'contain',
  },
});

export default withStyles(styles)(Features);
