import React from 'react';
import { Typography, Box, withStyles } from '@material-ui/core';
import { pick } from 'lodash';

import { stylesBase, ExternalLink } from '../styledComponents';
import ourStory from '../../assets/aboutPage/ourStory.jpg';

const OurStory = ({ classes }) => (
  <div className={classes.muiGridBlockContainer}>
    <Typography variant="h2">Our Story</Typography>
    <Typography variant="body2">
      Why did we create Ovio? We saw open source software as a path to create
      positive impact. To do so, our plan was simple: we’d find and showcase
      impact-oriented projects in line with the{' '}
      <ExternalLink href="https://www.un.org/sustainabledevelopment/sustainable-development-goals/">
        UN Sustainable Development Goals
      </ExternalLink>{' '}
      and make them more accessible to every developer.
      <br />
      <br />
      In looking for these kinds of projects, we noticed some limits to the open
      source ecosystem, like easily getting an overview of a project and its
      impact or finding one that matched a contributor’s skills and interests.
      And we discovered that these limits were not applicable only to do-gooders
      like us, but were struggles any developer would face.
      <br />
      <br />
      That’s when our mission became clear: we needed to address OSS as a whole!
      If we succeed in improving collaboration at a global scale, more
      developers will become contributors, and we can all work together to
      tackle the most impactful projects.
    </Typography>

    <Box textAlign="center" mt={4}>
      <img className={classes.image} src={ourStory} alt="Our story" />
    </Box>
  </div>
);

const styles = (theme) => ({
  ...pick(stylesBase, ['muiGridBlockContainer']),

  image: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
});

export default withStyles(styles)(OurStory);
