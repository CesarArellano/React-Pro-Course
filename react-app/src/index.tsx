import ReactDOM from 'react-dom/client';
import { MainApp } from './MainApp';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <MainApp />
);