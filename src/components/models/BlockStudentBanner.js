import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { Grid, Typography, Button } from '@material-ui/core';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import { makeStyles } from '@material-ui/styles';
import { stylesBase, spacing } from '../styledComponents';
import { getPageUrl } from '../../Routes';

const { muiGridBlockContainer, muiGridTagsContainer } = stylesBase;
const useStyles = makeStyles(theme => ({
  muiGridBlockContainer,
  muiGridTagsContainer,
  bannerContainer: {
    padding: '20px',
    margin: 'auto',
  },
  textContainer: {
    paddingLeft: '20px',
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: { marginBottom: spacing(3) },
    [theme.breakpoints.down('xs')]: { textAlign: 'center' },
  },
}));

const BlockStudentBanner = ({ width }) => {
  // eslint-disable-next-line no-shadow
  const { muiGridBlockContainer, muiGridTagsContainer, bannerContainer, textContainer } = useStyles();
  return (
    <Grid className={muiGridBlockContainer} container>
      <Grid className={`${bannerContainer} ${muiGridTagsContainer}`} container item xs={11}>
        <Grid
          container
          alignItems="center"
          justify={isWidthDown('sm', width) ? 'center' : 'flex-start'}
          item
          xs={12}
          md={9}
        >
          <Typography className={textContainer} variant="body2" color="textSecondary">
            Are you a student, University, or Academic, looking for projects?
          </Typography>
        </Grid>
        <Grid container justify={isWidthDown('sm', width) ? 'center' : 'flex-end'} item xs={12} md={3}>
          <Link to={getPageUrl('HomePage')} style={{ textDecoration: 'none' }}>
            <Button>Learn more</Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

BlockStudentBanner.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(BlockStudentBanner);
