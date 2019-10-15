import awscloud from '../assets/logo/companies/awscloud.svg';
import optimizely from '../assets/logo/companies/optimizely.png';
// import salesforce from '../assets/logo/companies/salesforce.png';

import cms from '../assets/logo/organizations/cms.jpg';
import connectOurKids from '../assets/logo/organizations/connectOurKids.png';
import miracleMessages from '../assets/logo/organizations/miracleMessages.png';
import oppia from '../assets/logo/organizations/oppia.png';
import redcross from '../assets/logo/organizations/redcross.jpg';
import replate from '../assets/logo/organizations/replate.png';
import unicef from '../assets/logo/organizations/unicef.png';
import wfp from '../assets/logo/organizations/wfp.jpg';

export const companiesTestimony = [
  {
    name: 'Amazon web services',
    logo: awscloud,
    order: 1,
    link: 'https://aws.amazon.com',
  },
  {
    name: 'Optimizely',
    logo: optimizely,
    order: 3,
    link: 'https://www.optimizely.com',
  },
  // {
  //   name: 'Salesforce',
  //   logo: salesforce,
  //   order: 1,
  //   link: 'https://www.salesforce.org/',
  // },
];

export const organizationsTestimony = [
  {
    name: 'Red Cross',
    logo: redcross,
    order: 1,
    link: 'https://www.hotosm.org/',
  },
  {
    name: 'Replate',
    logo: replate,
    order: 3,
    link: 'https://www.re-plate.org/',
  },
  {
    name: 'UNICEF',
    logo: unicef,
    order: 1,
    link: 'https://www.unicef.org/innovation/',
  },
  {
    name: 'WFP',
    logo: wfp,
    order: 1,
    link: 'https://www.wfp.org',
  },
  {
    name: 'Centers for Medicare and Medicaid Services',
    logo: cms,
    order: 3,
    link: 'https://www.cms.gov',
  },
  {
    name: 'Connect Our Kids',
    logo: connectOurKids,
    order: 3,
    link: 'https://www.connectourkids.org',
  },
  {
    name: 'Miracle Messages',
    logo: miracleMessages,
    order: 3,
    link: 'https://miraclemessages.org',
  },
  {
    name: 'Oppia',
    logo: oppia,
    order: 3,
    link: 'https://www.oppia.org/splash',
  },
];

export const testimonies = companiesTestimony.concat(organizationsTestimony)
  .sort(({ order: aOrder }, { order: bOrder }) => {
    if (aOrder > bOrder) return 1;
    return -1;
  });
