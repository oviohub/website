import React from 'react';
import { Grid, Typography, withStyles, Box } from '@material-ui/core';
import { pick } from 'lodash';
import classNames from 'classnames';

import { stylesBase } from '../styledComponents';
import { useWidthDown } from '../../hooks/width';

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

const OurValuesBlock = ({ classes }) => {
  const isDownSm = useWidthDown('sm');
  const direction = isDownSm ? 'column' : 'row';

  return (
    <Grid
      className={classNames(classes.muiGridBlockContainer, classes.container)}
      container
      direction={direction}
    >
      <Grid item xs={12} md={5}>
        <img
          className={classNames(
            classes.muiGridBackground,
            classes.imageComponent,
          )}
          src={orangeMark}
          alt="Our values"
        />
        <Typography variant="h2" className={classes.title2}>
          Our Values
        </Typography>
      </Grid>

      <Grid item xs={12} md={7}>
        {items.map(({ title, image, content }) => (
          <Grid
            key={title}
            container
            direction={direction}
            alignItems={isDownSm ? 'center' : 'flex-start'}
          >
            <Grid
              item
              xs={10}
              md={2}
              className={classes.itemIconContainer}
              container
            >
              <img className={classes.icon} src={image} alt={title} />
            </Grid>

            <Grid item xs={10}>
              <Box mb={6}>
                <Typography variant="h4" className={classes.title4}>
                  {title}
                </Typography>
                <Typography variant="body1">{content}</Typography>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

const styles = (theme) => ({
  ...pick(stylesBase, ['muiGridBlockContainer', 'muiGridBackground']),

  container: {
    paddingTop: theme.spacing(6),
  },

  title2: {
    marginTop: 0,
  },

  itemIconContainer: {
    textAlign: 'center',

    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
    },
  },

  icon: {
    width: '80px',

    [theme.breakpoints.down('xs')]: {
      width: '100px',
      objectFit: 'contain',
    },
  },

  title4: {
    marginBottom: theme.spacing(1),
  },

  imageComponent: {
    left: '0px',
    marginTop: '-130px',
  },
});

export default withStyles(styles)(OurValuesBlock);
