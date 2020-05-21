import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { pick } from 'lodash';

import { stylesBase, ExternalLink } from '../styledComponents';

import fastCompany from '../../assets/aboutPage/fastCompany.png';
import forbes from '../../assets/aboutPage/forbes.png';

const press = [
  {
    title: 'Forbes',
    image: forbes,
    link: 'https://www.TO-UPDATE.com',
  },
  {
    title: 'Fast company',
    image: fastCompany,
    link: 'https://www.TO-UPDATE.com',
  },
];

const useStyles = makeStyles(() => ({
  ...pick(stylesBase, ['muiGridBlockContainer']),
}));

const Press = () => {
  const { muiGridBlockContainer } = useStyles();

  return (
    <div className={muiGridBlockContainer}>
      <Typography variant="h2">They are talking about Ovio</Typography>

      <Grid container justify="center" alignItems="center" spacing={3}>
        {press.map(({ title, image, link }) => (
          <Grid key={title} item>
            <ExternalLink href={link}>
              <img src={image} alt={title} />
            </ExternalLink>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Press;
