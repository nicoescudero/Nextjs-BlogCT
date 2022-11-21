import github from '../../public/github.png';
import siteweb from '../../public/internet.png';

const projects = [
  {
    title: 'API-REST TS',
    links: [
      {
        href: 'https://github.com/nicoescudero/TS-Singleton-API-REST',
        src: github,
        alt: 'github'
      },
    ],
    description: 'API-REST construida con typescript y el patron singleton.',
    technology: ['NODEJS','TYPESCRIPT'],
  },
  {
    title: 'ONG - Somos Mas (Alkemy)',
    links: [
      {
        href: 'https://github.com/alkemyTech/OT226-Server',
        src: github,
        alt: 'github'
      },
    ],
    description: 'Esta API-REST fue construida con mis compañeros del desafio alkemy. La cual cumple con los requisitos solicitados por parte de la ONG.',
    technology: ['NODEJS','EXPRESS','SWAGGER','MOCHA-CHAI','AWS','JWT'],
  },
  {
    title: 'Generador de codigo QR',
    links: [
      {
        href: 'https://github.com/nicoescudero/qr-code-generator',
        src: github,
        alt: 'github'
      },
      {
        href: 'https://qr-code-gntor.herokuapp.com/',
        src: siteweb,
        alt: 'SiteWeb'
      }
    ],
    description: 'Generador de codigo QR construido con NodeJS y plantillas ejs.',
    technology: ['NODEJS','CSS','EJS'],
  },
  {
    title: 'API-REST de Notas',
    links: [
      {
        href: 'https://github.com/nicoescudero/Api-Notes',
        src: github,
        alt: 'github'
      },
    ],
    description: 'API-REST con autenticacion de usuarios y operaciones CRUD de las notas.',
    technology: ['NODEJS','MONGOOSE','EXPRESS','JWT','EXPRESS-VALIDATOR'],
  },
  {
    title: 'Acortador de URL',
    links: [
      {
        href: 'https://github.com/nicoescudero/Url-Shortener',
        src: github,
        alt: 'github'
      },
    ],
    description: 'Acortador de URL con NodeJS.',
    technology: ['NODEJS','EXPRESS','EXPRESS-VALIDATOR','MONGOOSE'],
  },
  {
    title: 'API-REST de BLOG',
    links: [
      {
        href: 'https://github.com/nicoescudero/Blog_Api',
        src: github,
        alt: 'github'
      },
      {
        href: 'https://blogapi-production-ba40.up.railway.app/',
        src: siteweb,
        alt: 'SiteWeb'
      }
    ],
    description: 'API-REST que permite crear usuarios y tambien generar Posts.',
    technology: ['NODEJS','EXPRESS','MONGOOSE','JWT','SWAGGER','MOCHA','TEST UNITARIOS'],
  },
  {
    title: 'Blog con React',
    links: [
      {
        href: 'https://github.com/nicoescudero/Blog-React',
        src: github,
        alt: 'github'
      },
      {
        href: 'https://app.netlify.com/sites/blog-dev-ne',
        src: siteweb,
        alt: 'SiteWeb'
      }
    ],
    description: 'Este blog esta construido con REACT, funciona con la api de blogs.',
    technology: ['REACT','CSS'],
  },
  {
    title: 'API de Mercado',
    links: [
      {
        href: 'https://github.com/nicoescudero/Api_Market',
        src: github,
        alt: 'github'
      },
    ],
    description: 'API-REST de mercado; permite hacer operaciones CRUD con usuarios y productos.',
    technology: ['NODEJS','EXPRESS','MONGOOSE','JWT','PASSPORT'],
  },
  {
    title: 'Aplicación de Mercado',
    links: [
      {
        href: 'https://github.com/nicoescudero/React-Market-App',
        src: github,
        alt: 'github'
      },
    ],
    description: 'Aplicación de Mercado construida con REACT.',
    technology: ['REACT','CSS'],
  },
  {
    title: 'Aplicación de Notas',
    links: [
      {
        href: 'https://github.com/nicoescudero/NotesNR',
        src: github,
        alt: 'github'
      },
    ],
    description: 'Esta aplicación permite realizar operaciones CRUD con las notas.',
    technology: ['NODEJS','REACT','CSS','EXPRESS','MONGOOSE','WEBPACK','BABEL'],
  },
  {
    title: 'GraphQL de Productos',
    links: [
      {
        href: 'https://github.com/nicoescudero/Graphql-Api',
        src: github,
        alt: 'github'
      },
    ],
    description: 'Proyecto con GraphQL para realizar operaciones CRUD con Productos.',
    technology: ['NODEJS','EXPRESS-GRAPHQL','MONGOOSE','GRAPHQL'],
  },
];

export default projects;