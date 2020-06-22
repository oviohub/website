import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { pick } from 'lodash';
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

const useStyles = makeStyles((theme) => ({
  ...pick(stylesBase, ['muiGridBlockContainer']),

  partnersContainer: {
    textAlign: 'center',
    marginTop: spacing(10),
  },
  partnerContainer: {
    margin: `0px ${spacing(11)}`,
    [theme.breakpoints.down('sm')]: { marginBottom: spacing(4) },
  },
  title4: { margin: `${spacing(2)} 0px` },
}));

const OurPartners = () => {
  const {
    muiGridBlockContainer,
    partnersContainer,
    partnerContainer,
    title4,
  } = useStyles();
  return (
    <div className={muiGridBlockContainer}>
      <Typography variant="h2">They support Ovio</Typography>
      <Typography variant="subtitle2">
        Our advisors and supporting partners help make Ovio strong through
        content expertise and financial support.
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
              <Typography variant="h4" className={title4}>
                {title}
              </Typography>
              {subTitle && (
                <Typography variant="caption">{subTitle}</Typography>
              )}
            </Grid>
          </a>
        ))}
      </Grid>
    </div>
  );
};

export default OurPartners;
