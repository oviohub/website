import { getPageUrl } from '../Routes';

const completeMenu = [
  {
    label: 'About',
    link: getPageUrl('AboutPage'),
    subMenu: [
      { label: 'Our Story', link: getPageUrl('AboutPage') },
      { label: 'Our Foundation', link: getPageUrl('FoundationPage') },
    ],
  },
  {
    label: 'Get Involved',
    // link: getPageUrl('ModelPage'),
    subMenu: [
      { label: 'Developers', link: getPageUrl('VolunteersPage') },
      // { label: 'Maintainers', link: getPageUrl('FoundationPage', '#reachOut') },
      { label: 'Companies', link: getPageUrl('CompaniesPage') },
    ],
  },
  {
    label: 'Featured',
    link: getPageUrl('HomePage'),
  },
  {
    label: 'Contact',
    link: getPageUrl('ContactUsPage'),
    subMenu: [
      { label: 'hello@ovio.org', href: 'mailto:hello@ovio.org' },
      { label: '+1 650 283-9210' },
    ],
  },
  {
    label: 'Foundation',
    link: getPageUrl('FoundationPage'),
  },
];

export const menuItems = completeMenu.filter(item => !['Featured'].includes(item.label));

export const footerMenu = completeMenu.filter(item => !['Featured', 'Impact', 'Foundation'].includes(item.label));
