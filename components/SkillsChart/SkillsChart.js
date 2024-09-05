// SkillsChart.js
import { Chart, registerables } from 'chart.js'
import './SkillsChart.css'

Chart.register(...registerables)

let chartInstance = null

const renderChart = () => {
  const ctx = document.getElementById('skillsChart').getContext('2d')

  if (chartInstance) chartInstance.destroy()

  chartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js'],
      datasets: [
        {
          label: 'Skill Level',
          data: [95, 90, 95, 75, 40],
          backgroundColor: [
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 99, 132, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  })
}

const SkillsChart = () => `
  <section id="skills" class="skills-section">
    <h2>My Skills</h2>
    <canvas id="skillsChart" width="400" height="200"></canvas>
  </section>
`

export const addSkillsChart = () => {
  renderChart()
}

export default SkillsChart
