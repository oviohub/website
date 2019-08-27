import { createMuiTheme, Grid, useMediaQuery } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import metricMark from '../assets/impactPage/metricMark.svg';

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
export const spacing = factor => `${theme.spacing(factor)}px`;
export const fontSizing = factor => `${factor * 7}px`; // 7px for the smaller font-size in the website

export const defaultTheme = createMuiTheme({
  palette: {
    primary: { main: `${colors.white}` },
    secondary: { main: `${colors.darkBlue}` },
    error: { main: `${colors.orange}` },
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
        fontFamily: 'Caveat Brush',
        fontSize: fontSizing(9),
        lineHeight: '70px',
        textAlign: 'center',
        margin: spacing(4),
        [theme.breakpoints.down('xs')]: {
          fontSize: fontSizing(7),
          margin: `0px 0px ${spacing(4)}`,
        },
      },
      subtitle1: {
        color: colors.white,
        fontSize: fontSizing(3),
        fontStyle: 'italic',
        fontWeight: '500',
        lineHeight: '34px',
        textAlign: 'center',
      },
      h2: {
        color: colors.darkBlue,
        fontFamily: 'Caveat Brush',
        fontSize: fontSizing(9),
        lineHeight: '70px',
        margin: spacing(4),
        [theme.breakpoints.down('xs')]: { margin: `${spacing(4)} 0px` },
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
        fontFamily: 'Caveat Brush',
        fontSize: fontSizing(9),
        lineHeight: '45px',
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
        textTransform: 'none',
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
  muiGridBlockContainer: {
    margin: `${spacing(12)} 0px`,
    [defaultTheme.breakpoints.down('xs')]: {
      margin: `${spacing(6)} 0px`,
    },
  },
  muiGridFullScreen: {
    width: 'calc(100vw - 15px)', // 15px == scrollbar width
    [defaultTheme.breakpoints.down('md')]: { width: '100vw' },
  },
  muiGridFullScreenWithBackground: {
    width: 'calc(100vw - 8px)',
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
    '&:hover .onHoverDisplay': { display: 'flex' },
    '&:hover .onHoverHide': { display: 'none' },
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

export const MetricContainer = styled(Grid)(({ scale, rotation }) => ({
  backgroundImage: `url(${metricMark})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: `calc(${scale} * 100px)`,
  height: `calc(${scale} * 100px)`,
  transform: `rotate(${rotation}deg)`,
  [theme.breakpoints.down('xs')]: {
    width: `calc(${scale - 0.1} * 100px)`,
    height: `calc(${scale - 0.1} * 100px)`,
  },
}));

export const Tag = styled('span')(({ fontSize }) => ({
  backgroundColor: colors.lightOrange,
  borderRadius: '40px',
  whiteSpace: 'nowrap',
  padding: `2px ${spacing(1)}`,
  fontSize,
  fontWeight: 600,
  color: colors.orange,
}));
