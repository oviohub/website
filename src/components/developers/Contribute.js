import React from 'react';
import { Grid, Box, Typography, withStyles } from '@material-ui/core';
import { pick } from 'lodash';

import { stylesBase } from '../styledComponents';
import { useWidthDown } from '../../hooks/width';

import contributeImg1 from '../../assets/developersPage/contribute.1.svg';
import contributeImg2 from '../../assets/developersPage/contribute.2.svg';

const list = [
  {
    title:
      'Contributing to open source shouldn’t feel like climbing a mountain!',
    content:
      // eslint-disable-next-line max-len
      'We know that the contributor journey is not always an easy one. Finding a project in the first place can take hours of searching, but even then, there may not be enough information to start solving issues. From missing instructions and unanswered questions to inefficient validation of pull requests, the open source journey can be much more difficult than it should be. ',
    image: contributeImg1,
  },
  {
    title: 'Ovio makes open source simple',
    content: (
      <>
        Ovio makes researching and contributing to open source software
        straightforward and rewarding. With Ovio, you can find the perfect
        match, with projects and tasks that fit your skills, role and interests.
        <br />
        <br />
        We select and categorize the most contributor-friendly repositories,
        making discovering the right opportunity easier. Ovio’s search tool
        saves you time with both a code languages filter and an engineering role
        filter. Our platform makes it easier than ever to become an active open
        source contributor.
      </>
    ),
    image: contributeImg2,
  },
];

const Contribute = ({ classes }) => {
  const isDownSm = useWidthDown('sm');

  return (
    <div className={classes.muiGridBlockContainer}>
      <Typography variant="h2">Features</Typography>

      <Grid container direction="column" spacing={4}>
        {list.map(({ title, image, content }) => (
          <Grid
            key={title}
            item
            container
            direction={isDownSm ? 'column' : 'row'}
            alignItems="center"
            spacing={4}
          >
            <Grid item xs={10} md={2}>
              <Box component="img" width="100%" src={image} alt={title} />
            </Grid>

            <Grid item xs={10}>
              <Typography variant="h4">{title}</Typography>
              <Typography variant="body1">{content}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const styles = () => ({
  ...pick(stylesBase, ['muiGridBlockContainer', 'muiGridWithOnHoverText']),
});

export default withStyles(styles)(Contribute);
