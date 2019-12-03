/* eslint-disable prefer-destructuring */

// Send in Blue config (API key is mandatory)
export const SIB_API_KEY = process.env.SIB_API_KEY;
export const SIB_CONTACT_LIST_ID = parseFloat(process.env.SIB_CONTACT_LIST_ID) || 4;
export const SIB_CONTACT_ENDPOINT = 'https://api.sendinblue.com/v3/contacts';
