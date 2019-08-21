import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { fontSizing, colors, stylesBase, spacing } from '../styledComponents';
import { toFormattedBoldText } from '../../services/formatting';
import statMark from '../../assets/impactPage/statMark.svg';
import iconProvide from '../../assets/icons/icon.provide.orange.png';
import iconOffer from '../../assets/icons/icon.offer.orange.png';
import iconMaintain from '../../assets/icons/icon.maintain.orange.png';

const objectifs = [
  {
    iconURL: iconProvide,
    goal: '<bold>Provide<bold> volunteering support to organizations without forcing them to cut into their budget',
    metric: '~ $10k',
    metricDescription: 'amount of $ organizations are saving using Explore compare to outsourcing or hiring talents',
    markStyle: { scale: 0.85, rotation: 0 },
  },
  {
    iconURL: iconOffer,
    // eslint-disable-next-line max-len
    goal: "<bold>Offer<bold> a top-quality tech that allows organizations to develop great products and services that fits their beneficent' needs",
    metric: '~ 5+ years exp',
    metricDescription: 'quality of the tech through talents years of experience and skills',
    markStyle: { scale: 0.9, rotation: 90 },
  },
  {
    iconURL: iconMaintain,
    goal: '<bold>Maintain<bold> sustainable support that strengthens organizations’\nresources',
    metric: '~x2',
    // eslint-disable-next-line max-len
    metricDescription: 'sustainability of the support by analyzing the retention of volunteers on Explore and their activity',
    markStyle: { scale: 0.6, rotation: 0 },
  },
];

const { muiGridBlockContainer } = stylesBase;
const useStyles = makeStyles({
  muiGridBlockContainer,
  goalContainer: ({ whithoutBorderTop }) => ({
    padding: `${spacing(4)} 0px`,
    borderTop: !whithoutBorderTop && `1px solid ${colors.darkBlue}1a`,

  }),
  title4: {
    fontStyle: 'italic',
    lineHeight: '30px',
    color: colors.orange,
    marginBottom: spacing(4),
  },
  boldText: {
    margin: `${spacing(6)} 0px ${spacing(4)}`,
    fontWeight: 'bold',
  },
  icon: {
    width: '65px',
  },
  metricContainer: ({ scale, rotation }) => ({
    backgroundImage: `url(${statMark})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: `calc(${scale} * 100px)`,
    height: `calc(${scale} * 100px)`,
    transform: `rotate(${rotation}deg)`,
  }),
  metricStyle: ({ rotation }) => ({
    fontFamily: 'Caveat Brush',
    fontSize: fontSizing(5),
    fontWeight: 'normal',
    textAlign: 'center',
    lineHeight: '24px',
    transform: `rotate(-${rotation}deg)`,
  }),
  descriptionContainer: {
    paddingLeft: spacing(4),
  },
});

const OurSolution = () => {
  // eslint-disable-next-line no-shadow
  const { muiGridBlockContainer, title4, boldText, icon, descriptionContainer } = useStyles();
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
        {objectifs.map(({ iconURL, goal, metric, metricDescription, markStyle }, index) => (
          <Grid key={goal} container className={useStyles({ whithoutBorderTop: !index }).goalContainer}>
            <Grid container item xs={6}>
              <Grid item xs={2}>
                <img className={icon} src={iconURL} alt={goal} />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body2">{toFormattedBoldText(goal)}</Typography>
              </Grid>
            </Grid>
            <Grid container item xs={6}>
              <Grid item xs={2} container justify="center" alignItems="center">
                <Grid className={useStyles(markStyle).metricContainer} container alignItems="center" justify="center">
                  <Typography className={useStyles(markStyle).metricStyle} variant="h4" color="textSecondary">
                    {metric}
                  </Typography>
                </Grid>
              </Grid>
              <Grid className={descriptionContainer} item xs={7} container alignItems="center">
                <Typography variant="body2" color="textSecondary">{metricDescription}</Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default OurSolution;
