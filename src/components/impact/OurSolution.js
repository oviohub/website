import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import { makeStyles } from '@material-ui/styles';

import { BoldSpan, colors, stylesBase, spacing } from '../styledComponents';
import iconProvide from '../../assets/icons/icon.provide.orange.png';
import iconOffer from '../../assets/icons/icon.offer.orange.png';
import iconMaintain from '../../assets/icons/icon.maintain.orange.png';

const objectives = [
  {
    iconURL: iconProvide,
    goal: <React.Fragment>
      <BoldSpan>Provide</BoldSpan>
      &nbsp;
      volunteering support to organizations without forcing them to cut into their budget
      {/* eslint-disable-next-line react/jsx-closing-tag-location */}
    </React.Fragment>,
    description: '$ worth of tech saved per year by organizations compared to outsourcing or hiring talents',
  },
  {
    iconURL: iconOffer,
    goal: <React.Fragment>
      <BoldSpan>Offer</BoldSpan>
      &nbsp;
      a top-quality tech that allows organizations to develop great products and services that fits their
      beneficent&apos; needs
      {/* eslint-disable-next-line react/jsx-closing-tag-location */}
    </React.Fragment>,
    description: 'Years of experience of volunteers engaging with Ovio',
  },
  {
    iconURL: iconMaintain,
    goal: <React.Fragment>
      <BoldSpan>Maintain</BoldSpan>
      &nbsp;
      sustainable support that strengthens organizations’ resources
      {/* eslint-disable-next-line react/jsx-closing-tag-location */}
    </React.Fragment>,
    description: 'Retention of volunteers engagement on a project',
  },
];

const { muiGridBlockContainer } = stylesBase;
const useStyles = makeStyles(theme => ({
  muiGridBlockContainer,
  subContainer: ({ whithoutBorderTop }) => ({
    padding: `${spacing(4)} 0px`,
    borderTop: !whithoutBorderTop && `1px solid ${colors.darkBlue}1a`,
  }),
  goalContainer: {
    [theme.breakpoints.down('xs')]: { marginBottom: spacing(3) },
  },
  title4: {
    fontStyle: 'italic',
    lineHeight: '30px',
    color: colors.orange,
    marginBottom: spacing(4),
    [theme.breakpoints.down('xs')]: {
      lineHeight: 'normal',
      fontWeight: 'normal',
    },
  },
  boldText: {
    margin: `${spacing(6)} 0px ${spacing(4)}`,
    fontWeight: 'bold',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    margin: 'auto 0px',
    width: '65px',
  },
  descriptionContainer: {
    paddingLeft: spacing(1),
    [theme.breakpoints.down('xs')]: { paddingLeft: 0 },
  },
}));

const OurSolution = ({ width }) => {
  const {
    // eslint-disable-next-line no-shadow
    muiGridBlockContainer,
    goalContainer,
    title4,
    boldText,
    iconContainer,
    icon,
    descriptionContainer,
  } = useStyles();
  return (
    <Grid className={muiGridBlockContainer} container>
      <Typography className={title4} variant="h4">
        Our solution redirects talent volunteering towards useful actions. Talented developers can use their
        most valuable and powerful skills to support the causes they care about. By enabling organizations
        accessing such expensive resources, Ovio empowers them to advance their mission.
      </Typography>
      <Typography variant="body1">
        57% of NGOs claim to have staff limitations, which is the first brake to their digital development.
        They mostly lack financial resources to hire top quality engineers or have short-term help from volunteers
        which slows down the completion of complex projects.
      </Typography>
      <Grid>
        <Typography className={boldText} variant="body1">
          On the strength of these findings, Ovio gives itself 3 years to evaluate its impact:
        </Typography>
        {objectives.map(({ iconURL, goal, description }, index) => (
          <Grid
            key={description}
            className={useStyles({ whithoutBorderTop: !index }).subContainer}
            container
            direction={isWidthDown('xs', width) ? 'column' : 'row'}
          >
            <Grid className={goalContainer} container item xs={12} sm={6}>
              <Grid className={iconContainer} item xs={3} md={2}>
                <img className={icon} src={iconURL} alt={goal} />
              </Grid>
              <Grid container alignItems="center" item xs={9} sm={8}>
                <Typography variant="body1">{goal}</Typography>
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={6} justify="flex-end">
              <Grid className={descriptionContainer} container alignItems="center" item xs={9} sm={12}>
                <Typography variant="body1" color="textSecondary">{description}</Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

OurSolution.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(OurSolution);
