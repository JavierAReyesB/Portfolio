import './SkillItem.css'

const skillLogos = {
  HTML5: './assets/Logos/html5.png',
  CSS3: './assets/Logos/css3.png',
  JavaScript: './assets/Logos/javascript.png',
  React: './assets/Logos/react.png',
  'Node.js': './assets/Logos/nodejs.png',
  'Express.js': './assets/Logos/expressjs.png',
  MongoDB: './assets/Logos/mongodb.png',
  'RESTful API': './assets/Logos/restfulapi.png',
  Git: './assets/Logos/git.png',
  'Frontend and Backend Development': '../Logos/fullstack.png'
}

const skillLogoSizes = {
  HTML5: { width: '70%', height: '70%' },
  CSS3: { width: '80%', height: '80%' },
  JavaScript: { width: '120%', height: '75%' },
  React: { width: '85%', height: '85%' },
  'Node.js': { width: '80%', height: '80%' },
  'Express.js': { width: '75%', height: '75%' },
  MongoDB: { width: '80%', height: '80%' },
  'RESTful API': { width: '70%', height: '70%' },
  Git: { width: '75%', height: '75%' },
  'Frontend and Backend Development': { width: '85%', height: '85%' }
}

export const SkillItem = ({ skill }) => {
  const logo = skillLogos[skill] || '/assets/Logos/default-logo.png'
  const size = skillLogoSizes[skill] || { width: '80%', height: '80%' }

  return `
    <li class="skill-item">
      <div class="skill-inner">
        <p class="skill-text">${skill}</p>
        <img 
          class="skill-logo" 
          src="${logo}" 
          alt="${skill} logo" 
          style="width: ${size.width}; height: ${size.height};" 
        />
      </div>
    </li>
  `
}
