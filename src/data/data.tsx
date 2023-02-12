import { ICard, ITechnologies } from "../types";
import bgClima from "../assets/images/bgClima.png";
import bgKeyGame from "../assets/images/bgKeyGame.png";

export const CARDS_PROJECTS: Array<ICard> = [
  {
    titulo: "App del clima",
    descripcion: "Aplicacion que consume una api de whateveropen",
    imagen: `${bgClima}`,
    url: "weather-app",
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
  },
  {
    titulo: "Rick and Morty app",
    descripcion: "Un aplicacion para conocer todos los personajes",
    imagen: "https://wallpapers.com/images/featured/8rc57d4ds44gqzau.jpg",
    url: "lista-de-tareas",
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
  {
    titulo: "Pelix",
    descripcion: "Aplicacion que consume una api de movieDB",
    imagen: `${bgClima}`,
    url: "pelix",
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
  {
    titulo: "Rick and Morty APP",
    descripcion: "Aplicacion que consume una api de rickandmorty",
    imagen: `${bgClima}`,
    url: "rickandmorty",
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
  {
    titulo: "BackAR",
    descripcion: "Aplicacion que consume una api de whateveropen",
    imagen: `${bgClima}`,
    url: "backar",
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
    titulo: "Redux",
    imagen: "https://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png",
  },
  {
    titulo: "Figma",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
];
