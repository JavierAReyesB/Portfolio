import data from '../../data/data'
import './Projects.css'

const template = () => `
  <section class="projects" id="projects">
    <h2>Recent Projects</h2>
    <ul>
      ${data.projects
        .map(
          (project) => `
        <li>
          <img src=${project.preview} alt="${project.title}" />
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href=${project.link}>Know more...</a>
        </li>
      `
        )
        .join('')}
    </ul>
  </section>
`

const Projects = () => template()

export default Projects
