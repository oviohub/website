import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { isWidthDown } from '@material-ui/core/withWidth';
import { makeStyles } from '@material-ui/styles';

import { spacing, stylesBase, useWidth } from '../styledComponents';

import orangeMark from '../../assets/aboutPage/ourValues.jpg';

import collaborationIcon from '../../assets/aboutPage/collaborationIcon.svg';
import diversityIcon from '../../assets/aboutPage/diversityIcon.svg';
import impactIcon from '../../assets/aboutPage/impactIcon.svg';
import trustIcon from '../../assets/aboutPage/trustIcon.svg';

const items = [
  {
    title: 'Collaboration',
    content:
      // eslint-disable-next-line max-len
      'Building connections across the world and between sectors. Breaking silos. Fostering the exchange of competencies. This is what gets us up in the morning.',
    image: collaborationIcon,
  },
  {
    title: 'Diversity and Inclusion',
    content:
      // eslint-disable-next-line max-len
      'We believe that diversity benefits us all, rather than takes away. We want to do our utmost to ensure that everyone can play their part.',
    image: diversityIcon,
  },
  {
    title: 'Impact',
    content:
      // eslint-disable-next-line max-len
      'We embrace positive change and work towards impacts, whether it’s through harnessing market forces for social good or helping individuals find their purpose and collaborate.',
    image: impactIcon,
  },
  {
    title: 'Trust',
    content:
      // eslint-disable-next-line max-len
      'Constructive action is grounded in candid communication. Building trust allows us to serve the common good.',
    image: trustIcon,
  },
];

const { muiGridBlockContainer, muiGridBackground } = stylesBase;
const useStyles = makeStyles(theme => ({
  muiGridBlockContainer,
  muiGridBackground,
  container: { paddingTop: spacing(6) },
  title2: { marginTop: '0px' },
  itemIconContainer: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: { marginBottom: spacing(2) },
  },
  icon: {
    width: '80px',
    [theme.breakpoints.down('xs')]: {
      width: '100px',
      objectFit: 'contain',
    },
  },
  itemTextContainer: { marginBottom: spacing(6) },
  title4: { marginBottom: spacing(1) },
  imageComponent: {
    left: '0px',
    marginTop: '-130px',
  },
}));

const OurValuesBlock = () => {
  const width = useWidth();
  const {
    // eslint-disable-next-line no-shadow
    muiGridBlockContainer,
    // eslint-disable-next-line no-shadow
    muiGridBackground,
    container,
    title2,
    itemIconContainer,
    icon,
    itemTextContainer,
    imageComponent,
    title4,
  } = useStyles();
  return (
    <Grid
      className={`${muiGridBlockContainer} ${container}`}
      container
      direction={isWidthDown('sm', width) ? 'column' : 'row'}
    >
      <Grid item xs={12} md={5}>
        <img
          className={`${muiGridBackground} ${imageComponent}`}
          src={orangeMark}
          alt="Our values"
        />
        <Typography variant="h2" className={title2}>
          Our Values
        </Typography>
      </Grid>
      <Grid item xs={12} md={7}>
        {items.map(({ title, image, content }) => (
          <Grid
            key={title}
            container
            direction={isWidthDown('sm', width) ? 'column' : 'row'}
            alignItems={isWidthDown('sm', width) ? 'center' : 'flex-start'}
          >
            <Grid item xs={10} md={2} className={itemIconContainer} container>
              <img className={icon} src={image} alt={title} />
            </Grid>
            <Grid item xs={10} size="2" className={itemTextContainer}>
              <Typography variant="h4" className={title4}>
                {title}
              </Typography>
              <Typography variant="body1">{content}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default OurValuesBlock;
