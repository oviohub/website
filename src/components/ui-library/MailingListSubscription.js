import React, { useState } from 'react';
import { pick } from 'lodash';
import classNames from 'classnames';
import { Grid, Typography, Button, InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Snackbar from './Snackbar';
import { addContactToMailingList } from '../../services/sendinblueUtils';
import { spacing, contentWidthPixels, fontSizing, stylesBase } from '../styledComponents';

const useStyles = makeStyles(theme => ({
  ...pick(stylesBase, ['muiButtonWhiteBackground', 'muiGridFullScreenWithBackground']),
  backgroundContainer: {
    backgroundColor: theme.palette.text.secondary,
  },
  mainContainer: {
    maxWidth: contentWidthPixels,
    margin: 'auto',
    height: '230px',

    [theme.breakpoints.down('sm')]: {
      height: '300px',
    },
  },
  title4: {
    fontSize: fontSizing(6),
    fontFamily: 'Dosis',
    textAlign: 'center',
    marginBottom: spacing(2),

    [theme.breakpoints.down('sm')]: {
      lineHeight: '30px',
    },
  },
  inputContainer: {
    width: 350,

    '& input': {
      textAlign: 'center',
    },

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  input: {
    borderRadius: 20,
    backgroundColor: theme.palette.primary.main,
    border: '1px solid #ced4da',
    fontSize: fontSizing(2),
    padding: '4px 12px',
    marginBottom: spacing(2),

    '&:focus': {
      borderColor: theme.palette.primary.secondary,
    },
  },
}));

const MailingListSubscription = () => {
  /* "status" manage the status of the request
   * 0 ==> request end with an error
   * 1 ==> request end without error
   * 2 ==> request not ran yet
   */
  const [status, setStatus] = useState(2);
  const [email, setEmail] = useState('');
  const {
    backgroundContainer,
    muiGridFullScreenWithBackground,
    mainContainer,
    title4,
    muiButtonWhiteBackground,
    inputContainer,
    input,
  } = useStyles();

  const handleChange = ({ target: { value } = {} }) => {
    setEmail(value);
  };

  const handleEmailSubmission = async () => {
    const res = await addContactToMailingList(email);

    if (res) {
      setEmail('');
    }

    setStatus(res ? 1 : 0);
  };

  return (
    <Grid className={classNames(backgroundContainer, muiGridFullScreenWithBackground)}>
      <Grid container justify="center" alignItems="center" className={mainContainer}>

        <Grid item xs={10} md={7}>
          <Typography variant="h4" color="primary" className={title4}>Stay in touch with Ovio</Typography>
          <Typography variant="subtitle1">Subscribe to our mailing list.</Typography>
        </Grid>

        <Grid item xs={10} md={5}>
          <Grid className={inputContainer} container direction="column" justify="center">

            <InputBase
              className={input}
              value={email}
              onChange={handleChange}
              placeholder="Your email address"
            />

            <Button className={muiButtonWhiteBackground} onClick={handleEmailSubmission}>
              Subscribe
            </Button>

          </Grid>
        </Grid>

        <Snackbar
          open={status === 1}
          onClose={() => setStatus(2)}
          message="Your email has successfully been add to the mailing."
          variant="success"
        />

        <Snackbar
          open={!status}
          onClose={() => setStatus(2)}
          message="Please check your email address and try again."
          variant="error"
        />
      </Grid>
    </Grid>
  );
};


export default MailingListSubscription;
