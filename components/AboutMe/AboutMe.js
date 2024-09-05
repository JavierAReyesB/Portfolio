// AboutMe.js
import data from '../../data/data'
import { SkillItem } from './SkillItem'
import ToggleImage, { addToggleImageListeners } from './ToggleImage' // Importa el componente con la ruta correcta
import './AboutMe.css'

const template = () => `
  <section class="aboutme" id="aboutme">
    <h2>FULL STACK DEVELOPER</h2>
    ${ToggleImage({
      image1: '/assets/imagenes/imagen1.jpg',
      image2: '/assets/imagenes/imagen2.jpg',
      altText1: 'Avatar Image 1',
      altText2: 'Avatar Image 2'
    })}
    <ul class="skills-list">
      ${data.skills.map((skill) => SkillItem({ skill })).join('')}
    </ul>
    <p>${data.aboutMe}</p>
    <a href="mailto:${data.contactEmail}" class="contact-link">Contact me</a>
  </section>
`

export const AboutMe = () => template()

export const addAboutListeners = () => {
  addToggleImageListeners() // Agrega los listeners específicos para el efecto de imagen
}
