// Footer.js
import './Footer.css'

const Footer = () => `
  <footer class="custom-footer">
    <div class="scroll-container">
      <button class="scroll-to-top" aria-label="Scroll to top">
        <span>&#9650;</span>
      </button>
    </div>
    <div class="footer-content">
      <p>©️ 2024 Javier Reyes</p>
      <nav class="footer-nav">
        <a href="#aboutme">About me</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
      </nav>
    </div>
  </footer>
`

export const addFooterListeners = () => {
  const scrollToTopBtn = document.querySelector('.scroll-to-top')
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
}

export default Footer
