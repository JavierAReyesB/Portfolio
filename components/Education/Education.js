import data from '../../data/data'
import './Education.css'

const template = () => `
  <section class="education" id="education">
    <h2>Education</h2>
    <h3>${data.education.degree}</h3>
    <h4>${data.education.university}</h4>
    <p>Graduated: ${data.education.graduationYear} - Honors: ${
  data.education.honors
}</p>
    <h3>Relevant Courses</h3>
    <ul>
      ${data.education.relevantCourses
        .map((course) => `<li>${course}</li>`)
        .join('')}
    </ul>
  </section>
`

const Education = () => template()

export default Education
