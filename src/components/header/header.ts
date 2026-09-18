import { createBurgerButton } from '@/components/burger-menu/burger-menu';
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

export function createHeader(): HTMLElement {
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

  const actions = document.createElement('div');
  actions.className = styles.actions;

  const loginButton = document.createElement('button');
  loginButton.type = 'button';
  loginButton.className = styles.loginButton;
  loginButton.textContent = 'Log In';

  const signUpButton = document.createElement('button');
  signUpButton.type = 'button';
  signUpButton.className = styles.signUpButton;
  signUpButton.textContent = 'Sign Up';

  const navContainer = document.createElement('div');
  navContainer.classList = styles.navContainer;

  const burger = createBurgerButton();

  burger.addEventListener('click', () => {
    navContainer.classList.toggle(styles.isOpen);
  });

  document.addEventListener('keydown', (event) => {
    if (
      event.key === 'Escape' &&
      navContainer.classList.contains(styles.isOpen)
    ) {
      navContainer.classList.remove(styles.isOpen);
    }
  });

  navContainer.append(nav, actions);

  actions.append(loginButton, signUpButton);

  logo.append(logoImg, logoText);
  nav.append(list);

  header.append(logo, navContainer, burger);

  return header;
}
