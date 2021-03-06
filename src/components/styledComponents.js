import { createMuiTheme, useMediaQuery } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import styledComponent from 'styled-components';
import { styled } from '@material-ui/styles';

export const contentWidth = 1216;
export const contentWidthPixels = `${contentWidth}px`;
export const mobileThreshold = 800;
export const mobileThresholdPixels = `${mobileThreshold}px`;
export const menuHeightOffset = 72;

export const colors = {
  darkBlue: '#2F4058',
  orange: '#F47820',
  lightOrange: '#FFD2B2',
  grey: '#D8D8D8',
  lightGrey: '#FAFAFA',
  white: '#FFFFFF',
  red: red[800],
};

export const margins = {
  xs: '7px',
  m: '30px',
  l: '50px',
};

export const fontSizes = {
  s: '14px',
  m: '20px',
  xl: '60px',
  x2l: '100px',
};

const theme = createMuiTheme();
export const spacing = (...args) =>
  args.map((arg) => `${theme.spacing(arg)}px`).join(' ');
export const fontSizing = (factor) => `${factor * 7}px`; // 7px for the smaller font-size in the website

export const defaultTheme = createMuiTheme({
  palette: {
    primary: { main: `${colors.white}` },
    secondary: { main: `${colors.darkBlue}` },
    error: { main: `${colors.red}` },
    text: {
      primary: colors.darkBlue,
      secondary: colors.orange,
    },
  },
  overrides: {
    MuiTypography: {
      root: {
        fontFamily: 'Roboto',
      },
      h1: {
        color: colors.white,
        fontFamily: 'Dosis',
        fontSize: fontSizing(9),
        lineHeight: '70px',
        textAlign: 'center',
        margin: spacing(4),
        [theme.breakpoints.down('xs')]: {
          fontSize: fontSizing(6),
          margin: `0px 0px ${spacing(4)}`,
          lineHeight: '60px',
        },
      },
      subtitle1: {
        color: colors.white,
        fontSize: fontSizing(3),
        fontWeight: '500',
        lineHeight: '34px',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: { fontSize: fontSizing(2.6) },
      },
      h2: {
        color: colors.darkBlue,
        fontFamily: 'Dosis',
        fontSize: fontSizing(9),
        lineHeight: '70px',
        margin: spacing(4),
        textTransform: 'lowercase',

        '&::first-letter': {
          textTransform: 'uppercase',
        },

        [theme.breakpoints.down('xs')]: {
          margin: theme.spacing(4, 0),
        },
      },
      subtitle2: {
        color: colors.darkBlue,
        fontFamily: 'Montserrat',
        fontSize: fontSizing(3),
        lineHeight: '34px',
        height: 'fit-content',
      },
      h3: {
        color: colors.darkBlue,
        fontFamily: 'Dosis',
        fontSize: fontSizing(9),
      },
      h4: {
        color: colors.darkBlue,
        fontFamily: 'Montserrat',
        fontSize: fontSizing(2.6), // to be close to 18px
        fontWeight: 'bold',
        lineHeight: '22px',
      },
      body1: {
        color: colors.darkBlue,
        fontFamily: 'Montserrat',
        fontSize: fontSizing(2.3), // to be close to 16px
        lineHeight: '26px',
      },
      body2: {
        color: colors.darkBlue,
        fontFamily: 'Montserrat',
        fontSize: fontSizing(3),
        lineHeight: '26px',
      },
      caption: {
        color: colors.darkBlue,
        fontFamily: 'Roboto',
        fontSize: fontSizing(2),
        lineHeight: '14px',
        opacity: '0.5',
      },
    },
    MuiButton: {
      root: {
        color: colors.white,
        backgroundColor: colors.orange,
        fontFamily: 'Montserrat',
        fontSize: fontSizing(2),
        fontWeight: '600',
        letterSpacing: '-0.34px',
        lineHeight: '18px',
        minHeight: '40px',
        minWidth: '152px',
        textAlign: 'center',
        textTransform: 'capitalize',
        border: `2px solid ${colors.orange}`,
        borderRadius: '20px',
        '&:hover': {
          color: colors.orange,
          backgroundColor: 'transparent',
          borderColor: colors.orange,
        },
      },
      text: {
        padding: `6px ${spacing(4)}`,
      },
    },
    MuiIcon: {
      root: {
        margin: `${spacing(4)} ${spacing(3)} ${spacing(4)} 0px`,
      },
    },
    MuiIconButton: {
      root: {
        padding: '8px 0px 8px 12px',
      },
    },
    MuiPaper: {
      root: {
        overflow: 'hidden',
      },
    },
    MuiMenuItem: {
      root: {
        width: '100%',
        '&:hover': { backgroundColor: colors.lightOrange },
      },
    },
  },
});

export const stylesBase = {
  muiButtonWhiteBackground: {
    backgroundColor: colors.white,
    color: colors.orange,
    border: `2px solid ${colors.white}`,
    '&:hover': {
      color: colors.white,
      backgroundColor: 'transparent',
      borderColor: colors.white,
    },
  },
  muiButtonLarge: {
    minWidth: '190px',
    paddingTop: '12px',
    paddingBottom: '12px',
  },
  muiGridBlockContainer: {
    margin: `${spacing(12)} 0px`,
    [defaultTheme.breakpoints.down('xs')]: {
      margin: `${spacing(6)} 0px`,
    },
  },
  muiGridFullScreen: {
    width: '100vw',
    [defaultTheme.breakpoints.down('md')]: { width: '100vw' },
  },
  muiGridFullScreenWithBackground: {
    width: '100vw',
    left: 'calc(-1 * (100vw - 100%) / 2)',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [defaultTheme.breakpoints.down('md')]: { width: '100vw' },
  },
  muiIconLogo: {
    width: '110px',
    margin: '0px',
    height: '24px',
  },
  muiGridBackground: {
    position: 'absolute',
    zIndex: -1,
    width: 'inherit',
    height: 'inherit',
  },
  muiGridWithOnHoverText: {
    '& > .onHoverDisplay, & > .onHoverHide': {
      height: '100%',
      width: '100%',
    },
    '& > .onHoverHide, &:hover > .onHoverDisplay': { display: 'flex' },
    '& > .onHoverDisplay, &:hover > .onHoverHide': { display: 'none' },
  },
  muiGridTagsContainer: {
    backgroundColor: colors.lightOrange,
    borderRadius: '40px',
    boxShadow: 'inset 0 2px 4px 0 rgba(0,0,0,0.1)',
  },
};

export const useWidth = () => {
  const keys = [...defaultTheme.breakpoints.keys].reverse();
  return (
    keys.reduce((output, key) => {
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || 'xs'
  );
};

// Shapes
export const Arrow = styled('div')({
  boxSizing: 'border-box',
  height: '40px',
  width: '40px',
  border: `4px solid ${colors.white}ad`,
  borderWidth: '0px 0px 4px 4px',
  transform: 'rotate(315deg)',
  '&:hover': { borderColor: colors.white },
});

export const ThickLine = styled('div')(({ width, height }) => ({
  width: width || '100%',
  height: height || spacing(1.5),
  backgroundColor: colors.orange,
}));

export const Dot = styled('div')(({ orange }) => ({
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  cursor: 'pointer',
  backgroundColor: orange ? colors.orange : colors.grey,
  margin: '5px',
}));

export const BoldSpan = styled('span')({
  fontWeight: 600,
});

export const Tag = styled('span')({
  backgroundColor: colors.lightOrange,
  borderRadius: '40px',
  whiteSpace: 'nowrap',
  padding: `2px ${spacing(1)}`,
  fontSize: '11px',
  fontWeight: 600,
  color: colors.orange,
});

export const ExternalLink = styledComponent.a.attrs({
  target: '_blank',
  rel: 'noreferrer noopener',
})`
  color: ${({ color }) => color || 'inherit'};
  ${({ noDecoration }) => noDecoration && 'text-decoration: none;'}
  ${({ orange }) => orange && `color: ${colors.orange}`}
`;
