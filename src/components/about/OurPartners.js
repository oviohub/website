import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { spacing, stylesBase } from '../styledComponents';

import theRefinersLogo from '../../assets/aboutPage/logo.theRefiners.jpg';
import sophieDureyPhoto from '../../assets/aboutPage/photo.sophieDurey.jpg';

const partners = [
  {
    title: 'The Refiners ',
    image: theRefinersLogo,
    link: 'https://www.therefiners.co/',
  },
  {
    title: 'Sophie Durey',
    subTitle: 'Umana',
    image: sophieDureyPhoto,
    link: 'https://www.linkedin.com/in/sophiedurey/',
  },
];

const { muiGridBlockContainer } = stylesBase;
const useStyles = makeStyles({
  muiGridBlockContainer,
  partnersContainer: {
    textAlign: 'center',
    marginTop: spacing(10),
  },
  partnerContainer: { margin: `0px ${spacing(11)}` },
  title4: { margin: `${spacing(2)} 0px` },
});

const OurValuesBlock = () => {
  // eslint-disable-next-line no-shadow
  const { muiGridBlockContainer, partnersContainer, partnerContainer, title4 } = useStyles();
  return (
    <Grid className={muiGridBlockContainer} container>
      <Typography variant="h2">Advisors and Supporting Partners</Typography>
      <Typography variant="subtitle2">
        Our advisors and supporting partners help make Ovio strong through content expertise and financial support.
      </Typography>
      <Grid className={partnersContainer} container justify="center">
        {partners.map(({ link, image, title, subTitle }) => (
          <a
            key={link}
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            style={{ textDecoration: 'none' }}
          >
            <Grid className={partnerContainer} item>
              <img src={image} alt={title} />
              <Typography variant="h4" className={title4}>{title}</Typography>
              {subTitle
                && <Typography variant="caption">{subTitle}</Typography>
              }
            </Grid>
          </a>
        ))}
      </Grid>
    </Grid>
  );
};

export default OurValuesBlock;
