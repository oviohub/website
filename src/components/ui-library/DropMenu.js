import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Button, Paper as MuiPaper, MenuList, MenuItem as MuiMenuItem } from '@material-ui/core';
import { spacing, colors } from '../styledComponents';

const SubMenuContainer = styled.div`
  position: absolute;
  display: none;
  padding-top: 1px;
  margin-left: ${spacing(1)};
  margin-top: -1px;
`;

const Container = styled.div`
  --btnColor: ${({ homeversion }) => !homeversion ? colors.darkBlue : colors.white};
  --btnborderColor: transparent;
  --btnbackgroundColor: transparent;

  ${SubMenuContainer}:hover, #dropdown-toggle:hover ~ ${SubMenuContainer} { display: block; }

  &:hover {
    --btnColor: ${({ homeversion }) => homeversion ? colors.darkBlue : colors.white};
    --btnborderColor: ${({ homeversion }) => homeversion ? colors.white : colors.orange};
    --btnbackgroundColor: ${({ homeversion }) => homeversion ? colors.white : colors.orange};
  }

  #button {
    color: var(--btnColor);
    border-color: var(--btnborderColor);
    background-color: var(--btnbackgroundColor);
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }
`;

const Paper = styled(MuiPaper)`
  border-top-left-radius: 0px;
  background-color: ${({ homeversion }) => homeversion ? colors.white : colors.orange};
  color: var(--btnColor);
`;

const MenuItem = styled(MuiMenuItem)`
  &:hover {
    background-color: ${({ homeversion }) => !homeversion && colors.white};
    color: ${colors.darkBlue};
  }
`;

const DropMenu = ({ homeVersion, buttonLabel, buttonLink, color, classes: { links, button }, menuItems }) => (
  <Container homeversion={homeVersion ? 1 : 0}>
    <Link
      id="dropdown-toggle"
      className={links}
      to={buttonLink}
    >
      <Button id="button" className={button} color={color}>{buttonLabel}</Button>
    </Link>
    <SubMenuContainer>
      <Paper homeversion={homeVersion ? 1 : 0}>
        <MenuList disablePadding>
          {menuItems.map(({ label, link }) => (
            <Link className={links} key={label} to={link}>
              <MenuItem homeversion={homeVersion ? 1 : 0}>{label}</MenuItem>
            </Link>
          ))}
        </MenuList>
      </Paper>
    </SubMenuContainer>
  </Container>
);

DropMenu.propTypes = {
  homeVersion: PropTypes.bool,
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
