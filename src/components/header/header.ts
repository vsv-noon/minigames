import styles from './header.module.scss';
import logoUrl from '@/assets/images/brand-logo.svg';

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

  logo.append(logoImg, logoText);

  header.append(logo);

  return header;
}
