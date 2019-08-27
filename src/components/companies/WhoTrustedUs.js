import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { stylesBase, spacing, useWidth } from '../styledComponents';
import Slider from '../ui-library/Slider';
import iconApple from '../../assets/icons/icon.apple.svg';
import iconCircleCi from '../../assets/icons/icon.circleCi.svg';
import iconSlack from '../../assets/icons/icon.slack.svg';

const companies = [
  {
    text: `“This is the testimonal text, this is the testimonal text, this is the testimonal text long long long
      long long version. (1)”`,
    logo: iconApple,
  },
  {
    text: `“This is the testimonal text, this is the testimonal text, this is the testimonal text long long long
      long long version. (2)”`,
    logo: iconCircleCi,
  },
  {
    text: `“This is the testimonal text, this is the testimonal text, this is the testimonal text long long long
      long long version. (3)”`,
    logo: iconSlack,
  },
  {
    text: `“This is the testimonal text, this is the testimonal text, this is the testimonal text long long long
    long long version. (4)”`,
    logo: iconCircleCi,
  },
  {
    text: `“This is the testimonal text, this is the testimonal text, this is the testimonal text long long long
      long long version. (5)”`,
    logo: iconSlack,
  },
  {
    text: `“This is the testimonal text, this is the testimonal text, this is the testimonal text long long long
    long long version. (6)”`,
    logo: iconApple,
  },
  {
    text: `“This is the testimonal text, this is the testimonal text, this is the testimonal text long long long
    long long version. (7)”`,
    logo: iconApple,
  },
  {
    text: `“This is the testimonal text, this is the testimonal text, this is the testimonal text long long long
    long long version. (8)”`,
    logo: iconCircleCi,
  },
];

const { muiGridBlockContainer } = stylesBase;
const useStyles = makeStyles({
  muiGridBlockContainer,
  sliderContainer: { marginTop: spacing(6) },
  card: {
    margin: `0px ${spacing(2)}`,
    padding: spacing(4),
    border: '1px solid #DCDCDC',
    boxSizing: 'border-box',
    boxShadow: '0px 30px 20px rgba(0, 0, 0, 0.05)',
  },
  body1: {
    fontStyle: 'italic',
    marginBottom: spacing(3),
  },
  logoImg: { marginRight: spacing(2) },
});

const WhoTrustedUs = () => {
  const width = useWidth();
  // eslint-disable-next-line no-shadow
  const { muiGridBlockContainer, sliderContainer, card, body1, logoImg } = useStyles();
  let viewsToShow;
  switch (width) {
    case 'xs': case 'sm':
      viewsToShow = 1;
      break;
    case 'md':
      viewsToShow = 2;
      break;
    default:
      viewsToShow = 3;
  }
  return (
    <Grid className={muiGridBlockContainer} container>
      <Typography variant="h2">They trusted us</Typography>
      <Grid className={sliderContainer}>
        <Slider viewsToShow={viewsToShow}>
          {companies.map(({ text, logo }) => (
            <Grid key={text} item xs={12} md={6} lg={4}>
              <Grid className={card}>
                <Typography className={body1} variant="body1">{text}</Typography>
                <Grid container alignItems="center" justify="center">
                  <img className={logoImg} src={logo} alt="Company's logo" />
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Slider>
      </Grid>
    </Grid>
  );
};

export default WhoTrustedUs;
