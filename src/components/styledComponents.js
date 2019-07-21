import { createMuiTheme, Button as MuiButton, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { styled as muiStyled } from '@material-ui/styles';

export const contentWidth = 1280;
export const contentWidthPixels = `${contentWidth}px`;
export const mobileThreshold = 800;
export const mobileThresholdPixels = `${mobileThreshold}px`;
export const menuHeightOffset = 71; // 30 + 41 --- 30 for marginTop + 41 menuBar height
export const theme = createMuiTheme();

export const spacing = factor => `${theme.spacing(factor)}px`;

export const margins = {
  xs: '7px',
  m: '30px',
  l: '50px',
};

export const fontSizes = {
  s: '14px',
  m: '20px',
  xl: '60px',
};

export const colors = {
  white: '#FFFFFF',
  orange: '#FF9339',
  darkGray: '#4A4A4A',
};

// Typography
export const Title1 = styled(Typography).attrs({ variant: 'h1', color: 'primary' })`
  &&& {
    font-family: Caveat Brush !important;
    font-size: ${fontSizes.xl};
    line-height: 70px;
    text-align: center;
    margin: ${margins.m};
  }
`;

export const SubTitle1 = styled(Typography).attrs({ variant: 'subtitle1', color: 'primary' })`
  &&& {
    font-family: Roboto;
    font-size: ${fontSizes.m};
    font-style: italic;
    font-weight: 500;
    line-height: 34px;
    text-align: center;
  }
`;

export const Title2 = styled(Typography).attrs({ variant: 'h2', color: 'secondary' })`
  &&& {
    font-family: Caveat Brush !important;
    font-size: ${fontSizes.xl};
    line-height: 70px;
    text-align: center;
    margin: ${spacing(4)};
  }
`;


// Inputs
export const Button = muiStyled(MuiButton)(props => ({
  color: `${colors.white}`,
  backgroundColor: props.transparent ? 'transparent' : `${colors.orange}`,
  fontFamily: 'Montserrat',
  fontSize: `${colors.white}`,
  fontWeight: '600',
  letterSpacing: '-0.34px',
  lineHeight: '18px',
  height: '40px',
  minWidth: '152px',
  textAlign: 'center',
  textTransform: 'none',
  border: `2px solid ${props.transparent ? colors.white : colors.orange}`,
  borderRadius: '20px',
  boxShadow: 'inset 0 2px 4px 0 rgba(0,0,0,0.1)',
  '&:hover': {
    backgroundColor: `${colors.orange}`,
  },
}));

export const ButtonV2 = muiStyled(MuiButton)({
  color: `${colors.white}`,
  backgroundColor: 'transparent',
  fontFamily: 'Roboto',
  fontSize: `${fontSizes.s}`,
  fontWeight: 'normal',
  lineHeight: '16px',
  textTransform: 'none',
  height: '30px',
  borderRadius: '7px',
  minWidth: '61px',
  padding: '0px 8px',
  margin: `0px ${margins.xs}`,
  '&:hover': {
    backgroundColor: `${colors.orange}`,
  },
});

// Shapes
export const Arrow = muiStyled('div')({
  boxSizing: 'border-box',
  height: '40px',
  width: '40px',
  border: `4px solid ${colors.white}`,
  borderWidth: '0px 0px 4px 4px',
  transform: 'rotate(315deg)',
});
