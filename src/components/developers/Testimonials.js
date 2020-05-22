import React from 'react';
import { Box, Typography, withStyles } from '@material-ui/core';
import { pick } from 'lodash';

import { stylesBase, BoldSpan } from '../styledComponents';
import { useWidthDown } from '../../hooks/width';

const Testimonials = ({ classes }) => (
  <div className={classes.muiGridBlockContainer}>
    <Typography variant="h2">Testimonials</Typography>

    <Box m="auto" width={useWidthDown('sm') ? '90%' : '70%'}>
      <Typography variant="body2">
        “Thank you so much for connecting me with this resource. I wouldn&apos;t
        have stuck with it to find this if Ovio weren&apos;t so engaged with
        volunteers like me.” <BoldSpan>Olivia</BoldSpan>
        <br />
        <br />
        “I want to use my skills to give back to communities and help people. I
        also want to use this opportunity to keep sharp on some skills that my
        current job doesn&apos;t require. Ovio is the solution to combine both
        and find the right opportunity” <BoldSpan>Marcus</BoldSpan>
        <br />
        <br />
        “I was looking for an opportunity to join a community of folks and
        leverage my experience. I was immediately excited about Ovio because it
        helped me find the right opportunity for me right away! They matched me
        with a project that aligns with my technical expertise, delivering
        values on things that I find important.” <BoldSpan>Tyler</BoldSpan>
      </Typography>
    </Box>
  </div>
);

const styles = () => ({
  ...pick(stylesBase, ['muiGridBlockContainer', 'muiGridWithOnHoverText']),
});

export default withStyles(styles)(Testimonials);
