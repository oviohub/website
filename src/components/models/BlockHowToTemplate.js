import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography, Button } from '@material-ui/core';
import { isWidthDown } from '@material-ui/core/withWidth';
import { makeStyles } from '@material-ui/styles';
import { spacing, stylesBase, useWidth } from '../styledComponents';
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
  blockBody: ({ withMarginBotton, taggedTextVersion }) => ({
    margin: `0px 0px 0px ${spacing(4)}`,
    marginBottom: withMarginBotton ? spacing(4) : '0px',
    fontSize: taggedTextVersion && '12px',
  }),
  itemTitle: {
    marginLeft: spacing(4),
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

const BlockHowToTemplate = ({
  title: blockTitle,
  subtitle: blockSubtitle,
  taggedTextVersion,
  markImage,
  processItems,
  button: blockButton,
}) => {
  const width = useWidth();
  const {
    // eslint-disable-next-line no-shadow
    muiGridBlockContainer,
    itemContainer,
    textContainer,
    buttonLink,
    image,
    icon,
    markImg,
  } = useStyles({ withoutTitle: !blockTitle });
  const { text: blockButtonText, link: blockButtonLink } = blockButton || {};
  return (
    <Grid className={muiGridBlockContainer}>
      <img className={markImg} src={markImage && markImage.publicURL} alt={blockTitle} />
      {blockTitle && <Typography variant="h2">{blockTitle}</Typography>}
      <Grid item xs={12} md={7}>
        <Typography variant="subtitle2">{blockSubtitle}</Typography>
      </Grid>
      <Grid>
        {processItems.map(({ title, text, button, image: { publicURL: imageURL } }) => {
          const { link: btnLink, withGitHubIcon, text: btnText } = button || {};
          const { itemTitle, blockBody } = useStyles({ withMarginBotton: btnLink, taggedTextVersion });
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
                md={taggedTextVersion ? 6 : 4}
                sm={taggedTextVersion ? 7 : 6}
                xs={12}
              >
                {title && (
                  <Typography className={itemTitle} component="p" variant="h2" color="textSecondary">
                    {title}
                  </Typography>
                )}
                <Grid container wrap="nowrap" direction="column" item xs={isWidthDown('xs', width) ? 11 : false}>
                  <Typography className={blockBody} variant="body1">{toFormattedTaggedText(text, '11px')}</Typography>
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
      {blockButtonText && (
        <Grid container item xs={6} justify="center">
          <a href={blockButtonLink} className={buttonLink} target="_blank" rel="noreferrer noopener">
            <Button>{blockButtonText}</Button>
          </a>
        </Grid>
      )}
    </Grid>
  );
};

BlockHowToTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  markImage: PropTypes.shape({
    publicURL: PropTypes.string.isRequired,
  }).isRequired,
  taggedTextVersion: PropTypes.bool,
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
  button: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
};

export default BlockHowToTemplate;
