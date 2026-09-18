import { createHeader } from '@/components/header/header';
import '@/styles/index.scss';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('App element not found');
}

const header = createHeader();

app.append(header);
