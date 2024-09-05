const data = {
  fullName: 'Javier Reyes',
  contactEmail: 'reyes.bahamondej@gmail.com',
  avatar: '/assets/imagenes/1000073704.jpg',
  aboutMe:
    "I'm a passionate photographer and web developer with a diverse educational background. I hold a Bachelor's degree in architecture and graphic designer, a Web Development Certification. My work includes capturing images, developing web applications. I'm committed to continuous learning in digital.",
  education: {
    degree: 'Bachelor degree in architecture and graphic designer',
    university: 'Complutense University of Madrid ',
    graduationYear: 2007,
    honors: 'Summa Cum Laude',
    relevantCourses: ['Full stack web developer', 'Google SEO Fundamentals']
  },
  workExperience: [
    {
      position: 'Web Developer',
      company: 'Tech Solutions Inc.',
      startDate: '2013-01-01',
      endDate: 'Present',
      description:
        'Key member of the development team, contributing to projects like creating interactive web apps and optimizing database performance.',
      achievements: [
        'Led development of a web app increasing user engagement by 20%',
        'Optimized database queries, reducing data retrieval times by 30%'
      ]
    },
    {
      position: 'Freelance Web Developer',
      company: 'Self-employed',
      startDate: '2012-01-01',
      endDate: '2013-01-01',
      description:
        'Collaborated with diverse clients, delivering custom websites tailored to their needs.',
      achievements: [
        'Delivered over 15 successful projects in a year',
        'Achieved 100% client satisfaction through personalized solutions'
      ]
    }
  ],
  skills: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'RESTful API',
    'Git',
    'Frontend and Backend Development'
  ],
  projects: [
    {
      title: 'Replicarest',
      description:
        'Developed a Pinterest replica as my first Full Stack project, using HTML, CSS, JavaScript, and the Unsplash library for dynamic images.',
      link: 'https://ephemeral-gecko-0f6b5b.netlify.app/',
      preview: './assets/imagenes/Replicarest.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API']
    },
    {
      title: 'My Repositories',
      description:
        'Visit my GitHub repositories to explore my projects in web development, including interfaces and complete applications.',
      link: 'https://github.com/JavierAReyesB?tab=repositories',
      preview:
        'https://plus.unsplash.com/premium_photo-1684581214880-2043e5bc8b8b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070',
      technologies: ['React', 'Firebase', 'Node.js', 'Express.js']
    },
    {
      title: 'Portfolio Website',
      description:
        'Built a portfolio website to showcase my web development skills and projects, featuring a clean, responsive design.',
      link: 'http://github.com/#',
      preview:
        'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2071',
      technologies: ['HTML5', 'CSS3', 'JavaScript']
    }
  ]
}

export default data
