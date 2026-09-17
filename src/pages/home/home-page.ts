import styles from './home-page.module.scss';

export function Home(): HTMLElement {
  const page = document.createElement('main');

  page.className = styles.home;

  const container = document.createElement('div');

  page.append(container);

  return page;
}
