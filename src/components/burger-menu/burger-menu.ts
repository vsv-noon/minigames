import styles from './burger-menu.module.scss';

export function createBurgerButton(): HTMLButtonElement {
  const button = document.createElement('button');
  button.className = styles.burgerButton;
  button.setAttribute('aria-label', 'Open menu');
  button.setAttribute('aria-expanded', 'false');

  const lineTop = document.createElement('span');
  const lineMiddle = document.createElement('span');
  const lineBottom = document.createElement('span');

  lineTop.className = styles.line;
  lineMiddle.className = styles.line;
  lineBottom.className = styles.line;

  button.append(lineTop, lineMiddle, lineBottom);

  button.addEventListener('click', () => {
    const isOpen = button.classList.toggle(styles.isOpen);
    console.log(isOpen);

    button.setAttribute('area-expanded', String(isOpen));
    button.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      button.classList.remove(styles.isOpen);
    }
  });

  return button;
}
