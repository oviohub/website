import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Button, Popper, Grow, Paper, ClickAwayListener, MenuList, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { spacing } from '../styledComponents';

const useStyles = makeStyles({ menuItem: { margin: `0px ${spacing(2)}` } });

const DropMenu = ({ buttonLabel, buttonLink, color, classes: { links, button }, menuItems }) => {
  const { menuItem } = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const { current } = anchorRef;

  function handleOpen() {
    setOpen(true);
  }

  function handleClose({ target }) {
    if (current && current.contains(target)) {
      return;
    }
    setOpen(false);
  }

  return (
    <React.Fragment>
      <Link
        className={links}
        to={buttonLink}
      >
        <Button
          className={button}
          color={color}
          aria-label="menu"
          ref={anchorRef}
          aria-controls="menu-list-grow"
          aria-haspopup="true"
          onMouseOver={handleOpen}
          onFocus={handleOpen}
        >
          {buttonLabel}
        </Button>
      </Link>
      <Popper open={open} anchorEl={current} transition disablePortal placement="bottom-end">
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
    </React.Fragment>
  );
};

DropMenu.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  classes: PropTypes.shape({
    links: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  }).isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired,
};

export default DropMenu;
