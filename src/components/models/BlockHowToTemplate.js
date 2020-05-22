import React from 'react';
import PropTypes from 'prop-types';
import { pick } from 'lodash';
import { Typography, withStyles } from '@material-ui/core';

import TextColumns, { textColumnsPropTypes } from './TextColumns';
import { stylesBase } from '../styledComponents';
import { useWidthDown } from '../../hooks/width';

const BlockHowToTemplate = ({
  sectionTitle,
  sectionSubtitle,
  markImage,
  items,
  classes,
}) => {
  const isDownXs = useWidthDown('xs');

  return (
    <div className={classes.muiGridBlockContainer}>
      <img className={classes.markImg} src={markImage} alt={sectionTitle} />

      {sectionTitle && <Typography variant="h2">{sectionTitle}</Typography>}

      {sectionSubtitle && (
        <Typography variant="subtitle2">{sectionSubtitle}</Typography>
      )}

      <TextColumns
        items={items}
        classes={pick(classes, 'image')}
        imageGridSize={isDownXs ? 10 : 4}
        textGridSize={isDownXs ? 10 : 6}
      />
    </div>
  );
};

const textPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.element]);

BlockHowToTemplate.propTypes = {
  sectionTitle: textPropType,
  sectionSubtitle: textPropType,
  markImage: PropTypes.string.isRequired,
  ...textColumnsPropTypes,
};

const styles = (theme) => ({
  ...pick(stylesBase, 'muiGridBlockContainer'),

  image: {
    width: 300,

    [theme.breakpoints.down('xs')]: {
      width: 200,
    },
  },

  markImg: {
    position: 'absolute',
    left: '0px',
    zIndex: -1,

    [theme.breakpoints.down('xs')]: {
      paddingTop: '80px',
    },
  },
});

export default withStyles(styles)(BlockHowToTemplate);
