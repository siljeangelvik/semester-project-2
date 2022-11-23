# Semester Project 2
_semester-project-2_  

![Deploy](https://github.com/siljeangelvik/semester-project-2/actions/workflows/pages.yml/badge.svg)  
[![Netlify Status](https://api.netlify.com/api/v1/badges/eccbfa2e-f635-4c38-97d1-c45f18c73235/deploy-status?branch=main)](https://app.netlify.com/sites/angelvik-semester-project-2/deploys)  
[![Netlify Status](https://api.netlify.com/api/v1/badges/eccbfa2e-f635-4c38-97d1-c45f18c73235/deploy-status?branch=production)](https://app.netlify.com/sites/angelvik-semester-project-2/deploys)    

### Resources

Project Brief: [Noroff](https://noroff-content.gitlab.io/feu/semester-project-2/brief.html#required-links)    
Gantt Chart: ['Homemade' ](resources/ganttchart/ganttchart.html)      
Design Prototype: [Figma Prototype](https://www.figma.com/file/UyExWTgQEUySgt6Id8BKg1/Style-Tile?node-id=2%3A2&t=H3mrxOhAxbzwXgIE-0)    
Style Guide: Figma Style Tile  
Kanban Board: [Trello](https://trello.com/b/BqgXk4Ij/semester-project-2)    
Repository: [semester-project-2](https://github.com/siljeangelvik/semester-project-2)    
Hosted Demo: [angelvik-semester-project-2](https://angelvik-semester-project-2.netlify.app/)   

---

## Getting started

> creating a new `feature-branch`:  
`$ git checkout -b <new-feature-branch>`   

> git merge:  
**_assumes that the start point is in the `new-feature-branch`_**  
`$ git checkout main`  
**_checking just in case_**  
`$ git status`  
**_merging `new-feature-branch` **into** `main`_**  
`$ git merge <new-feature-branch>`  
* **note:** want to make an `onMerge` workflow  

> git push:  
**_assumes that the start point is in the branch we want to `push`_**  
`$ git push -u origin <remote-branch>`    
* **note:** I want `onPush` workflow to deploy to the hosting service  

### Planning: [Trello](https://trello.com/b/BqgXk4Ij/semester-project-2)  
Trello or GitHub Project  

### Design and Prototype : Figma
**Figma**, Adobe XD or Sketch  

Searched for a Finn.no image to find their color.  
<img alt="finn-logo-color" src="resources/images/finn.png" width="300">

Used Adobe-Wheel to add a secondary and tertiary color.  
<img alt="adobe-color-wheel" src="resources/images/color-wheel.png" width="300">

### Bundler: Vite

`$ yarn create vite`  
`$ cd semester-project-2`  
`$ yarn`  
`$ yarn dev`  
`$ yarn run dev --host`  

Using `yarn` as package manager, instead of `npm`.  
The reason for this is it allows me to more simply manage `node_modules`,  
increased speed when installing modules, as well as simplified commands.  
It might not be as beneficial right now, making small projects,  
but I wish to implement it in my "routine" early on.

### CSS Processor: [PostCSS](https://postcss.org/)
[**SASS**](https://yarnpkg.com/package/sass) / PostCSS    
`$ yarn add sass`  
`$ yarn build`  

### CSS Framework: [TailWind](https://tailwindcss.com/docs/guides/vite)
**Tailwind** / Bootstrap    
`$ yarn add -D tailwindcss postcss autoprefixer`    
`$ yarn tailwindcss init -p`    

### Hosting Services: [Netlify](https://angelvik-semester-project-2.netlify.app/)
**Netlify** / GitHub Pages  

**Branch to Deploy:** `main`  
**Build command:** `yarn build`  
**Publish Directory:** `dist`  

---
### Resources
[Digital Ocean: Vite](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-react-project-with-vite)  
[Setup Tailwind with Yarn](https://dev.to/ashirbadgudu/set-up-tailwind-css-with-create-react-app-and-yarn-pio)  
[Uninstall Package npm](https://www.freecodecamp.org/news/npm-uninstall-how-to-remove-a-package/)      
[Yarn Install Commands](https://classic.yarnpkg.com/en/docs/cli/install)  
[GanttCharts](https://developers.google.com/chart/interactive/docs/gallery/ganttchart)  

### Tools
[Hex Color Picker](https://imagecolorpicker.com/en)  
[Adobe Color Wheel](https://color.adobe.com/create/color-wheel)  
[Gantt Chart](https://webdesign.tutsplus.com/tutorials/build-a-simple-gantt-chart-with-css-and-javascript--cms-33813)  
[CodePen Gantt Chart](https://codepen.io/tutsplus/pen/ZEzerNB)  
[Weekly Calendar](https://www.ukekalender.no/)  

### Docs
[Vite](https://vitejs.dev/guide/features.html)    
[Yarn Tailwind](https://yarnpkg.com/package/tailwindcss)  
[Tailwind with Vite](https://tailwindcss.com/docs/guides/vite)      
[Tailwind](https://tailwindcss.com/docs/installation)    
[PostCSS](https://postcss.org/)    
