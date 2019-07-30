import React from 'react';
import { Grid, Typography, Icon } from '@material-ui/core';

import menuItems from '../services/MenuItems';
import { getPageUrl } from '../Routes';
import { useStylesBase } from './styledComponents';
import logo from '../assets/logo/logo.orange.png';
import iconFacebook from '../assets/icons/icon.facebook.jpg';
import iconLinkedIn from '../assets/icons/icon.linkedIn.jpg';
import iconTwitter from '../assets/icons/icon.twitter.jpg';

const socialMedias = [
  {
    image: { src: iconFacebook, alt: 'Link to Facebook' },
    link: getPageUrl('HomePage'),
  },
  {
    image: { src: iconLinkedIn, alt: 'Link to LinkedIn' },
    link: getPageUrl('HomePage'),
  },
  {
    image: { src: iconTwitter, alt: 'Link to Twitter' },
    link: getPageUrl('HomePage'),
  },
];

const Footer = () => {
  const baseClasses = useStylesBase();
  return (
    <Grid container justify="flex-end">
      <Grid item container sm={6} direction="column">
        <Icon className={baseClasses.muiIconLogo} component="img" src={logo} alt="Ovio" />
        <Grid>
          {socialMedias.map(item => (
            <Icon component="img" key={item.image.alt} src={item.image.src} alt={item.image.alt} />
          ))}
        </Grid>
        <Typography variant="caption">© 2019 Ovio Inc - All Rights Reserved</Typography>
      </Grid>
      <Grid item container sm={6}>
        {menuItems.filter(item => item.label !== 'About').map(item => (
          <Grid container direction="column" item key={item.label} style={{ width: 'auto' }}>
            <Typography variant="overline">{item.label}</Typography>
            <Typography variant="overline" className={baseClasses.muiTypographyOverlineLight}>{item.label}</Typography>
            <Typography variant="overline" className={baseClasses.muiTypographyOverlineLight}>{item.label}</Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Footer;
