import React from 'react';
import { Link } from 'gatsby';
import { Grid, Typography, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { footerMenu } from '../services/menuItems';
import { spacing, useStylesBase } from './styledComponents';
import logo from '../assets/logo/logo.orange.svg';
import iconFacebook from '../assets/icons/icon.facebook.orange.svg';
import iconLinkedIn from '../assets/icons/icon.linkedin.orange.svg';
import iconTwitter from '../assets/icons/icon.twitter.orange.svg';

const socialMedias = [
  {
    image: { src: iconFacebook, alt: 'Link to Facebook' },
    link: 'https://www.facebook.com/oviohub',
  },
  {
    image: { src: iconLinkedIn, alt: 'Link to LinkedIn' },
    link: 'https://www.linkedin.com/company/oviohub/',
  },
  {
    image: { src: iconTwitter, alt: 'Link to Twitter' },
    link: 'https://twitter.com/OvioHub',
  },
];

const useStyles = makeStyles({
  lightIcon: { opacity: 0.6 },
  itemContainer: {
    width: 'auto',
  },
  itemText: {
    opacity: 1,
    fontWeight: 'bold',
    marginBottom: spacing(4),
  },
  links: { textDecoration: 'none', marginBottom: spacing(4) },
});

const Footer = () => {
  const { muiGridBlockContainer, muiIconLogo } = useStylesBase();
  const { lightIcon, itemContainer, itemText, links } = useStyles();
  return (
    <Grid className={muiGridBlockContainer} container justify="flex-end">
      <Grid item container xs={6} direction="column">
        <img className={muiIconLogo} component="img" src={logo} alt="Ovio" />
        <Grid>
          {socialMedias.map(item => (
            <a key={item.link} href={item.link} target="_blank" rel="noreferrer noopener">
              <Icon component="img" className={lightIcon} src={item.image.src} alt={item.image.alt} />
            </a>
          ))}
        </Grid>
        <Typography variant="caption">© 2019 Ovio Inc - All Rights Reserved</Typography>
      </Grid>
      <Grid item container xs={6} justify="space-between">
        {footerMenu.map(item => (
          <Grid key={item.label} className={itemContainer} container direction="column">
            <Typography className={itemText} variant="caption">{item.label}</Typography>
            {item.subMenu.map(subItem => (
              <React.Fragment key={subItem.label}>
                {subItem.link && (
                  <Link to={subItem.link} className={links}>
                    <Typography variant="caption">{subItem.label}</Typography>
                  </Link>
                )}
                {subItem.href ? (
                  <a href={subItem.href} className={links} target="_blank" rel="noreferrer noopener">
                    <Typography variant="caption">{subItem.label}</Typography>
                  </a>
                )
                  : !subItem.link && <Typography variant="caption">{subItem.label}</Typography>
                }
              </React.Fragment>
            ))}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Footer;
