const date = new Date
const headerBrand = document.querySelector('#header-brand').textContent ="coucou je m'appel Guillaume :)"
const copyright = document.querySelector('#copyright').textContent = `Copyright ©- ${date.getFullYear()} Tous droits réservés par MonSite`


console.log(import.meta.env.VITE_SOME_KEY) // "123"
console.log(import.meta.env.VITE_DB_PASSWORD) // undefined


//* On est dans /src/main.js

// ! ⬇ Ancienne version de base (counter) 
// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
