import { getPageUrl } from '../Routes';

const menuItems = [
  { label: 'About', link: getPageUrl('AboutPage') },
  { label: 'Model', link: getPageUrl('HomePage') },
  { label: 'Featured', link: getPageUrl('HomePage') },
  { label: 'Impact', link: getPageUrl('HomePage') },
  { label: 'Contact', link: getPageUrl('HomePage') },
  { label: 'Press', link: getPageUrl('HomePage') },
];

export default menuItems;
