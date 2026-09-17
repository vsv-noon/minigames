import styles from './header.module.scss';
import logoUrl from '@/assets/images/brand-logo.svg';

type NavigationItem = {
  label: string;
  href: string;
};

const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Library', href: '/library' },
  { label: 'Tournaments', href: '#tournaments' },
  { label: 'Community', href: '#community' },
];

export function Header(): HTMLElement {
  const header = document.createElement('header');
  header.className = styles.header;

  const logo = document.createElement('div');
  logo.className = styles.logo;
  const logoImg = document.createElement('img');
  logoImg.src = logoUrl;
  logoImg.alt = 'logo';
  logoImg.className = styles.logoImg;

  const logoText = document.createElement('span');
  logoText.textContent = 'MiniGames';

  const nav = document.createElement('nav');
  nav.className = styles.nav;
  nav.setAttribute('aria-label', 'Main navigation');

  const list = document.createElement('ul');
  list.className = styles.list;

  for (const item of navigationItems) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');

    link.className = styles.link;
    link.href = item.href;
    link.textContent = item.label;

    listItem.append(link);
    list.append(listItem);
  }

  logo.append(logoImg, logoText);
  nav.append(list);

  header.append(logo, nav);

  return header;
}
