import React from 'react';
import PropTypes from 'prop-types';
import { Snackbar as MuiSnackbar, IconButton, Typography } from '@material-ui/core';
import { amber, green, grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/styles';
import { Close as CloseIcon } from '@material-ui/icons';

import { spacing } from '../styledComponents';

const useStyles = makeStyles((theme) => {
  const getBackgroundColor = (variant) => {
    switch (variant) {
      case 'success': return green[600];
      case 'error': return theme.palette.error.main;
      case 'warning': return amber[700];
      default: return grey[600];
    }
  };

  return {
    snackbar: {
      display: 'block',
      maxWidth: 300,
    },
    content: ({ variant }) => ({
      display: 'flex',
      flexWrap: 'nowrap',
      backgroundColor: getBackgroundColor(variant),
    }),
    icon: {
      fontSize: 20,
    },
    iconButton: {
      padding: spacing(1),
    },
  };
});

const Snackbar = ({ message, open, onClose, variant, ...others }) => {
  const { snackbar, content, icon, iconButton } = useStyles({ variant });

  return (
    <MuiSnackbar
      open={open}
      onClose={onClose}
      className={snackbar}
      ContentProps={{
        'aria-describedby': 'message-id',
        className: content,
      }}
      message={(
        <Typography id="message-id" color="inherit">
          {message}
        </Typography>
      )}
      action={(
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={onClose}
          className={iconButton}
        >
          <CloseIcon className={icon} />
        </IconButton>
      )}
      {...others}
    />
  );
};

Snackbar.propTypes = {
  message: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']),
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  autoHideDuration: PropTypes.number,
  anchorOrigin: PropTypes.object,
};

Snackbar.defaultProps = {
  onClose: () => {},
  variant: 'info',
  autoHideDuration: 6000,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
};

export default Snackbar;
