import { Comida } from "./comida-model";
import { Menu } from "./menu-model";
import { Usuario } from "./usuario-model";

export class Compra {
    id: number = 0;
    cliente?: Usuario;
    //corregir cuando agreguemos pagos
    pago: string  = "efectivo";
    menus: Menu[] = [];
    comidas: Comida[] = [];
    precioTotal: number = 0.0;
    fecha?: Date;
    codigoQR: string = '';
    //corregir cuando agreguermos turnos
    turno: string = '';
    estado: string = 'pendiente';
    habilitado: boolean = true;
  
    constructor(
        id: number = 0,
        cliente?: Usuario,
        //corregir cuando agreguemos pagos
        pago: string  = "efectivo",
        menus: Menu[] = [],
        comidas: Comida[] = [],
        precioTotal: number = 0.0,
        fecha?: Date,
        codigoQR: string = '',
        //corregir cuando agreguermos turnos
        turno: string = '',
        estado: string = 'pendiente',
        habilitado: boolean = true,
    ) {
        this.cliente = cliente;
        this.pago = pago;
        this.menus = menus;
        this.comidas = comidas;
        this.precioTotal = precioTotal;
        this.fecha = fecha;
        this.codigoQR = codigoQR;
        this.turno = turno;
        this.estado = estado;
        this.habilitado = habilitado;
    }
  }