import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography, Button } from '@material-ui/core';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import { makeStyles } from '@material-ui/styles';
import { spacing, stylesBase } from '../styledComponents';
import { toFormattedTaggedText } from '../../services/formatting';
import iconGithub from '../../assets/icons/icon.github.white.svg';

const { muiGridBlockContainer } = stylesBase;
const useStyles = makeStyles(theme => ({
  muiGridBlockContainer,
  itemContainer: { margin: `${spacing(10)} 0px ${spacing(10)}` },
  textContainer: {
    marginLeft: spacing(4),
    [theme.breakpoints.down('sm')]: { marginLeft: '0px' },
  },
  subtitle2: ({ withoutTitle }) => ({
    paddingTop: withoutTitle && spacing(20),
    width: withoutTitle && '50%',
  }),
  blockBody: ({ withMarginBotton, withSubtitle }) => ({
    margin: `0px 0px 0px ${spacing(4)}`,
    marginBottom: withMarginBotton ? spacing(4) : '0px',
    fontSize: withSubtitle && '12px',
  }),
  itemTitle: ({ containsText }) => ({
    marginLeft: spacing(4),
    [theme.breakpoints.down('xs')]: !containsText && {
      marginLeft: '0px',
    },
  }),
  itemSubtitle: {
    margin: `0px 0px ${spacing(2)} ${spacing(4)}`,
  },
  buttonLink: {
    marginLeft: spacing(4),
    textDecoration: 'none',
  },
  image: {
    objectFit: 'contain',
    [theme.breakpoints.down('sm')]: { width: '40%' },
    [theme.breakpoints.down('xs')]: { width: '260px' },
  },
  icon: { marginRight: spacing(2) },
  markImg: {
    position: 'absolute',
    left: '0px',
    zIndex: -1,
    [theme.breakpoints.down('xs')]: { paddingTop: '80px' },
  },
}));

const BlockHowToTemplate = ({ title: blockTitle, subtitle: blockSubtitle, markImage, processItems, width }) => {
  const {
    // eslint-disable-next-line no-shadow
    muiGridBlockContainer,
    itemContainer,
    textContainer,
    buttonLink,
    image,
    icon,
    markImg,
    itemSubtitle,
  } = useStyles({ withoutTitle: !blockTitle });
  return (
    <Grid className={muiGridBlockContainer}>
      <img className={markImg} src={markImage && markImage.publicURL} alt={blockTitle} />
      {blockTitle && <Typography variant="h2">{blockTitle}</Typography>}
      <Typography variant="subtitle2">{blockSubtitle}</Typography>
      <Grid>
        {processItems.map(({ title, subtitle, text, button, image: { publicURL: imageURL } }, index) => {
          const { link: btnLink, withGitHubIcon, text: btnText } = button || {};
          const xs = title ? 11 : 10;
          const { itemTitle, blockBody } = useStyles({
            containsText: title, withMarginBotton: btnLink, withSubtitle: subtitle,
          });
          return (
            <Grid
              className={itemContainer}
              key={text}
              container
              direction={isWidthDown('xs', width) ? 'column' : 'row'}
            >
              <img className={image} src={imageURL} alt={text} />
              <Grid
                className={textContainer}
                container
                item
                direction={isWidthDown('xs', width) ? 'row' : 'column'}
                md={subtitle ? 6 : 4}
                sm={subtitle ? 7 : 6}
                xs={12}
              >
                <Typography className={itemTitle} component="p" variant="h2" color="textSecondary">
                  {title || index + 1}
                </Typography>
                <Grid
                  container
                  item
                  alignItems={isWidthDown('xs', width) ? 'center' : 'flex-start'}
                  xs={isWidthDown('xs', width) ? xs : false}
                >
                  {subtitle && <Typography className={itemSubtitle} variant="body2">{subtitle}</Typography>}
                  <Typography className={blockBody} variant="body2">{toFormattedTaggedText(text, '11px')}</Typography>
                  {btnLink && (
                    <a href={btnLink} className={buttonLink} target="_blank" rel="noreferrer noopener">
                      <Button>
                        {withGitHubIcon && <img className={icon} src={iconGithub} alt={btnText} />}
                        {btnText}
                      </Button>
                    </a>
                  )}
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

BlockHowToTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  markImage: PropTypes.shape({
    publicURL: PropTypes.string.isRequired,
  }).isRequired,
  processItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    text: PropTypes.string.isRequired,
    image: PropTypes.shape({
      publicURL: PropTypes.string.isRequired,
    }).isRequired,
    button: PropTypes.shape({
      text: PropTypes.string.isRequired,
      withGitHubIcon: PropTypes.bool,
      link: PropTypes.string.isRequired,
    }),
  })).isRequired,
  width: PropTypes.string.isRequired,
};

export default withWidth()(BlockHowToTemplate);
