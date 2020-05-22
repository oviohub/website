import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { Grid, Typography, withStyles, Box } from '@material-ui/core';

import LinkButton from '../ui-library/LinkButton';
import { useWidthDown } from '../../hooks/width';

const TextColumns = ({ items, imageGridSize, textGridSize, classes }) => {
  const isDownSm = useWidthDown('sm');

  return (
    <Grid container direction="column" spacing={4}>
      {items.map(({ title, content, image, buttons, key }) => (
        <Grid
          key={key || image}
          item
          container
          direction={isDownSm ? 'column' : 'row'}
          alignItems="center"
          spacing={4}
        >
          <Grid
            item
            xs={imageGridSize || 10}
            md={imageGridSize || 2}
            className={classes.imageContainer}
          >
            <img src={image} alt={title} className={classes.image} />
          </Grid>

          <Grid item xs={textGridSize || 10}>
            {title && <Typography variant="h4">{title}</Typography>}

            {content && <Typography variant="body1">{content}</Typography>}

            {!isEmpty(buttons) && (
              <Box mt={3}>
                <Grid container spacing={3}>
                  {(buttons || []).map(({ text, key, ...button }) => (
                    <Grid key={key || text} item>
                      <LinkButton {...button}>{text}</LinkButton>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

const textPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.element]);
export const textColumnsPropTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: textPropType,
      content: textPropType,
      image: PropTypes.string,
      buttons: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          to: PropTypes.string,
          path: PropTypes.string,
        }).isRequired,
      ),
    }).isRequired,
  ).isRequired,
  imageGridSize: PropTypes.number,
  textGridSize: PropTypes.number,
};

TextColumns.propTypes = textColumnsPropTypes;

const styles = () => ({
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '100%',
  },
});

export default withStyles(styles)(TextColumns);
