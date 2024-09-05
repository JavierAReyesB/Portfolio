// ToggleImage.js
import './ToggleImage.css'

const ToggleImage = ({ image1, image2, altText1, altText2 }) => `
  <div class="toggle-image-wrapper">
    <div class="text left">
      <h1>FRONT-END</h1>
    </div>
    <div class="toggle-image-container">
      <img class="toggle-image image-1" src="${image1}" alt="${altText1}" />
      <img class="toggle-image image-2" src="${image2}" alt="${altText2}" />
    </div>
    <div class="text right">
      <h1>BACK-END</h1>
    </div>
  </div>
`

export const addToggleImageListeners = () => {
  const aboutSection = document.querySelector('.aboutme') // Cambia el contenedor al '.aboutme'
  const image1 = document.querySelector('.image-1')
  const image2 = document.querySelector('.image-2')

  aboutSection.addEventListener('mousemove', (e) => {
    const rect = aboutSection.getBoundingClientRect()
    const x = e.clientX - rect.left
    const movePercentage = (x / rect.width) * 100

    // Invertir los movimientos de las imágenes
    image1.style.clipPath = `inset(0 ${movePercentage}% 0 0)`
    image2.style.clipPath = `inset(0 0 0 ${100 - movePercentage}%)`
  })

  aboutSection.addEventListener('mouseleave', () => {
    image1.style.clipPath = 'inset(0 50% 0 0)'
    image2.style.clipPath = 'inset(0 0 0 50%)'
  })
}

export default ToggleImage
