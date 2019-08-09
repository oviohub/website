import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { menuItems } from '../services/MenuItems';
import logoWhite from '../assets/logo/logo.white.svg';
import logoOrange from '../assets/logo/logo.orange.svg';
import { getPageUrl } from '../Routes';
import { spacing, contentWidthPixels, colors, useStylesBase } from './styledComponents';

const useStyles = makeStyles({
  grid: props => ({
    padding: !props.homeVersion ? `${spacing(2)} 0px` : `${spacing(4)} 0px 0px`,
    position: !props.homeVersion && 'fixed',
    background: !props.homeVersion && colors.white,
    left: !props.homeVersion && '0px',
    zIndex: '3',
  }),
  gridFixedWidth: props => ({
    width: !props.homeVersion && contentWidthPixels,
  }),
  link: {
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
});

const MenuBar = ({ homeVersion }) => {
  const { muiIconLogo, muiButtonAppBarVersion } = useStylesBase();
  const { grid, gridFixedWidth, link, logoCaution } = useStyles({ homeVersion });
  const logo = homeVersion ? logoWhite : logoOrange;
  return (
    <Grid container className={grid} justify="center">
      <Grid container item className={gridFixedWidth}>
        <Grid item xs={6}>
          <Link className={link} to={getPageUrl('HomePage')}>
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
          {menuItems.map(item => (
            <Link className={link} key={item.label} to={item.link}>
              <Button className={muiButtonAppBarVersion} color="secondary">{item.label}</Button>
            </Link>
          ))}
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
