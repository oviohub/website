import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { fontSizing, contentWidthPixels, stylesBase, colors } from '../styledComponents';
import backgroundImage from '../../assets/modelPage/companies.middle.jpg';

const { muiGridBlockContainer, muiGridFullScreenWithBackground } = stylesBase;
const useStyles = makeStyles(theme => ({
  muiGridBlockContainer,
  muiGridFullScreenWithBackground,
  container: {
    backgroundImage: `url(${backgroundImage})`,
  },
  blockContainer: {
    width: contentWidthPixels,
    zIndex: 1,
  },
  body1: {
    fontStyle: 'italic',
    fontWeight: '600',
    fontSize: fontSizing(6),
    lineHeight: '56px',
    [theme.breakpoints.down('sm')]: { fontSize: fontSizing(4) },
    [theme.breakpoints.down('xs')]: {
      fontSize: fontSizing(3),
      lineHeight: '36px',
    },
  },
  thickLine: {
    width: '13px',
    height: '100%',
    backgroundColor: colors.white,
  },
}));

const MiddleBlock = () => {
  const {
    // eslint-disable-next-line no-shadow
    muiGridBlockContainer,
    // eslint-disable-next-line no-shadow
    muiGridFullScreenWithBackground,
    container,
    blockContainer,
    body1,
    thickLine,
  } = useStyles();
  return (
    <Grid className={`${muiGridFullScreenWithBackground} ${container}`} container justify="center">
      <Grid className={`${muiGridBlockContainer} ${blockContainer}`} container>
        <Grid container justify="center" item xs={2}>
          <div className={thickLine} />
        </Grid>
        <Grid item xs={9}>
          <Typography className={body1} variant="body1" color="primary">
          Ovio is the only volunteering platform with a large portfolio of software development projects that can fit
          every type of engineering skill set and interest in the social impact sector from education to poverty
          alleviation and beyond.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MiddleBlock;
