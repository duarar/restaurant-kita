/* eslint-disable import/no-unresolved */
import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
// css

import '../styles/root.css';
import '../styles/footer.css';
import '../styles/responsive.css';
import '../styles/utils.css';

// js
import App from './views/App';
import swRegister from './utils/sw-register';
import { WebSocketInitiator } from './utils/websocket-initiator';
import CONFIG from './global/config';
// components
import './components/navbar';
import './components/hero';
import './components/footer';

// init App
const app = new App({
  button: document.querySelector('.menu'),
  drawer: document.querySelector('.nav-list'),
  content: document.querySelector('#main-content'),
  toggle: document.querySelector('#dark-mode'),
  currentTheme: localStorage.getItem('theme'),
});

window.addEventListener('hashchange', () => {
  document.querySelector('.container').scrollIntoView();
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
