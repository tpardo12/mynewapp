export class Serie{
  
  id: number;
  nombre: string;
  channel: string;
  seasons: number;
  decription: string;
  url: string;
  imagen : string;


  constructor(
    id: number,
    nombre: string,
    channel: string,
    seasons: number,
    decription: string,
    url: string,
    imagen : string,

  ) {
    this.id = id;
    this.nombre = nombre;
    this.channel = channel;
    this.seasons = seasons;
    this.decription = decription;
    this.url = url;
    this.imagen = imagen;
  }
  
  }