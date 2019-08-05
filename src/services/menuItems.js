import { getPageUrl } from '../Routes';

const completeMenu = [
  {
    label: 'About',
    link: getPageUrl('AboutPage'),
    subMenu: [
      { label: 'Our Story', link: getPageUrl('HomePage') },
      { label: 'Our Impact', link: getPageUrl('HomePage') },
    ],
  },
  {
    label: 'Model',
    link: getPageUrl('HomePage'),
    subMenu: [
      { label: 'Social impact organizations', link: getPageUrl('HomePage') },
      { label: 'Companies', link: getPageUrl('HomePage') },
      { label: 'Volunteers', link: getPageUrl('VolunteersPage') },
    ],
  },
  {
    label: 'Featured',
    link: getPageUrl('HomePage'),
  },
  {
    label: 'Impact',
    link: getPageUrl('HomePage'),
  },
  {
    label: 'Ressources',
    link: getPageUrl('HomePage'),
    subMenu: [
      { label: 'Press', link: getPageUrl('HomePage') },
      { label: 'Blog', link: getPageUrl('HomePage') },
    ],
  },
  {
    label: 'Contact',
    link: getPageUrl('HomePage'),
    subMenu: [
      { label: 'hello@oviohub.com', href: 'mailto:hello@oviohub.com' },
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
