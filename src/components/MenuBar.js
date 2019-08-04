import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { menuItems } from '../services/menuItems';
import logoWhite from '../assets/logo/logo.white.svg';
import logoOrange from '../assets/logo/logo.orange.svg';
import { getPageUrl } from '../Routes';
import { spacing, contentWidthPixels, colors, useStylesBase } from './styledComponents';

const useStyles = makeStyles({
  grid: props => ({
    padding: !props.homeversion ? `${spacing(2)} 0px` : `${spacing(4)} 0px 0px`,
    position: !props.homeversion && 'fixed',
    background: !props.homeversion && colors.white,
    left: !props.homeversion && '0px',
    zIndex: '3',
  }),
  gridFixedWidth: props => ({
    width: !props.homeversion && contentWidthPixels,
  }),
  leftSubGrid: { paddingLeft: spacing(2) },
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
  button: props => ({
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
      borderColor: props.homeversion ? colors.white : colors.orange,
      backgroundColor: props.homeversion ? colors.white : colors.orange,
    },
  }),
});

const MenuBar = ({ homeversion }) => {
  const baseClasses = useStylesBase();
  const classes = useStyles({ homeversion });
  const logo = homeversion ? logoWhite : logoOrange;
  return (
    <Grid container className={classes.grid} justify="center">
      <Grid container className={classes.gridFixedWidth}>
        <Grid className={classes.leftSubGrid} item xs={6}>
          <Link className={classes.link} to={getPageUrl('HomePage')}>
            <Grid container direction="column" alignItems="flex-start">
              <img component="img" className={baseClasses.muiIconLogo} src={logo} alt="Ovio" />
              <Typography
                className={classes.logoCaution}
                variant="caption"
                color={homeversion ? 'primary' : 'textSecondary'}
              >
                Online Volunteering in the Open
              </Typography>
            </Grid>
          </Link>
        </Grid>
        <Grid container item justify="flex-end" xs={6}>
          {menuItems.map(item => (
            <Link className={classes.link} key={item.label} to={item.link}>
              <Button className={classes.button} color={homeversion ? 'primary' : 'secondary'}>{item.label}</Button>
            </Link>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

MenuBar.propTypes = {
  homeversion: PropTypes.bool,
};

MenuBar.defaultProps = {
  homeversion: false,
};
export default MenuBar;
