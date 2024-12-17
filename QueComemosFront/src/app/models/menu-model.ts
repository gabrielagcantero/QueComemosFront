import { Comida } from "./comida-model";

export class Menu{
    nombre: string = '';
    precio: number  = 0.0;
    vegetariano: boolean = false;
    fecha: Date = new Date();
    habilitado: boolean = true;
    comidas: Comida[] = [];

    constructor(
        nombre: string = '',
        precio: number =  0.0,
        vegetariano: boolean = false,
        fecha: Date = new Date(),
        habilitado: boolean = true,
        comidas: Comida[] = []
    ){
        this.nombre = nombre;
        this.precio = precio;
        this.vegetariano = vegetariano;
        this.fecha = fecha;
        this.habilitado = habilitado;
        this.comidas = comidas;
    }
}

