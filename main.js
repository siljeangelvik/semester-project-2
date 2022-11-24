import './style.css';
import javascriptLogo from './public/javascript.svg'
import viteLogo from './public/vite.svg';
import { setupCounter } from './counter.js';
import { createChart } from './src/js/ganttchart'

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
        <p><a href="./src/ganttchart.html">Gantt Chart (main.js) - ./src/</a></p>
        <p><a href="${createChart}">Gantt Chart (main.js) - ${createChart}</a></p>
    <p><a href="https://angelvik-semester-project-2.netlify.app/src/ganttchart.html">Gantt Chart (main.js) - https://</a></p>
  </div>
`;

setupCounter(document.querySelector('#counter'))
