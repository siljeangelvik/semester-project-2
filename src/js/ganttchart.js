import '../css/ganttchart.css';

function createChart(e) {
    const days = document.querySelectorAll(".chart-values li");
    const tasks = document.querySelectorAll(".chart-bars li");
    const daysArray = [...days];

    tasks.forEach(el => {
        const duration = el.dataset.duration.split("-");
        const startDay = duration[0];
        const endDay = duration[1];
        let left,
            width;

        if (startDay.endsWith("½")) {
            const filteredArray = daysArray.filter(day => day.textContent === startDay.slice(0, -1));
            left = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth / 2;
        } else {
            const filteredArray = daysArray.filter(day => day.textContent === startDay);
            left = filteredArray[0].offsetLeft;
        }

        if (endDay.endsWith("½")) {
            const filteredArray = daysArray.filter(day => day.textContent === endDay.slice(0, -1));
            width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth / 2 - left;
        } else {
            const filteredArray = daysArray.filter(day => day.textContent === endDay);
            width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth - left;
        }

        // apply css
        el.style.left = `${left}px`;
        el.style.width = `${width}px`;
        if (e.type === "load") {
            el.style.backgroundColor = el.dataset.color;
            el.style.opacity = 1;
        }
    });
}


window.addEventListener("load", createChart);
window.addEventListener("resize", createChart);

document.querySelector('#ganttchart').innerHTML = `
<div class="heading">
    <h1>Semester Project 2: Gantt Chart</h1>
    <em>Week 46 is not knowingly and purposely not added to the Gantt chart.</em>
</div>

<!-- WEEK 47 -->
<div class="chart-wrapper" id="week47">
    <div class="week">
        <h2>Week 47</h2>
        <div class="dates">
            <p>Nov 21</p>
            <p>Nov 22</p>
            <p>Nov 23</p>
            <p>Nov 24</p>
            <p>Nov 25</p>
            <p>Nov 26</p>
            <p>Nov 27</p>
        </div>
    </div>
    <ul class="chart-values">
        <li>mon</li>
        <li>tue</li>
        <li>wed</li>
        <li>thu</li>
        <li>fri</li>
        <li>sat</li>
        <li>sun</li>
    </ul>
    <ul class="chart-bars">
        <li data-duration="tue-tue" data-color="#b03532">Read <a href="https://noroff-content.gitlab.io/feu/semester-project-2/brief.html">Brief</a></li>
        <li data-duration="tue-wed" data-color="#b03532">Read Docs of <a href="https://noroff-content.gitlab.io/feu/semester-project-2/brief.html#approved-resources">Approved Resources</a></li>
        <li data-duration="tue-wed½" data-color="#b03532">Make <a href="/">GanttChart</a>,<a href="#week47"> Week 47</a></li>
        <li data-duration="wed-wed" data-color="#33a8a5">Trello board</li>
        <li data-duration="wed½-thu½" data-color="#30997a">StyleTile Figma</li>
        <li data-duration="thu-fri½" data-color="#30997a">Design Figma</li>
        <li data-duration="thu½-fri" data-color="#6a478f">Prototype Figma</li>
        <li data-duration="fri-sat½" data-color="#da6f2b">Unknown?</li>
    </ul>
</div>

<!-- WEEK 48 -->
<div class="chart-wrapper" id="week48">
    <div class="week">
        <h2>Week 48</h2>
        <div class="dates">
            <p>Nov 28</p>
            <p>Nov 29</p>
            <p>Nov 30</p>
            <p>Dec 01</p>
            <p>Dec 02</p>
            <p>Dec 03</p>
            <p>Dec 04</p>
        </div>
    </div>
    <ul class="chart-values">
        <li>mon</li>
        <li>tue</li>
        <li>wed</li>
        <li>thu</li>
        <li>fri</li>
        <li>sat</li>
        <li>sun</li>
    </ul>
    <ul class="chart-bars">
        <li data-duration="mon-mon" data-color="#b03532">Make <a href="/">GanttChart</a>,<a href="#week48"> Week 48</a></li>
        <li data-duration="mon-thu½" data-color="#b03532">User Stories</li>
        <li data-duration="tue-fri½" data-color="#33a8a5">User Experience</li>
        <li data-duration="wed-sat½" data-color="#30997a">Best Practices</li>
        <li data-duration="sat½-sun" data-color="#6a478f">Design Appeal</li>
        <li data-duration="sun-sun" data-color="#6a478f">Configuration</li>
    </ul>
</div>

<!-- WEEK 49 -->
<div class="chart-wrapper" id="week49">
    <div class="week">
        <h2>Week 49</h2>
        <div class="dates">
            <p>Dec 05</p>
            <p>Dec 06</p>
            <p>Dec 07</p>
            <p>Dec 08</p>
            <p>Dec 09</p>
            <p>Dec 10</p>
            <p>Dec 11</p>
        </div>
    </div>
    <ul class="chart-values">
        <li>mon</li>
        <li>tue</li>
        <li>wed</li>
        <li>thu</li>
        <li>fri</li>
        <li>sat</li>
        <li>sun</li>
    </ul>
    <ul class="chart-bars">
        <li data-duration="mon-mon" data-color="#b03532">Make <a href="/">GanttChart</a>,<a href="#week49"> Week 49</a></li>
        <li data-duration="tue½-wed" data-color="#b03532">Setup Gantt Chart</li>
        <li data-duration="wed-wed" data-color="#33a8a5">Planning with Trello</li>
        <li data-duration="thu-fri" data-color="#30997a">Design in Figma</li>
        <li data-duration="thu½-sat" data-color="#6a478f">Prototype in Figma</li>
        <li data-duration="sat-sun½" data-color="#da6f2b">Task</li>
    </ul>
</div>

<footer class="page-footer">
    <small>Made with <span>❤</span> by <a
            href="https://webdesign.tutsplus.com/tutorials/build-a-simple-gantt-chart-with-css-and-javascript--cms-33813"
            target="_blank">George Martsoukos</a></small>
</footer>
`;