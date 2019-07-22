import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { styled } from '@material-ui/styles';

import menuItems from '../services/MenuItems';
import { getPageUrl } from '../Routes';
import { spacing, fontSizes } from './styledComponents';
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

const Content = styled(Grid)({ flex: '1' });

const SocialMediasContainer = styled(Grid)({});

const Logo = styled('img')({ width: 'fit-content' });

const Icon = styled('img')({ margin: `${spacing(4)} ${spacing(3)} ${spacing(4)} 0px` });

const CopyrightSpan = styled(Typography)({
  fontFamily: 'Roboto',
  fontSize: fontSizes.s,
  lineHeight: '14px',
  opacity: '0.5',
});

const MenuPrimaryLink = styled(Typography)({
  fontFamily: 'Roboto',
  fontSize: fontSizes.s,
  fontWeight: 'bold',
  lineHeight: '16px',
  margin: `0px ${spacing(8)} ${spacing(4)} 0px`,
});

const MenuSecondaryLink = styled(MenuPrimaryLink)({
  opacity: '0.5',
  lineHeight: '14px',
  margin: `0px ${spacing(7)} ${spacing(4)} 0px`,
});

const Footer = () => (
  <Grid container justify="flex-end">
    <Content item container direction="column">
      <Logo src={logo} alt="Ovio" />
      <SocialMediasContainer>
        {socialMedias.map(item => <Icon src={item.image.src} alt={item.image.alt} />)}
      </SocialMediasContainer>
      <CopyrightSpan color="secondary" component="span">
        © 2019 Ovio Inc - All Rights Reserved - Theme
      </CopyrightSpan>
    </Content>
    <Content item container>
      {menuItems.filter(item => item.label !== 'About').map(item => (
        <div>
          <MenuPrimaryLink color="secondary">{item.label}</MenuPrimaryLink>
          <MenuSecondaryLink color="secondary">{item.label}</MenuSecondaryLink>
          <MenuSecondaryLink color="secondary">{item.label}</MenuSecondaryLink>
        </div>
      ))}
    </Content>
  </Grid>
);

export default Footer;
