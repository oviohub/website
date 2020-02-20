import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography, withWidth } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { stylesBase, spacing, ExternalLink } from './styledComponents';
import Slider from './ui-library/Slider';

const { muiGridBlockContainer } = stylesBase;
const useStyles = makeStyles(theme => ({
  muiGridBlockContainer,
  title2: {
    marginBottom: spacing(8),
    [theme.breakpoints.down('sm')]: { marginBottom: spacing(4) },
  },
  cardsContainer: {
    padding: `0px ${spacing(8)}`,
    [theme.breakpoints.down('sm')]: { padding: `0px ${spacing(4)}` },
    [theme.breakpoints.down('xs')]: { padding: `0px ${spacing(2)}` },
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    border: '1px solid #DCDCDC',
    borderRadius: '4%',
    boxSizing: 'border-box',
    boxShadow: '0px 30px 20px rgba(0, 0, 0, 0.05)',
    height: '200px',
    width: '200px',
    [theme.breakpoints.down('xs')]: {
      height: '130px',
      width: '130px',
    },
  },
  imgComponent: {
    maxWidth: '80%',
    height: '70%',
    objectFit: 'contain',
  },
}));

const Testimonies = ({ title, data, width }) => {
  const [animated, setAnimated] = useState(true);

  // eslint-disable-next-line no-shadow
  const { muiGridBlockContainer, title2, cardsContainer, card, imgComponent } = useStyles();
  let viewsToShow;
  switch (width) {
    case 'xs': case 'sm':
      viewsToShow = 2;
      break;
    case 'md':
      viewsToShow = 3;
      break;
    default:
      viewsToShow = 4;
  }

  return (
    <Grid className={muiGridBlockContainer} container>
      <Typography className={title2} variant="h2">{title}</Typography>
      <Grid
        className={cardsContainer}
        container
        onMouseEnter={() => setAnimated(false)}
        onMouseLeave={() => setAnimated(true)}
      >
        <Slider viewsToShow={viewsToShow} autoSlide={animated}>
          {data.map(({ name, logo, link }) => (
            <Grid key={name} item xs={6} md={4} lg={3}>
              <ExternalLink href={link}>
                <Grid className={card}>
                  <img className={imgComponent} src={logo} alt={name} />
                </Grid>
              </ExternalLink>
            </Grid>
          ))}
        </Slider>
      </Grid>
    </Grid>
  );
};

Testimonies.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired,
  width: PropTypes.string.isRequired,
};

export default withWidth()(Testimonies);
