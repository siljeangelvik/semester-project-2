import 'src/css/ganttchart.css';
import viteLogo from '../../public/vite.svg';
import javascriptLogo from '../../public/javascript.svg'
import { setupCounter } from '../../counter';
import { createChart } from './ganttchart'
document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://angelvik-semester-project-2.netlify.app/src/ganttchart.html" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <p><a href="${createChart}">Gantt Chart</a></p>
  </div>
`;

setupCounter(document.querySelector('#counter'))
