import './SkillItem.css'

const skillLogos = {
  HTML5: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYk594AhSKw5Eb3iHkPHs_XmpCqaRVgu0mvg&s',
  CSS3: 'https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png',
  JavaScript: 'https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png',
  React: 'https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png',
  'Node.js': 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png',
  'Express.js': 'https://lh5.googleusercontent.com/proxy/KTMTgxEwIkK5PtvXhl3qRBO_BB797q_ixPFFLP4lLCImNbufF5V6bRvVbBMHSuQ8rF4IiMBjIOW539IuELV-Ir5X7ppI40BUOkd4ytO87v9gDRIgWsm_UXt84aMVd_6v8_pPt_ZACSm-km9RlQ',
  MongoDB: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png',
  'RESTful API': 'https://media.licdn.com/dms/image/D5612AQE0nEZrPGv0JA/article-cover_image-shrink_600_2000/0/1679583758253?e=2147483647&v=beta&t=Dsc4Ic96zrwm1z-mTY9m3-jFHCn9--kQBbU-5ga3k3E',
  Git: 'https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png',
  'Frontend and Backend Development': 'https://static.thenounproject.com/png/2230389-200.png'
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
