import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { menuItems } from '../services/menuItems';
import DropMenu from './ui-library/DropMenu';
import logoWhite from '../assets/logo/logo.white.svg';
import logoOrange from '../assets/logo/logo.orange.svg';
import { getPageUrl } from '../Routes';
import { spacing, contentWidthPixels, colors, stylesBase } from './styledComponents';

const useStyles = makeStyles({
  muiIconLogo: stylesBase.muiIconLogo,
  grid: ({ homeVersion }) => ({
    padding: !homeVersion ? `${spacing(2)} 0px` : `${spacing(4)} 0px 0px`,
    position: !homeVersion && 'fixed',
    background: !homeVersion && colors.white,
    left: !homeVersion && '0px',
    zIndex: '3',
  }),
  gridFixedWidth: ({ homeVersion }) => ({
    width: !homeVersion && contentWidthPixels,
  }),
  links: {
    display: 'flex',
    alignItems: 'center',
    color: 'inherit',
    textDecoration: 'none',
  },
  logoCaution: {
    fontSize: '8.3px',
    lineHeight: '10px',
    textAlign: 'center',
    marginTop: spacing(1),
    width: 'fit-content',
    opacity: 1,
  },
  button: ({ homeVersion }) => ({
    backgroundColor: 'transparent',
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    lineHeight: '16px',
    textTransform: 'none',
    height: '30px',
    border: '2px solid transparent',
    borderRadius: '7px',
    boxShadow: 'none',
    minWidth: '61px',
    padding: `0px ${spacing(1)}`,
    margin: `0px ${spacing(1)}`,
    '&:hover': {
      color: colors.darkBlue,
      borderColor: homeVersion ? colors.white : colors.orange,
      backgroundColor: homeVersion ? colors.white : colors.orange,
    },
  }),
});

const MenuBar = ({ homeVersion }) => {
  const { muiIconLogo, grid, gridFixedWidth, links, logoCaution, button } = useStyles({ homeVersion });
  const logo = homeVersion ? logoWhite : logoOrange;
  return (
    <Grid container className={grid} justify="center">
      <Grid container item className={gridFixedWidth}>
        <Grid item xs={6}>
          <Link className={links} to={getPageUrl('HomePage')}>
            <Grid container direction="column" alignItems="flex-start">
              <img className={muiIconLogo} src={logo} alt="Ovio" />
              <Typography
                className={logoCaution}
                variant="caption"
                color={homeVersion ? 'primary' : 'textSecondary'}
              >
                Online Volunteering in the Open
              </Typography>
            </Grid>
          </Link>
        </Grid>
        <Grid container item justify="flex-end" xs={6}>
          {menuItems.map(({ label, link, subMenu }) => (
            (label === 'Model') ? (
              <DropMenu
                key={label}
                buttonLabel={label}
                buttonLink={link}
                color={homeVersion ? 'primary' : 'secondary'}
                menuItems={subMenu}
                classes={{ links, button }}
              />
            ) : (
              <Link className={links} key={label} to={link}>
                <Button className={button} color={homeVersion ? 'primary' : 'secondary'}>{label}</Button>
              </Link>
            )))}
        </Grid>
      </Grid>
    </Grid>
  );
};

MenuBar.propTypes = {
  homeVersion: PropTypes.bool,
};

MenuBar.defaultProps = {
  homeVersion: false,
};

export default MenuBar;
