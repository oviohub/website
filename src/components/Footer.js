import React from 'react';
import { Link } from 'gatsby';
import { Grid, Typography, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { footerMenu } from '../services/menuItems';
import { spacing, stylesBase } from './styledComponents';
import logo from '../assets/logo/logo.orange.svg';
import iconFacebook from '../assets/icons/icon.facebook.orange.svg';
import iconLinkedIn from '../assets/icons/icon.linkedin.orange.svg';
import iconTwitter from '../assets/icons/icon.twitter.orange.svg';

const socialMedias = [
  {
    image: { imgSrc: iconFacebook, imgAlt: 'Link to Facebook' },
    link: 'https://www.facebook.com/oviohub',
  },
  {
    image: { imgSrc: iconLinkedIn, imgAlt: 'Link to LinkedIn' },
    link: 'https://www.linkedin.com/company/oviohub/',
  },
  {
    image: { imgSrc: iconTwitter, imgAlt: 'Link to Twitter' },
    link: 'https://twitter.com/OvioHub',
  },
];

const useStyles = makeStyles({
  muiGridBlockContainer: stylesBase.muiGridBlockContainer,
  muiIconLogo: stylesBase.muiIconLogo,
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
  const { muiGridBlockContainer, muiIconLogo, lightIcon, itemContainer, itemText, links } = useStyles();
  return (
    <Grid className={muiGridBlockContainer} container justify="flex-end">
      <Grid item container xs={6} direction="column">
        <img className={muiIconLogo} src={logo} alt="Ovio" />
        <Grid>
          {socialMedias.map(({ link, image: { imgSrc, imgAlt } }) => (
            <a key={link} href={link} target="_blank" rel="noreferrer noopener">
              <Icon component="img" className={lightIcon} src={imgSrc} alt={imgAlt} />
            </a>
          ))}
        </Grid>
        <Typography variant="caption">© 2019 Ovio Inc - All Rights Reserved</Typography>
      </Grid>
      <Grid item container xs={6} justify="space-between">
        {footerMenu.map(({ label, subMenu }) => (
          <Grid key={label} className={itemContainer} container direction="column">
            <Typography className={itemText} variant="caption">{label}</Typography>
            {subMenu.map(({ label: subLabel, link, href }) => (
              <React.Fragment key={subLabel}>
                {link && (
                  <Link to={link} className={links}>
                    <Typography variant="caption">{subLabel}</Typography>
                  </Link>
                )}
                {href ? (
                  <a href={href} className={links} target="_blank" rel="noreferrer noopener">
                    <Typography variant="caption">{subLabel}</Typography>
                  </a>
                )
                  : !link && <Typography variant="caption">{subLabel}</Typography>
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
