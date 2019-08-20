import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { fontSizing, contentWidthPixels, stylesBase, colors } from '../styledComponents';
import backgroundImage from '../../assets/modelPage/companies.middle.jpg';

const { muiGridBlockContainer } = stylesBase;
const useStyles = makeStyles({
  muiGridBlockContainer,
  container: {
    width: 'calc(100vw - 8px)',
    left: 'calc(-1 * (100vw - 100%) / 2)',
    position: 'relative',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
  },
  blockContainer: {
    width: contentWidthPixels,
    zIndex: 1,
  },
  body2: {
    fontStyle: 'italic',
    fontWeight: '600',
    fontSize: fontSizing(6),
    lineHeight: '56px',
  },
  thickLine: {
    width: '13px',
    height: '100%',
    backgroundColor: colors.white,
  },
});

const MiddleBlock = () => {
  // eslint-disable-next-line no-shadow
  const { muiGridBlockContainer, container, blockContainer, body2, thickLine } = useStyles();
  return (
    <Grid className={container} container justify="center">
      <Grid className={`${muiGridBlockContainer} ${blockContainer}`} container>
        <Grid container justify="center" item xs={2}>
          <div className={thickLine} />
        </Grid>
        <Grid item xs={9}>
          <Typography className={body2} variant="body2" color="primary">
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
