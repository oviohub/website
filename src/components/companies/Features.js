import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { pick } from 'lodash';

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
    textOnOver: 'highlight your priorities ',
  },
];

const useStyles = makeStyles(() => ({
  ...pick(stylesBase, ['muiGridBlockContainer', 'muiGridWithOnHoverText']),

  cardOnHoverHide: ({ backgroundImage }) => ({
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
  }),
}));

const Features = () => {
  const { muiGridBlockContainer, muiGridWithOnHoverText } = useStyles();

  return (
    <div className={muiGridBlockContainer}>
      <Typography variant="h2">Features</Typography>

      <Box m="auto" width="70%">
        <Grid container spacing={4} justify="center">
          {cardList.map(({ title, image, textOnOver }) => (
            <Grid
              key={title}
              container
              direction="column"
              spacing={2}
              item
              xs={6}
            >
              <Grid item>
                <Typography align="center" variant="h4">
                  {title}
                </Typography>
              </Grid>

              <Grid
                item
                className={muiGridWithOnHoverText}
                component={Box}
                flexGrow={1}
              >
                <Box className="onHoverHide">
                  <Box component="img" width="100%" src={image} alt={title} />
                </Box>

                <Box
                  display="flex"
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
      </Box>
    </div>
  );
};

export default Features;
