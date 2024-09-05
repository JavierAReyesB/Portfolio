// Main.js
import './Main.css'
import { AboutMe, addAboutListeners } from '../AboutMe/AboutMe'
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'
import SkillsChart, { addSkillsChart } from '../SkillsChart/SkillsChart'

let show = 'Experience'

const template = () => `
  <main>
    ${AboutMe()}
    <div class="change-container">
      <button id="change" aria-expanded="false">Show ${show}</button>
    </div>
    <div id="content">
      ${Education()}
    </div>
    ${Projects()}
    ${SkillsChart()}
  </main>
`

export const Main = () => template()

export const addMainListeners = () => {
  const button = document.querySelector('#change')
  const content = document.querySelector('#content')

  button.addEventListener('click', () => {
    if (show === 'Experience') {
      content.innerHTML = Experience()
      show = 'Education'
      button.setAttribute('aria-expanded', 'true')
    } else {
      content.innerHTML = Education()
      show = 'Experience'
      button.setAttribute('aria-expanded', 'false')
    }
    button.textContent = `Show ${show}`
  })

  addAboutListeners()
  addSkillsChart()
}
