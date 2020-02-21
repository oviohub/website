import fetch from 'node-fetch';
import { SIB_API_KEY, SIB_CONTACT_ENDPOINT, SIB_CONTACT_LIST_ID } from '../constants';

function checkStatus(res) {
  // res.ok = res.status >= 200 && res.status < 300
  if (res && res.ok) {
    return res;
  }
  throw new Error('Bad Request Error');
}

export async function addContactToMailingList(email) {
  const body = JSON.stringify({
    email,
    listIds: [SIB_CONTACT_LIST_ID],
  });

  let status = false;
  await fetch(SIB_CONTACT_ENDPOINT, {
    method: 'post',
    body,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      'api-key': SIB_API_KEY,
    },
  })
    .then(checkStatus)
    .then(() => {
      status = true;
    })
    .catch(() => {
      // eslint-disable-next-line no-console
      console.error('Contact creation failed');
    });
  return status;
}
