import { getPageUrl } from '../Routes';

const completeMenu = [
  {
    label: 'About',
    link: getPageUrl('AboutPage'),
    subMenu: [
      { label: 'Our Story', link: getPageUrl('AboutPage') },
      { label: 'Our Impact', link: getPageUrl('ImpactPage') },
    ],
  },
  {
    label: 'Get Involved',
    link: getPageUrl('ModelPage'),
    subMenu: [
      { label: 'Volunteers', link: getPageUrl('VolunteersPage') },
      { label: 'Organizations', link: getPageUrl('SocialImpactPage') },
      { label: 'Companies', link: getPageUrl('CompaniesPage') },
    ],
  },
  {
    label: 'Featured',
    link: getPageUrl('HomePage'),
  },
  {
    label: 'Impact',
    link: getPageUrl('ImpactPage'),
  },
  {
    label: 'Resources',
    link: getPageUrl('HomePage'),
    subMenu: [
      { label: 'Press', link: getPageUrl('HomePage') },
      { label: 'Blog', link: getPageUrl('HomePage') },
    ],
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
    label: 'Blog',
    link: getPageUrl('HomePage'),
  },
];

export const menuItems = completeMenu.filter(item => item.label !== 'Ressources');

export const footerMenu = completeMenu.filter(item => !['Featured', 'Impact', 'Blog'].includes(item.label));
