import { create } from 'zustand'

const useBearStore = create((set) => ({
  about: [
    `Strong Web Developer with extensive experience in front-end and full-stack development.`,
    `Proficient in a wide range of web technologies and frameworks, including React, Next.js, Typescript, Redux, and more.`,
    `With proven ability to develop and maintain web applications with a focus on performance and user experience. Adept at problem-solving and continuously learning new technologies to stay ahead in the field.`
  ],
  education: [{
    institution: 'Universidad Nacional de Costa Rica',
    area: 'Computer Science',
    studyType: 'Bachelors',
    startDate: '2007-02-15',
    endDate: '2012-05-04'
  },
  {
    institution: 'Udacity',
    area: 'Machine Learning',
    studyType: 'Online Nanodegree',
    startDate: '2016',
    endDate: 'Current'
  },
  {
    institution: 'Udacity',
    area: 'Front End Web Development',
    studyType: 'Online Nanodegree',
    startDate: '2016',
    endDate: '2016'
  },
  {
    institution: 'Coursera',
    area: 'Data Structures and Algorithms',
    studyType: 'Online Specialization',
    startDate: '2016',
    endDate: '2016'
  },
  {
    institution: 'SCRUMStudy',
    area: 'Scrum Fundamentals Certified (SFC)',
    studyType: 'Online Acreditation',
    startDate: '2015',
    endDate: '2015'
  }],
  experience: [
    {
      position: "Web Engineer",
      company: "Gorilla Logic",
      startDate: "2019-10-27",
      endDate: "2023-11-04",
      summary:
        "Development of asset localization app with indoor maps using Mapbox and React. Front End development of developer portal for payments API using Next.js, React Typescript, Styled Components, Jest, enzyme, AWS Lambdas, DynamoDB, Cognito, etc. Site features development for a company in the food industry using React, Redux, Sass Jest, React Testing Library, optimizely, ruby & rails. Front end development for a refinancing company to digitize the workflow using React, Redux, Typescript, Jest, Material UI, styled components, formik, yup and others."
    },
    {
      position: "Software Engineer",
      company: "Style Arcade",
      startDate: "2018-08-20",
      endDate: "2019-10-20",
      summary: "Front end development and maintenance of React/Node fashion analytics project. Small Front-End project in VueJS."
    },  
    
  {
    title: 'Web Developer',
    company: 'Edify Software Consulting',
    startDate: '2015-11-23',
    endDate: '2018-08-10',
    summary:
      'Development of projects for education entities. Projects are developed using Javascript, Ember, Java, Spring, CakePHP, MySQL, PostgreSQL, MongoDB, jQuery, Sass, etc.'
  },
  {
    title: 'Java Developer',
    company: 'PrestoSports',
    startDate: '2013-08-19',
    endDate: '2015-11-1315',
    summary:
      'Continuous development of a CMS for college sports teams. Using Java, Spring, GWT, Javascript, jQuery, MySQL and others.'
  },
  {
    company: 'Independent',
    title: 'Software Engineer',
    startDate: '2013-05-06',
    endDate: '2014-02-04',
    summary:
      'Development of scripting projects using R and python. The projects involved parsing xml, performing data queries, creating plots and others.'
  },
  {
    title: 'Software Engineer',
    company: 'Avionyx S.A.',
    startDate: '2011-06-11',
    endDate: '2013-04-26',
    summary:
      'Requirements, tests and code development for avionics systems following the DO-178B standard and made in C, C++ and assembly.'
  }],
  info: [],
  projects: [],
  social: []
}))