import React from 'react';
import ReactDOM from 'react-dom';
import { CalendarApp } from './CalendarApp';

import './styles.css';

ReactDOM.render(
  <CalendarApp />,
  document.getElementById('root')
);


// Default Command: workbox.cmd generateSW workbox-config.js
// Custom Command: workbox.cmd injectManifest