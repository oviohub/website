import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { spacing, useStylesBase } from '../styledComponents';

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

const useStyles = makeStyles({
  partnersContainer: {
    textAlign: 'center',
    marginTop: spacing(10),
  },
  partnerContainer: { margin: `0px ${spacing(11)}` },
  title4: { margin: `${spacing(2)} 0px` },
});

const OurValuesBlock = () => {
  const { muiGridBlockContainer } = useStylesBase();
  const { partnersContainer, partnerContainer, title4 } = useStyles();
  return (
    <Grid className={muiGridBlockContainer} container>
      <Typography variant="h2">Advisors and Supporting Partners</Typography>
      <Typography variant="subtitle2">
        Our advisors and supporting partners help make Ovio strong through content expertise and financial support.
      </Typography>
      <Grid className={partnersContainer} container justify="center">
        {partners.map(partner => (
          <a
            key={partner.link}
            href={partner.link}
            target="_blank"
            rel="noreferrer noopener"
            style={{ textDecoration: 'none' }}
          >
            <Grid className={partnerContainer} item>
              <img src={partner.image} alt={partner.title} />
              <Typography variant="h4" className={title4}>{partner.title}</Typography>
              {partner.subTitle
                && <Typography variant="caption">{partner.subTitle}</Typography>
              }
            </Grid>
          </a>
        ))}
      </Grid>
    </Grid>
  );
};

export default OurValuesBlock;
