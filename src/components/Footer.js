import React from 'react';
import { Link } from 'gatsby';
import { Grid, Typography, Icon } from '@material-ui/core';
import { isWidthDown } from '@material-ui/core/withWidth';
import { makeStyles } from '@material-ui/styles';

import { footerMenu } from '../services/menuItems';
import { spacing, stylesBase, useWidth } from './styledComponents';
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

const { muiGridBlockContainer } = stylesBase;
const useStyles = makeStyles(theme => ({
  muiGridBlockContainer,
  muiIconLogo: stylesBase.muiIconLogo,
  subContainer: {
    marginBottom: spacing(6),
  },
  menuContainer: {
    [theme.breakpoints.down('xs')]: {
      margin: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: spacing(5),
    },
  },
  lightIcon: ({ last }) => ({
    opacity: 0.6,
    marginRight: last ? '0px' : spacing(3),
  }),
  itemContainer: {
    width: 'auto',
    [theme.breakpoints.down('xs')]: {
      marginBottom: spacing(4),
    },
  },
  itemTextContainer: {
    marginBottom: spacing(4),
  },
  itemText: {
    opacity: 1,
    fontWeight: 'bold',
  },
  links: { textDecoration: 'none', marginBottom: spacing(4) },
}));

const Footer = () => {
  const width = useWidth();
  const {
    // eslint-disable-next-line no-shadow
    muiGridBlockContainer,
    muiIconLogo,
    subContainer,
    menuContainer,
    itemContainer,
    itemTextContainer,
    itemText,
    links,
  } = useStyles();
  return (
    <Grid
      className={muiGridBlockContainer}
      container
      justify="flex-end"
      wrap={isWidthDown('sm', width) ? 'wrap-reverse' : 'wrap'}
    >
      <Grid
        className={subContainer}
        item
        container
        direction="column"
        xs={12}
        md={5}
        alignItems={isWidthDown('sm', width) ? 'center' : 'flex-start'}
      >
        <img className={muiIconLogo} src={logo} alt="Ovio" />
        <Grid>
          {socialMedias.map(({ link, image: { imgSrc, imgAlt } }, index) => (
            <a key={link} href={link} target="_blank" rel="noreferrer noopener">
              <Icon
                component="img"
                className={useStyles({ last: index === socialMedias.length - 1 }).lightIcon}
                src={imgSrc}
                alt={imgAlt}
              />
            </a>
          ))}
        </Grid>
        <Typography variant="caption">© 2020 Ovio Inc - All Rights Reserved</Typography>
      </Grid>
      <Grid
        item
        container
        xs={11}
        sm={12}
        md={7}
        direction={isWidthDown('xs', width) ? 'column' : 'row'}
        justify="space-between"
        className={menuContainer}
      >
        {footerMenu.map(({ label, subMenu }) => (
          <Grid key={label} className={itemContainer} container direction={isWidthDown('xs', width) ? 'row' : 'column'}>
            <Grid item className={itemTextContainer} xs={isWidthDown('xs', width) ? 4 : false}>
              <Typography className={itemText} variant="caption">{label}</Typography>
            </Grid>
            <Grid item container direction="column" xs={isWidthDown('xs', width) ? 8 : false}>
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
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Footer;
