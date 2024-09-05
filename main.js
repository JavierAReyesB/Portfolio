// main.js
import './style.css'
import Header, { addHeaderListeners } from './components/Header/Header'
import Footer, { addFooterListeners } from './components/Footer/Footer'
import { Main, addMainListeners } from './components/Main/Main'
import { addAboutListeners } from './components/AboutMe/AboutMe'
import { startGalacticSmoke } from './components/GalacticSmoke/GalacticSmoke'

const render = () => {
  document.querySelector('#app').innerHTML = `
    ${Header()}
    ${Main()}
    ${Footer()}
  `
}

render()
addHeaderListeners()
addAboutListeners()
addMainListeners()
startGalacticSmoke()
addFooterListeners()
