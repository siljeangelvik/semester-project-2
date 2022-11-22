# Semester Project 2
_semester-project-2_

[![Netlify Status](https://api.netlify.com/api/v1/badges/8351bb72-cb2f-4acd-9641-31a9d3ca7da8/deploy-status)](https://app.netlify.com/sites/angelvik-semester-project-2/deploys)      
`GitHub Pages`: ![main](https://github.com/siljeangelvik/semester-project-2/actions/workflows/pages.yml/badge.svg)  

### Resources

Project Brief: [Noroff](https://noroff-content.gitlab.io/feu/semester-project-2/brief.html#required-links)    
Gantt Chart:    
Design Prototype: [Figma Prototype](https://www.figma.com/file/UyExWTgQEUySgt6Id8BKg1/Style-Tile?node-id=2%3A2&t=H3mrxOhAxbzwXgIE-0)    
Style Guide: Figma Style Tile  
Kanban Board: [Trello](https://trello.com/b/BqgXk4Ij/semester-project-2)    
Repository: [semester-project-2](https://github.com/siljeangelvik/semester-project-2)    
Hosted Demo: [angelvik-semester-project-2](https://angelvik-semester-project-2.netlify.app/)  

---

## Getting started

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

### Tools
[Hex Color Picker](https://imagecolorpicker.com/en)  
[Adobe Color Wheel](https://color.adobe.com/create/color-wheel)  

### Docs
[Vite](https://vitejs.dev/guide/features.html)    
[Yarn Tailwind](https://yarnpkg.com/package/tailwindcss)  
[Tailwind with Vite](https://tailwindcss.com/docs/guides/vite)      
[Tailwind](https://tailwindcss.com/docs/installation)    
[PostCSS](https://postcss.org/)    
