import { ICard, ITechnologies } from "../types";
import bgClima from "../assets/images/bgClima.png";
import bgKeyGame from "../assets/images/bgKeyGame.png";

export const CARDS_PROJECTS: Array<ICard> = [
  {
    titulo: "Canerest",
    descripcion: "Aplicacion para buscar las diferentes razas de perros al mejor estilo de pinterest",
    imagen: "https://wakyma.com/blog/wp-content/uploads/2020/09/por-que-hay-tantas-razas-de-perros-diferentes.jpg",
    url: "canerest-app",
    enlaces: {
      deploy: "https://canerest.netlify.app/",
      repo: "https://github.com/agusmartinez30/razas",
    },
    stack: [
      {
        imagen:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      },
      {
        imagen:
          "https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png",
      },
      {
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png",
      },
      {
        imagen: "https://sweetalert2.github.io/images/SweetAlert2.png",
      },
    ],
    rowspan: 1,
    colspan: 1
  },
  {
    titulo: "Keygame",
    imagen: `${bgKeyGame}`,
    descripcion:
      "Este es un juego que consiste en adivinar la llave ganadora :D ",
    url: "keymaster",
    enlaces: {
      deploy: "https://keyter.netlify.app/",
      repo: "https://github.com/agusmartinez30/keyter",
    },
    stack: [
      {
        imagen:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      },
      {
        imagen:
          "https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png",
      },
      {
        imagen: "https://avatars.githubusercontent.com/u/54212428?s=280&v=4",
      },
      {
        imagen: "https://sweetalert2.github.io/images/SweetAlert2.png",
      },
    ],
    rowspan: 0,
    colspan: 3
  },
  {
    titulo: "Rick and Morty app",
    descripcion: "Un aplicacion para conocer todos los personajes",
    imagen: "https://wallpapers.com/images/featured/8rc57d4ds44gqzau.jpg",
    url: "lista-de-tareas",
    enlaces: {
      deploy: "https://context-rick-morty.vercel.app/",
      repo: "https://github.com/agusmartinez30/context-rick-morty",
    },
    stack: [
      {
        imagen:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      },
      {
        imagen:
          "https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png",
      },
      {
        imagen: "https://avatars.githubusercontent.com/u/54212428?s=280&v=4",
      },
      {
        imagen: "https://sweetalert2.github.io/images/SweetAlert2.png",
      },
    ],
    rowspan: 2,
    colspan: 1
  },
  {
    titulo: "Rocknet",
    descripcion: "Radio web que sintoniza canciones de rock.",
    imagen: 'https://static.vecteezy.com/system/resources/previews/002/972/281/original/symbol-of-rock-n-roll-concept-art-of-rock-music-in-monochrome-style-vector.jpg',
    url: "rocknet",
    enlaces: {
      deploy: "https://rocknet.netlify.app/",
      repo: "https://github.com/agusmartinez30/razas",
    },
    stack: [
      {
        imagen:
          "https://cdn-icons-png.flaticon.com/512/174/174854.png",
      },
      {
        imagen:
          "https://cdn.cdnlogo.com/logos/c/18/css.svg",
      },
      {
        imagen: "https://i.pinimg.com/originals/38/4d/1e/384d1e8c3c8dcfee10ab0b980f8075cd.png",
      },
      {
        imagen: "https://cdn-icons-png.flaticon.com/512/3621/3621476.png",
      },
    ],
    rowspan: 0,
    colspan: 2
  },
  {
    titulo: "Whours",
    descripcion: "Es una aplicación con el objetivo de calcular cuantas horas trabajaste",
    imagen: 'https://tecnologialatam.com/wp-content/uploads/2021/03/apple-watch-negro-img1.jpeg',
    url: "whours",
    enlaces: {
      deploy: "https://whour.netlify.app/",
      repo: "https://github.com/agusmartinez30/razas",
    },
    stack: [
      {
        imagen:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      },
      {
        imagen:
          "https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png",
      },
      {
        imagen: "https://avatars.githubusercontent.com/u/54212428?s=280&v=4",
      },
    ],
    rowspan: 0,
    colspan: 2
  },
  {
    titulo: "Pelix",
    descripcion: "Aplicacion que muestra los ultimos estrenos",
    imagen: 'https://www.gannett-cdn.com/-mm-/68f9674e5c2712a775dc097739065b28b38498fd/c=0-73-1271-791/local/-/media/2018/07/06/Phoenix/Phoenix/636665025413329805-kanopy.png?width=1200&disable=upscale&format=pjpg&auto=webp',
    url: "pelix",
    enlaces: {
      deploy: "https://peflix.netlify.app/",
      repo: "https://github.com/agusmartinez30/razas",
    },
    stack: [
      {
        imagen:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      },
      {
        imagen:
          "https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png",
      },
      {
        imagen: "https://avatars.githubusercontent.com/u/54212428?s=280&v=4",
      },
      {
        imagen: "https://sweetalert2.github.io/images/SweetAlert2.png",
      },
    ],
    rowspan: 0,
    colspan: 2
  },
];

export const CARDS_TECHNOLOGIES: Array<ITechnologies> = [
  {
    titulo: "React",
    imagen:
      "https://ih1.redbubble.net/image.1663028952.6324/st,small,507x507-pad,600x600,f8f8f8.u2.jpg",
  },
  {
    titulo: "Typescript",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
  },
  {
    titulo: "JavaScript",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
  },
  {
    titulo: "HTML",
    imagen: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
  },
  {
    titulo: "CSS",
    imagen:
      "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png",
  },
  {
    titulo: "NodeJS",
    imagen:
      "https://ih1.redbubble.net/image.1637717834.1604/pp,840x830-pad,1000x1000,f8f8f8.u1.jpg",
  },
  {
    titulo: "Chakra UI",
    imagen: "https://avatars.githubusercontent.com/u/54212428?s=280&v=4",
  },
  {
    titulo: "SQL",
    imagen:
      "https://w7.pngwing.com/pngs/170/924/png-transparent-microsoft-sql-server-microsoft-azure-sql-database-microsoft-text-logo-microsoft-azure.png",
  },
  {
    titulo: "Tailwind CSS",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png",
  },
  {
    titulo: "Figma",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
];
