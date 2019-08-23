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
    label: 'Model',
    link: getPageUrl('ModelPage'),
    subMenu: [
      { label: 'Social impact organizations', link: getPageUrl('SocialImpactPage') },
      { label: 'Companies', link: getPageUrl('CompaniesPage') },
      { label: 'Volunteers', link: getPageUrl('VolunteersPage') },
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
    label: 'Ressources',
    link: getPageUrl('HomePage'),
    subMenu: [
      // { label: 'Press', link: getPageUrl('HomePage') },
      { label: 'Blog', link: getPageUrl('BlogPage') },
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
    link: getPageUrl('BlogPage'),
  },
];

export const menuItems = completeMenu.filter(item => !['Ressources', 'Featured'].includes(item.label));

export const footerMenu = completeMenu.filter(item => !['Featured', 'Impact', 'Blog'].includes(item.label));
