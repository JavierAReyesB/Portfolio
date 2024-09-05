import './GalacticSmoke.css'

export const createSmokeParticle = () => {
  const smokeParticle = document.createElement('div')
  smokeParticle.classList.add('smoke-particle')

  smokeParticle.style.left = `${Math.random() * 100}vw`
  smokeParticle.style.top = `${Math.random() * 100}vh`

  document.body.appendChild(smokeParticle)

  smokeParticle.addEventListener('animationend', () => {
    smokeParticle.remove()
  })
}

export const startGalacticSmoke = () => {
  setInterval(createSmokeParticle, 2000)
}

document.addEventListener('DOMContentLoaded', startGalacticSmoke)
