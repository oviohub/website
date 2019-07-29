import React from 'react';
import { Link } from 'gatsby';
import { Grid, Typography, Button, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import menuItems from '../services/MenuItems';
import logo from '../assets/logo/logo.white.png';
import { getPageUrl } from '../Routes';
import { spacing, margins, useStylesBase } from './styledComponents';

const useStyles = makeStyles({
  grid: { marginTop: `${margins.m}` },
  SubGrid: {
    zIndex: '2',
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
  logoCaution: {
    fontSize: '8.3px',
    lineHeight: '10px',
    textAlign: 'center',
    marginTop: spacing(1),
    width: 'fit-content',
  },
});

const MenuBar = () => {
  const baseClasses = useStylesBase();
  const classes = useStyles();
  return (
    <Grid container className={classes.grid}>
      <Grid className={classes.SubGrid} item xs={6}>
        <Link className={classes.link} to={getPageUrl('HomePage')}>
          <Grid container direction="column" justify="flex-start">
            <Icon component="img" className={baseClasses.muiIconLogo} src={logo} alt="Ovio" />
            <Typography className={classes.logoCaution} variant="caption" color="textSecondary">
              Online Volunteering in the Open
            </Typography>
          </Grid>
        </Link>
      </Grid>
      <Grid className={classes.SubGrid} container item justify="flex-end" xs={6}>
        {menuItems.map(item => (
          <Link className={classes.link} key={item.label} to={item.link}>
            <Button className={baseClasses.muiButtonAppBarVersion}>{item.label}</Button>
          </Link>
        ))}
      </Grid>
    </Grid>
  );
};

export default MenuBar;
