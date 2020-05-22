import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, withStyles } from '@material-ui/core';
import { pick } from 'lodash';

import TextColumns, { textColumnsPropTypes } from './TextColumns';
import { stylesBase } from '../styledComponents';

const TextColumnSection = ({
  sectionTitle,
  sectionSubTitle,
  items,
  classes,
}) => (
  <div className={classes.muiGridBlockContainer}>
    {sectionTitle && <Typography variant="h2">{sectionTitle}</Typography>}
    {sectionSubTitle && (
      <Box mb={4}>
        <Typography variant="body2">{sectionSubTitle}</Typography>
      </Box>
    )}

    <TextColumns
      classes={pick(classes, ['image', 'imageContainer'])}
      items={items}
    />
  </div>
);

const textPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.element]);

TextColumnSection.propTypes = {
  sectionTitle: textPropType,
  sectionSubTitle: textPropType,
  ...textColumnsPropTypes,
};

const styles = () => ({
  ...pick(stylesBase, ['muiGridBlockContainer']),

  image: {},
});

export default withStyles(styles)(TextColumnSection);
