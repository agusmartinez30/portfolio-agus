export interface ICard {
    titulo: string;
    descripcion?: string;
    imagen: string;
    url: string;
    stack?: object[]
    enlaces?: object
    rowspan?: number
    colspan?: number

  }

  export interface ITechnologies {
    titulo: string;
    imagen: string;
  }