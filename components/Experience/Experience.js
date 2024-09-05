import data from '../../data/data'
import './Experience.css'

const template = () => `
  <section class="experience" id="experience">
    <h2>Experience</h2>
    <ul>
      ${data.workExperience
        .map(
          (item) => `
        <li>
          <h3>${item.position} at ${item.company} (${item.startDate} - ${item.endDate})</h3>
          <p>${item.description}</p>
        </li>
      `
        )
        .join('')}
    </ul>
  </section>
`

const Experience = () => template()

export default Experience
