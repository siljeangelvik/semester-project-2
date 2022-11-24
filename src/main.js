import './css/style.css';
import javascriptLogo from '../public/javascript.svg'
import viteLogo from '../public/vite.svg';
import { setupCounter } from './js/counter.js';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
       <p><a href="https://semester-project-2-notes.netlify.app">Gantt Chart - Netlify</a></p>
`;

setupCounter(document.querySelector('#counter'))