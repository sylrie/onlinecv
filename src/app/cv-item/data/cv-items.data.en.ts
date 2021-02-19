import { CvItem } from '../cv-item';

// tslint:disable:max-line-length
export const GENERAL = {
  name: 'Sylvain Rieutor',
  position: "Application Developer",
  description: `Curious and passionate about digital technologies and their constantly evolving applications, I, in a spontaneous approach, wanted to improve my knowledge and acquire through a graduate education, the mastery of new tools allowing me to create solutions that meet the needs current and future.

i am looking for new opportunities to apply those acquired skills, bring my professional experience as well as my sense of organization, my requirement and my ability to adapt and learn.

This site is made with Angular. To find out more, click on the AngularCV logo at the bottom right,`,
};
// tslint:enable:max-line-length

export const CVITEMS: CvItem[] = [
  {
    title: 'Freelance',
    subtitle: 'Application Developer - Web | Back-End',
    begin: '01-2021',
    end: '',
    description: '',
    tags: ['Python', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 
      'Angular', 'TypeScript', 'Flask', 'MySQL', 'PostgreSQL', 'Git', 'GitHub', 'Trello'],
    link: '',
    thumbnail: 'sr.png',
  },
  {
    title: 'Python/Django Developer ',
    subtitle: 'Graduate education',
    begin: '07-2019',
    end: '10-2020',
    description: "Realization of 13 study projects.",
    tags:  ['Python', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap',
      'Flask', 'MySQL', 'PostgreSQL', 'Git', 'GitHub', 'Trello'],
    link: '',
    thumbnail: 'OpenClassrooms.png',
  },
];

export const CERTIFICATES: CvItem[] = [
  {
    title: 'Angular',
    subtitle: 'Certification | Angular',
    begin: '',
    end: 'Mach - 2021',
    description: '',
    link: '',
    thumbnail: 'Angular.png',
    attachment: 'Certificat_angular.pdf',
  },
  {
    title: "Application Developer - Python",
    subtitle: "Bachelor's Degree",
    begin: '',
    end: 'October - 2020',
    description: '',
    link: '',
    thumbnail: 'django-python.png',
    attachment: '',
  },
];

export const EDUCATION: CvItem[] = [
  {
    title: 'Become an Angular Developer',
    subtitle: '26 Academy',
    begin: '2021-01',
    end: '2021-03',
    description: `Templates
     - Forms, data validation
     - API's Communication and authentication 
     - Tests and debugging.`,
    tags: ['Angular', 'TypeScript'],
    link: 'https://www.26academy.com/',
    thumbnail: '26academy.png',
  },
  {
    title: "Application Developer - Python",
    subtitle: 'OpenClassrooms',
    begin: '2008-10',
    end: '2011-12',
    description: ``,
    tags: ['Python', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap',
    'Flask', 'MySQL', 'PostgreSQL', 'Git', 'GitHub', 'Trello'],
    link: 'https://openclassrooms.com/',
    thumbnail: 'OpenClassrooms.png',
  },
];

export const LANGUAGES = [
  // RATE YOURSELF  =>  100% = NATIVE;  80-99% = FLUENT;  60-79% = ADVANCED;  40-59% = INTERMEDIATE;  20-39% = ELEMENTARY;  0-19% = BEGINNER
  { title: 'Python / Django', level: '85' },
  { title: 'HTML5 / CSS3 / JS', level: '75' },
  { title: 'Angular / TypeScript', level: '50' },
  { title: 'MySQL / PostgreSQL', level: '70' },
  { title: 'Intégration continue / Méthode Agile / UML', level: '75' },
];

export const PROJECTS: CvItem[] = [
  {
    title: 'Sylvain Rieutor CV',
    subtitle: 'Online CV',
    begin: '',
    end: '2021-02',
    description: 'This Angular project was created to apply my knowledge and have an online CV, ' +
      'you are currently on this site ^^.',
    tags: ['Angular', 'MaterialDesign', 'GitHub', 'CSS', 'TypeScript', 'JetBrains WebStorm', 'GitHub pages', 'jsPDF', 'npm'],
    link: '',
    thumbnail: 'sr.png',
  },
  {
    title: 'HomeRent',
    subtitle: 'A simple website for a rental house.',
    begin: '',
    end: '2020-12',
    description: 'This project aims to present the house.',
    tags: ['HTML5', 'CSS3', 'Javascript', 'Bootstrap', 'GitHub', 'OVH'],
    link: 'https://maison-vigeronne.fr/',
    thumbnail: 'icon.ico',
  },
  {
    title: "MonP'titBar",
    subtitle: 'Django Web Application, e-commerce, restaurants.',
    begin: '',
    end: '2020-11',
    description: "The goal of this application is to make orders and manage them in a bar/restaurant, " +
      'Limit interactions between staff members and customers.',
    tags: ['Django', 'HTML5', 'CSS3','Javascript', 'PostgreSQL', 'Git', 'Bootstrap', 'Heroku'],
    link: 'https://eorders.herokuapp.com/',
    thumbnail: 'monpetitbar.png',
  },
  {
    title: "Pur Beurre Platform",
    subtitle: 'Application Web Django, substitute products.',
    begin: '',
    end: '2020-9',
    description: "The goal of this application is to create a platform with the Open Food Facts database, " +
      'compare food, propose a healthier substitute.',
    tags: ['Django', 'HTML5', 'CSS3','Javascript', 'PostgreSQL', 'Git', 'OpenFoodFacts', 'Bootstrap', 'Heroku'],
    link: 'https://srpurbeurre.herokuapp.com/',
    thumbnail: 'pur_beurre.png',
  },
  {
    title: "GrandPy Bot",
    subtitle: 'Application Web Flask, the grandpa who knows everything.',
    begin: '',
    end: '2020-2',
    description: "Ask Grandpy about any places, He will find the address and show you on a map, " +
      'papy will tell you a story about this place.',
    tags: ['Flask', 'HTML5', 'CSS3','Javascript', 'Git', 'GoogleMaps', 'MediaWiki', 'Bootstrap', 'Heroku'],
    link: 'https://srgrandpybot.herokuapp.com/',
    thumbnail: 'grandpy.jpg',
  },
];

// disabled
export const VOLUNTEERING: CvItem[] = [
  {
    title: '',
    subtitle: '',
    begin: '',
    end: '',
    description: '',
    link: '',
    thumbnail: '',
  },
];

export const CONTACT = {
  city: 'Calvisson, France',
  phone: '06 26 87 64 81',
  mail: 'sylvain.rieutor.dev@gmail.com',
  skype: 'sylvain rieutor', // just the account name
  linkedin: 'https://www.linkedin.com/in/sylvain-rieutor-7a558a157/',
  xing: '', // full url
  github: 'https://github.com/sylrie', 
  stackoverflow: '', // full url
  twitter: 'https://twitter.com/sylvain_rieutor',
  facebook: '', // full url
  instagram: '', // full url
  malt: 'https://www.malt.fr/profile/sylvainrieutor', 
  codeur: 'https://www.codeur.com/-sylvainrieutor',
  other: [
    { title: '', icon: '', link: '' },
  ],
};

export const INTERESTS = [
  {
    title: 'Code',
    icon: 'code',
  },
  {
    title: 'Learn',
    icon: 'school',
  },
  {
    title: 'Trips',
    icon: 'Flight_takeoff',
  },
  {
    title: 'Movies ans Series',
    icon: 'ondemand_video',
  },
  {
    title: 'Music',
    icon: 'headset',
  },
];

// disabled
export const PUBLICATIONS: CvItem[] = [
  {
    title: '',
    subtitle: '',
    begin: '',
    end: '',
    description: '',
    tags: [''],
    link: '',
    thumbnail: '',
  },
];

// disabled
export const TALKS: CvItem[] = [
  {
    title: '',
    subtitle: '',
    begin: '',
    end: '',
    description: '',
    tags: [''],
    thumbnail: '',
  },
];
