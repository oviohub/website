import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import {
  Grid,
  Typography,
  Button,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Hidden,
  IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { menuItems } from '../services/menuItems';
import DropMenu from './ui-library/DropMenu';
import logoWhite from '../assets/logo/logo.white.svg';
import logoOrange from '../assets/logo/logo.orange.svg';
import menuIcon from '../assets/icons/icon.menu.darkBlue.png';
import { getPageUrl } from '../Routes';
import { spacing, contentWidthPixels, colors, stylesBase } from './styledComponents';

const { muiIconLogo } = stylesBase;
const useStyles = makeStyles(theme => ({
  muiIconLogo,
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
  subContainer: {
    [theme.breakpoints.down('sm')]: {
      padding: `0px ${spacing(3)}`,
    },
  },
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
  button: ({ homeVersion, last }) => ({
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
    margin: `0px ${spacing(last ? 0 : 1)}`,
    '&:hover': {
      color: colors.darkBlue,
      borderColor: homeVersion ? colors.white : colors.orange,
      backgroundColor: homeVersion ? colors.white : colors.orange,
    },
  }),
  menuItem: { margin: `0px ${spacing(2)}` },
}));

const MenuBar = ({ homeVersion }) => {
  const {
    // eslint-disable-next-line no-shadow
    muiIconLogo,
    grid,
    gridFixedWidth,
    subContainer,
    button,
    links,
    logoCaution,
    menuItem,
  } = useStyles({ homeVersion });
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  function handleToggle() {
    setOpen(prevOpen => !prevOpen);
  }

  function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }

  return (
    <Grid container className={grid} justify="center">
      <Grid container item className={gridFixedWidth}>
        <Grid className={subContainer} item xs={6} container alignItems="center">
          <Link className={links} to={getPageUrl('HomePage')}>
            <Grid container direction="column" alignItems="flex-start">
              <img className={muiIconLogo} src={homeVersion ? logoWhite : logoOrange} alt="Ovio" />
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

        <Grid className={subContainer} container item justify="flex-end" xs={6}>
          <Hidden smDown>
            {menuItems.map(({ label, link, subMenu }, index) => (
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
                  <Button
                    className={useStyles({ homeVersion, last: index === menuItems.length - 1 }).button}
                    color={homeVersion ? 'primary' : 'secondary'}
                  >
                    {label}
                  </Button>
                </Link>
              )))}
          </Hidden>

          <Hidden mdUp>
            <IconButton
              aria-label="menu"
              ref={anchorRef}
              aria-controls="menu-list-grow"
              aria-haspopup="true"
              onClick={handleToggle}
            >
              <img src={menuIcon} alt="Open menu" />
            </IconButton>
            <Popper open={open} anchorEl={anchorRef.current} transition disablePortal placement="bottom-end">
              {({ TransitionProps }) => (
                <Grow {...TransitionProps}>
                  <Paper id="menu-list-grow">
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList>
                        {menuItems.map(({ label, link }) => (
                          <Link className={links} key={label} to={link}>
                            <MenuItem className={menuItem}>{label}</MenuItem>
                          </Link>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Hidden>
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
