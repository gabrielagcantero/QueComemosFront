import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import { FoodsService } from '../../../app/services/foods.service';
import { CategoriaComida } from '../../../app/models/comida-model';

@Component({
  selector: 'app-admin-agregar-comida',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './admin-agregar-comida.component.html',
  styleUrl: '../../../styles.css'
})
export class AdminAgregarComidaComponent {
    // Estructura del menú
    comida = {
      nombre: '',
      precio: 0,
      categoria: CategoriaComida.ENTRADA,
      enCarta: true,
      imagen: '',
      vegetariano: false,
      habilitado: true,
      menus: null
    };

    constructor(private foodsService: FoodsService, private router: Router) {}

    register(): void {
          const data = {
            nombre: this.comida.nombre,
            precio: this.comida.precio,
            categoria: CategoriaComida[this.comida.categoria as keyof typeof CategoriaComida],
            enCarta: this.comida.enCarta,
            imagen: this.comida.imagen,
            vegetariano: this.comida.vegetariano,
            habilitado: true,
            menus: this.comida.menus
          }

          console.log(data);

          // this.foodsService.register(data).subscribe(
          //   (response: any) => {
          //     alert(response);
          //     this.router.navigate(['/admin-comidas']);
          //   },
          //   error => {
          //     console.error(error);
          //     alert('Ocurrió un error al registrar la comida.');
          //   }
          // );

    }

}
