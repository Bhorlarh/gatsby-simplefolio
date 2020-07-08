import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Bolarinwa Owuogba | Full Stack Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Bolarinwa Owuogba.',
  subtitle: "I'm a Fullstack Web Developer.",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `
    I'm a web developer, I build applications for both the frontend as
    well as server side (backend) using beautifully simple and efficient
    code. My current stack is the PERN stack which is PostgreSQL for
    database management, ExpressJS + NodeJS for backend and ReactJS for
    frontend.
  `,
  paragraphTwo: `
    And besides that well let's see, I'm currently studying computer science
    in the university of  Lagos. In my free time I try to play a little
    basketball, I also enjoy reading quite a bit.
  `,
  paragraphThree: '',
  resume: 'https://docs.google.com/document/d/1ekhQY5HE_AETiGbwAp8zgaw90tOukih-fkUn09b-7bQ/edit#', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'smart-brain-bola.herokuapp.png',
    title: 'Smart Brain',
    info: `
      A project I built while learning ReactJS, it uses an external api to try
      to locate a face in an image provided by the user. It is built on the PERN
      stack (PostgreSQL + Express + React with Redux + Node).
    `,
    info2: '',
    url: 'https://smart-brain-bola.herokuapp.com',
    repo: 'https://github.com/Bhorlarh/smart-brain', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gothons.png',
    title: 'Gothon web',
    info: `
      Gothon web is a text game. Based on a popular online game Zork online, it
      is an adventure type game with text outputs and funny ways to die. Its runs
      on Flask and uses an SQLite database.
    `,
    info2: '',
    url: 'https://bhorlarinwah.pythonanywhere.com',
    repo: 'https://github.com/Bhorlarh/gothon-web', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'rest-countries.png',
    title: 'Rest Countries',
    info: `
      This was the rest-countries-api-with-color-theme-switcher front-end coding
      challenge from frontendmentor. The challenge is to integrate with the REST
      Countries API to pull country data and display it according to designs.
    `,
    info2: '',
    url: 'https://bhorlarh.github.io/rest-countries/',
    repo: 'https://github.com/bhorlarh/rest-countries', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'robofriends.png',
    title: 'Robo Friends',
    info: `
      Using https://robohash.org, random images are generated for a list of placeholder
      users fetched from https://jsonplaceholder.typicode.com. Then users are displayed
      in a list of card components and can be searched based on their names.
    `,
    info2: '',
    url: 'https://bhorlarh.github.io/robofriends/',
    repo: 'https://github.com/bhorlarh/robofriends', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'bola.owuogba@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Bolarin50907068/',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/bhorlarinwah/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/bolarinwa-owuogba-12952816a/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Bhorlarh',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
