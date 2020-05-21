import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Box, Typography, withStyles } from '@material-ui/core';
import { pick } from 'lodash';

import { stylesBase } from '../styledComponents';
import { useWidthDown } from '../../hooks/width';

const TextColumnSection = ({
  sectionTitle,
  sectionSubTitle,
  list,
  classes,
}) => {
  const isDownSm = useWidthDown('sm');

  return (
    <div className={classes.muiGridBlockContainer}>
      {sectionTitle && <Typography variant="h2">{sectionTitle}</Typography>}
      {sectionSubTitle && (
        <Typography variant="subtitle2">{sectionSubTitle}</Typography>
      )}

      <Grid container direction="column" spacing={4}>
        {list.map(({ title, content, image }) => (
          <Grid
            key={title}
            item
            container
            direction={isDownSm ? 'column' : 'row'}
            alignItems="center"
            spacing={4}
          >
            <Grid item xs={10} md={2}>
              <Box component="img" width="100%" src={image} alt={title} />
            </Grid>

            <Grid item xs={10}>
              {title && <Typography variant="h4">{title}</Typography>}
              {content && <Typography variant="body1">{content}</Typography>}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const textPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.element]);

TextColumnSection.propTypes = {
  sectionTitle: textPropType,
  sectionSubTitle: textPropType,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: textPropType,
      content: textPropType,
      image: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

const styles = () => ({
  ...pick(stylesBase, ['muiGridBlockContainer']),
});

export default withStyles(styles)(TextColumnSection);
