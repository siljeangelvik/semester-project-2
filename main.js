import '/src/css/style.css';
import '/src/css/index.css';
import javascriptLogo from '/src/assets/javascript.svg';
import {setupCounter} from '/src/js/counter.js';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <p><a href="index.html">Index HTML</a></p>
    <p><a href="resources/ganttchart/ganttchart.html">Gantt Chart</a></p>

    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector('#counter'))
