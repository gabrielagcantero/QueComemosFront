// import { Menu } from "./menu-model";

export class Comida {
    id: number = 0;
    nombre: string = '';
    precio: number  = 0.0;
    categoria: CategoriaComida = CategoriaComida.ENTRADA;
    enCarta: boolean = false;
    imagen: string = '';
    vegetariano: boolean = false;
    habilitado: boolean = true;
    // menues: Menu[] = [];
  
    constructor(
      nombre: string = '',
      precio: number =  0.0,
      categoria: CategoriaComida = CategoriaComida.ENTRADA,
      enCarta: boolean = false,
      imagen: string = '',
      vegetariano: boolean = false,
      habilitado: boolean = true,
    ) {
      this.nombre = nombre;
      this.precio = precio;
      this.categoria = categoria;
      this.enCarta = enCarta;
      this.imagen = imagen;
      this.vegetariano = vegetariano;
      this.habilitado = habilitado;
    }
  }

  export enum CategoriaComida {
    ENTRADA = "ENTRADA",
    PLATO_PRINCIPAL = "PLATO_PRINCIPAL",
    POSTRE = "POSTRE",
    BEBIDA = "BEBIDA"
}