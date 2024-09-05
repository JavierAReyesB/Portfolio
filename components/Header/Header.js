import './Header.css'

const template = () => `
  <header>
    <div class="header-container">
      <h1 class="silver-text" data-text="Javier Reyes">Javier Reyes</h1>
      <button class="menu-toggle" aria-label="Toggle navigation">
        <span class="menu-icon">&#9776;</span>
      </button>
      <nav class="nav-menu">
        <ul class="navigation">
          <li><a href="#aboutme">About me</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
        <div class="social-icons">
          <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
          <a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin"></i></a>
          <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook"></i></a>
          <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
        </div>
      </nav>
    </div>
  </header>
`

const Header = () => template()

export const addHeaderListeners = () => {
  const menuToggle = document.querySelector('.menu-toggle')
  const navMenu = document.querySelector('.nav-menu')

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active')
  })
}

export default Header
