import { ICard, ITechnologies } from "../types";
import bgClima from "../assets/images/bgClima.png";
import bgKeyGame from "../assets/images/bgKeyGame.png";

export const CARDS_PROJECTS: Array<ICard> = [
  {
    titulo: "Dogerest",
    descripcion: "Aplicacion para buscar las diferentes razas de perros al mejor estilo de pinterest. Ademas puedes agregar a los perritos que mas te gusten a la sección de favoritos.",
    imagen: "https://wakyma.com/blog/wp-content/uploads/2020/09/por-que-hay-tantas-razas-de-perros-diferentes.jpg",
    url: "canerest-app",
    enlaces: {
      deploy: "https://dogerest.vercel.app/",
      repo: "https://github.com/agusmartinez30/razas",
    },
    stack: [
      {
        imagen:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
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
    descripcion: "Esta aplicación consume la API de Rick and Morty. Tenemos un buscador para poder buscar cada personaje de la serie",
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
    titulo: "Whours",
    descripcion: "Es una aplicación con el objetivo de calcular cuantas horas trabajaste",
    imagen: 'https://plus.unsplash.com/premium_photo-1677160318655-e535d1692c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
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
    titulo: "Time Mater",
    descripcion: "Aplicacion de lista de tareas",
    imagen: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=739&q=80',
    url: "todolist",
    enlaces: {
      deploy: "https://timetamer.vercel.app/",
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
  {
    titulo: "Pelix",
    descripcion: "Aplicacion que muestra los ultimos estrenos",
    imagen: 'https://images.unsplash.com/photo-1615986201152-7686a4867f30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80',
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
