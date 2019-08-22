import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import { makeStyles } from '@material-ui/styles';

import { BoldSpan, fontSizing, colors, stylesBase, spacing, MetricContainer } from '../styledComponents';
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
    metric: '~ $10k',
    metricDescription: 'amount of $ organizations are saving using Explore compare to outsourcing or hiring talents',
    markStyle: { scale: 0.85, rotation: 0 },
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
    metric: '~ 5+ years exp',
    metricDescription: 'quality of the tech through talents years of experience and skills',
    markStyle: { scale: 0.9, rotation: 90 },
  },
  {
    iconURL: iconMaintain,
    goal: <React.Fragment>
      <BoldSpan>Maintain</BoldSpan>
      &nbsp;
      sustainable support that strengthens organizations’
      <br />
      resources
      {/* eslint-disable-next-line react/jsx-closing-tag-location */}
    </React.Fragment>,
    metric: '~x2',
    // eslint-disable-next-line max-len
    metricDescription: 'sustainability of the support by analyzing the retention of volunteers on Explore and their activity',
    markStyle: { scale: 0.6, rotation: 0 },
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
  metricStyle: ({ rotation }) => ({
    fontFamily: 'Caveat Brush',
    fontSize: fontSizing(5),
    fontWeight: 'normal',
    textAlign: 'center',
    lineHeight: '24px',
    transform: `rotate(-${rotation}deg)`,
    [theme.breakpoints.down('xs')]: { fontSize: fontSizing(4) },
  }),
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
        accessing such expensive resources, Ovio empowers them to advance their mission. Being able to
        measure the scope of our actions sounds essential to improve our user-oriented services and inform
        stakeholders about our positive changes in the world.
      </Typography>
      <Typography variant="body2">
        57% of NGOs claimed to have staff limitations, which was the first brake to their digital development.
        They mostly lack financial resources to hire top quality engineers or have short-term help from volunteers
        which slows down the completion of complex projects.
      </Typography>
      <Grid>
        <Typography className={boldText} variant="body2">
          On the strength of these findings, Ovio gives itself 3 years to evaluate its impact:
        </Typography>
        {objectives.map(({ iconURL, goal, metric, metricDescription, markStyle }, index) => (
          <Grid
            key={metricDescription}
            className={useStyles({ whithoutBorderTop: !index }).subContainer}
            container
            direction={isWidthDown('xs', width) ? 'column' : 'row'}
          >
            <Grid className={goalContainer} container item xs={12} sm={6}>
              <Grid className={iconContainer} item xs={3} md={2}>
                <img className={icon} src={iconURL} alt={goal} />
              </Grid>
              <Grid container alignItems="center" item xs={9} sm={8}>
                <Typography variant="body2">{goal}</Typography>
              </Grid>
            </Grid>
            <Grid container item xs={12} sm={6}>
              <Grid
                container
                justify={isWidthDown('xs', width) ? 'flex-start' : 'center'}
                alignItems="center"
                item
                xs={3}
                sm={4}
              >
                <MetricContainer {...markStyle} container alignItems="center">
                  <Typography className={useStyles(markStyle).metricStyle} variant="h4" color="textSecondary">
                    {metric}
                  </Typography>
                </MetricContainer>
              </Grid>
              <Grid className={descriptionContainer} container alignItems="center" item xs={9} sm={8}>
                <Typography variant="body2" color="textSecondary">{metricDescription}</Typography>
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
