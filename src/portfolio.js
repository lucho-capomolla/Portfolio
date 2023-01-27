const header = {
    homepage: 'https://lucho-capomolla.github.io/portfolio/',
    title: 'LC',
  }

  const about = {
    name: 'Luciano Capomolla',
    role: 'Information Systems Engineer',
    description: 'I am 4th grade student of Information System Engineering Carreer in U.T.N. Buenos Aires. Currently I am a Consulting Intern in IBM.',
    resume: 'https://example.com',
    // Redirect to CV pdf from Google Drive
    social: {
      linkedin: 'https://www.linkedin.com/in/luciano-fabio-capomolla/',
      github: 'https://github.com/lucho-capomolla',
    },
  }
  
  const projects = [
    {
      name: 'Escape Boss',
      description:
        'This is a game created in Wollok for the subject of Paradigmas de Programación using POO or Object Oriented Programming. This game consists in trying to escape from a Boss collecting objects that gives you energy and finally required objects to succesfully escape and win the game.',
      stack: ['Wollok'],
      sourceCode: 'https://github.com/lucho-capomolla/Escape-Boss',
    },
    {
      name: 'Sistemas Operativos\'s Project ',
      description:
        'This is a project for the subject Sistemas Operativos. This consists in emulate a real Operative System, using concepts like Synchronization, Threads, Process and the Ussage of Memory.',
      stack: ['C'],
      sourceCode: 'https://github.com/lucho-capomolla/TP-1C-Operativos-2021',
    },
    {
      name: 'Patitas al Rescate',
      description:
        'This is a project for the subject Diseño de Sistemas. This consists in a fully webpage where you can register your pet, give it in adoption or adopt another one. Also by this website you can report your lost pet or report that you found a lost pet',
      stack: ['HTML', 'CSS', 'Vue.js', 'Java', 'Spark', 'Hibernate', 'Handlebars'],
      sourceCode: 'https://github.com/lucho-capomolla/TP-Dds-2021-Rescate-de-Patitas',
    },
    {
      name: 'Gestión de Datos\'s Project',
      description:
        'This is a project for the subject Gestión de Datos. This consists in the normalization of the given Database and the creation of a BI.',
      stack: ['SQL', 'T-SQL'],
      sourceCode: 'https://github.com/lucho-capomolla/TP-GDD-2C-2021', 
    }
  ]
  
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Vue',
    'Git',
    'CI/CD',
    'Java',
    'C#',
    'C++',
    'C',
    'Python',
    'SQL',
    'T-SQL',
    'Docker',
    'Kubernetes',
    'Ansible',
    'Terraform',
    'AWS'
  ]
  
  const contact = {
    email: 'lucho.capomolla@gmail.com',
  }
  
  export { header, about, projects, skills, contact }