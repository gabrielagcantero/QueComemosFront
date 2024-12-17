export class Usuario {
    nombre: string = '';
    apellido: string = '';
    email: string = '';
    dni: string = '';
    clave: string = '';
    foto: string = '';
    habilitado: boolean = true;
  
    constructor(
      nombre: string = '',
      apellido: string = '',
      email: string = '',
      dni: string = '',
      clave: string = '',
      foto: string = ''
    ) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.email = email;
      this.dni = dni;
      this.clave = clave;
      this.foto = foto;
    }
  }