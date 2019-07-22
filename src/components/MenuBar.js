import React from 'react';
import { Link as DefaultLink } from 'gatsby';
import { Grid, Typography } from '@material-ui/core';
import { styled, makeStyles } from '@material-ui/styles';

import menuItems from '../services/MenuItems';
import logo from '../assets/logo/logo.white.png';
import { getPageUrl } from '../Routes';
import { margins, colors, ButtonV2 as Button } from './styledComponents';

const SubGrid = styled(Grid)({
  flex: '1',
  zIndex: '2',
});

const Link = styled(DefaultLink)({
  color: 'inherit',
  textDecoration: 'none',
});

const LogoContainer = styled(Grid)({ width: 'fit-content' });

const Logo = styled('img')({ width: 'fit-content' });

const LogoCaution = styled(Typography)({
  fontFamily: 'Roboto',
  fontSize: '8.3px',
  lineHeight: '10px',
  textAlign: 'center',
  marginTop: `${margins.xs}`,
  color: `${colors.orange}`,
});

const useStyles = makeStyles({
  grid: { marginTop: `${margins.m}` },
});

const MenuBar = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.grid}>
      <SubGrid item>
        <Link to={getPageUrl('HomePage')}>
          <LogoContainer container direction="column">
            <Logo src={logo} alt="Ovio" />
            <LogoCaution>Online Volunteering in the Open</LogoCaution>
          </LogoContainer>
        </Link>
      </SubGrid>
      <SubGrid container item justify="flex-end">
        {menuItems.map(item => (
          <Link key={item.label} to={item.link}>
            <Button>{item.label}</Button>
          </Link>
        ))}
      </SubGrid>
    </Grid>
  );
};

export default MenuBar;
