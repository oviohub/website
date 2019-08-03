import React from 'react';
import { Grid, Typography, Icon } from '@material-ui/core';

import menuItems from '../services/MenuItems';
import { getPageUrl } from '../Routes';
import { useStylesBase } from './styledComponents';
import logo from '../assets/logo/logo.orange.svg';
import iconFacebook from '../assets/icons/icon.facebook.orange.svg';
import iconLinkedIn from '../assets/icons/icon.linkedin.orange.svg';
import iconTwitter from '../assets/icons/icon.twitter.orange.svg';

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
  const { muiGridBlockContainer, muiIconLogo, muiTypographyOverlineLight } = useStylesBase();
  return (
    <Grid className={muiGridBlockContainer} container justify="flex-end">
      <Grid item container sm={6} direction="column">
        <Icon className={muiIconLogo} component="img" src={logo} alt="Ovio" />
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
            <Typography variant="overline" className={muiTypographyOverlineLight}>{item.label}</Typography>
            <Typography variant="overline" className={muiTypographyOverlineLight}>{item.label}</Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Footer;
