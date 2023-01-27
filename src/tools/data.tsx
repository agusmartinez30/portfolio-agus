import { ICard } from "../types";
import { ITechnologies } from "../types";
import bgKeyGame from "../assets/bgKeyGame.png";
import bgClima from "../assets/bgClima.png";

export const CARDS_PROJECTS: Array<ICard> = [
  {
    titulo: "App del clima",
    descripcion: "Aplicacion que consume una api de whateveropen",
    imagen: `${bgClima}`,
    url: "weather-app",
    tecnologias: [ "JS", "React"],
    enlaces:  "http://github.com/agusmartinez30"
  },
  {
    titulo: "Juego de llaves",
    imagen: `${bgKeyGame}`,
    descripcion: "Aplicacion que consume una api de whateveropen",
    url: "keymaster",
  },
  {
    titulo: "Juego de llaves",
    descripcion: "Aplicacion que consume una api de whateveropen",
    imagen: `${bgClima}`,
    url: "weather-app",
  },
  {
    titulo: "Juego de llaves",
    descripcion: "Aplicacion que consume una api de whateveropen",
    imagen: `${bgClima}`,
    url: "weather-app",
  },
  {
    titulo: "Juego de llaves",
    descripcion: "Aplicacion que consume una api de whateveropen",
    imagen: `${bgClima}`,
    url: "weather-app",
  },
  {
    titulo: "Juego de llaves",
    descripcion: "Aplicacion que consume una api de whateveropen",
    imagen: `${bgClima}`,
    url: "weather-app",
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
      "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
  },
];
