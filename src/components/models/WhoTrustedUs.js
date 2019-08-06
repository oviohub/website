import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useStylesBase, spacing } from '../styledComponents';
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

const useStyles = makeStyles({
  sliderContainer: { marginTop: spacing(6) },
  card: {
    margin: `0px ${spacing(2)}`,
    padding: spacing(4),
    border: '1px solid #DCDCDC',
    boxSizing: 'border-box',
    boxShadow: '0px 30px 20px rgba(0, 0, 0, 0.05)',
  },
  body2: {
    fontStyle: 'italic',
    marginBottom: spacing(3),
  },
  logoImg: { marginRight: spacing(2) },
});

const WhoTrustedUs = () => {
  const { muiGridBlockContainer } = useStylesBase();
  const { sliderContainer, card, body2, logoImg } = useStyles();
  return (
    <Grid className={muiGridBlockContainer} container>
      <Typography variant="h2">They trusted us</Typography>
      <Grid className={sliderContainer}>
        <Slider>
          {companies.map(({ text, logo }) => (
            <Grid key={text} item xs={4}>
              <Grid className={card}>
                <Typography className={body2} variant="body2">{text}</Typography>
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
