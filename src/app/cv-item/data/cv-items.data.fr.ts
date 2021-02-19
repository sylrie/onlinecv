import { CvItem } from '../cv-item';

// tslint:disable:max-line-length
export const GENERAL = {
  name: 'Sylvain Rieutor',
  position: "Développeur d'application",
  description: `Curieux et passionné par les technologies numériques et leurs applications en perpétuelles évolutions, j'ai, dans une démarche spontanée, souhaité approfondir mes connaissances et acquérir au travers d'une formation diplomante la maîtrise de nouveaux outils me pemettant de créer des solutions répondant aux besoins actuels et à venir.

Autonome, rigoureux et aimant les challenges, je prends plaisir à analyser les besoins, rechercher les solutions les mieux adaptées, mettre en œuvre mes compétences et ma motivation pour développer la solution retenue.
  
En recherche d'opportunités pour mettre en application les compétences acquises, apporter mon expérience professionnelle ainsi que mon sens de l'organisation, mon exigence et mes capacités d'adaptation et d'apprentissage.

Ce site est réalisé avec Angular. Pour en savoir plus, clicke sur le logo AngularCV en bas à droite`,
};
// tslint:enable:max-line-length

export const CVITEMS: CvItem[] = [
  {
    title: 'Freelance',
    subtitle: 'Développeur Application - Web | Back-End',
    begin: '01-2021',
    end: '',
    description: '',
    tags: ['Python', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 
      'Angular', 'TypeScript', 'Flask', 'MySQL', 'PostgreSQL', 'Git', 'GitHub', 'Trello'],
    link: '',
    thumbnail: 'sr.png',
  },
  {
    title: 'Dévelopeur Python/Django',
    subtitle: 'Parcours diplômant',
    begin: '07-2019',
    end: '10-2020',
    description: "Réalisation de 13 projets d'études.",
    tags:  ['Python', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap',
      'Flask', 'MySQL', 'PostgreSQL', 'Git', 'GitHub', 'Trello'],
    link: 'https://www.misterspex.com',
    thumbnail: 'OpenClassrooms.png',
  },
];

export const CERTIFICATES: CvItem[] = [
  {
    title: 'Angular',
    subtitle: 'Certificat | Angular',
    begin: '',
    end: 'Mars - 2021',
    description: '',
    link: '',
    thumbnail: 'Angular.png',
    attachment: 'Certificat_angular.pdf',
  },
  {
    title: "Développeur d'application - Python",
    subtitle: 'Titre RNCP niveau II |  (Bac+3/4)',
    begin: '',
    end: 'Octobre - 2020',
    description: '',
    link: '',
    thumbnail: 'django-python.png',
    attachment: '',
  },
];

export const EDUCATION: CvItem[] = [
  {
    title: 'Devenir un développeur Angular',
    subtitle: '26 Academy',
    begin: '01-2021',
    end: '03-2021',
    description: `Les templates
     - Les formulaires, liaison de données et validation
     - Communication et authentification des API
     - Les tests et le débogage.`,
    tags: ['Angular', 'TypeScript'],
    link: 'https://www.26academy.com/',
    thumbnail: '26academy.png',
  },
  {
    title: "Développeur d'application - Python",
    subtitle: 'OpenClassrooms',
    begin: '10-2008',
    end: '12-2011',
    description: `Analyser les besoins
      - Définir les étapes
      - Etudier les solutions techniques
      - Développer, tester et valider les fonctionnalités
      - Concevoir une documentation technique et fonctionnelle
      - Apporter d'éventuelles corrections de bugs et effectuer des mises à jour.`,
    tags: ['Python', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap',
    'Flask', 'MySQL', 'PostgreSQL', 'Git', 'GitHub', 'Trello'],
    link: 'https://openclassrooms.com/',
    thumbnail: 'OpenClassrooms.png',
  },
];

export const LANGUAGES = [
  // RATE YOURSELF  =>  100% = NATIVE;  80-99% = FLUENT;  60-79% = ADVANCED;  40-59% = INTERMEDIATE;  20-39% = ELEMENTARY;  0-19% = BEGINNER
  { title: 'Python / Django', level: '75' },
  { title: 'HTML5 / CSS3 / JS', level: '65' },
  { title: 'Angular / TypeScript', level: '50' },
  { title: 'MySQL / PostgreSQL', level: '65' },
  { title: 'Intégration continue / Méthode Agile / UML', level: '70' },
];

export const PROJECTS: CvItem[] = [
  {
    title: 'Sylvain Rieutor CV',
    subtitle: 'Un CV en ligne.',
    begin: '',
    end: '02-2021',
    description: 'Ce projet Angular à été créé pour mettre en application mes connaissance et avoir un CV en ligne, ' +
      'vous êtes actuellement sur ce site ^^.',
    tags: ['Angular', 'MaterialDesign', 'GitHub', 'CSS', 'TypeScript', 'JetBrains WebStorm', 'GitHub pages', 'jsPDF', 'npm'],
    link: '',
    thumbnail: 'sr.png',
  },
  {
    title: 'HomeRent',
    subtitle: 'Un simple site pour une maison à louer.',
    begin: '',
    end: '12-2020',
    description: 'Ce projet à pour but de présenter une maison à louer.',
    tags: ['HTML5', 'CSS3', 'Javascript', 'Bootstrap', 'GitHub', 'OVH'],
    link: 'https://maison-vigeronne.fr/',
    thumbnail: 'icon.ico',
  },
  {
    title: "MonP'titBar",
    subtitle: 'Application Web Django, e-commerce, restaurants.',
    begin: '',
    end: '11-2020',
    description: "Cette application à été créer pour que les clients d'un restaurant puissent commander depuis leurs smartphone, " +
      'en application les gestes barrière et en limitant les contacts.',
    tags: ['Django', 'HTML5', 'CSS3','Javascript', 'PostgreSQL', 'Git', 'Bootstrap', 'Heroku'],
    link: 'https://eorders.herokuapp.com/',
    thumbnail: 'monpetitbar.png',
  },
  {
    title: "Pur Beurre Platform",
    subtitle: 'Application Web Django, produit de substitution.',
    begin: '',
    end: '9-2020',
    description: "Cette application à été créer pour que les utilisateurs puissent comparer la qualité des aliments, " +
      'proposition de produits de substitutions, enregistrement des produits favoris ...',
    tags: ['Django', 'HTML5', 'CSS3','Javascript', 'PostgreSQL', 'Git', 'OpenFoodFacts', 'Bootstrap', 'Heroku'],
    link: 'https://srpurbeurre.herokuapp.com/',
    thumbnail: 'pur_beurre.png',
  },
  {
    title: "GrandPy Bot",
    subtitle: 'Application Web Flask, le papy qui sait tout.',
    begin: '',
    end: '2-2020',
    description: "Cette application de géolocaliser l'nedroit demandé par l'utilisateur et de l'afficher sur une carte, " +
      'papy raconte une petite histoire sur ce lieux.',
    tags: ['Flask', 'HTML5', 'CSS3','Javascript', 'Git', 'GoogleMaps', 'MediaWiki', 'Bootstrap', 'Heroku'],
    link: 'https://srgrandpybot.herokuapp.com/',
    thumbnail: 'grandpy.jpg',
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
    title: 'Coder',
    icon: 'code',
  },
  {
    title: 'Apprendre',
    icon: 'school',
  },
  {
    title: 'Voyages',
    icon: 'Flight_takeoff',
  },
  {
    title: 'Films et Séries',
    icon: 'ondemand_video',
  },
  {
    title: 'Musique',
    icon: 'headset',
  },
];


