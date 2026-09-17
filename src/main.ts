import { Header } from './components/header/header';
import './styles/index.scss';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('App element not found');
}

const header = Header();

app.append(header);
