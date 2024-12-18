import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import { FoodsService } from '../../../app/services/foods.service';
import { CategoriaComida } from '../../../app/models/comida-model';

@Component({
  selector: 'app-admin-agregar-comida',
  imports: [RouterModule, AdminNavbarComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './admin-agregar-comida.component.html',
  styleUrl: '../../../styles.css'
})
export class AdminAgregarComidaComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder, private foodsService: FoodsService, private router: Router) {
    // Inicialización del formulario con validadores
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      categoria: ['', Validators.required],
      enCarta: [true],
      imagen: ['', Validators.required],
      vegetariano: [false],
      habilitado: [true],
      menus: [null]
    });
  }

  register(): void {
    // Verificar si el formulario es válido
    if (this.formulario.valid) {
      const formData = this.formulario.value;

      const data = {
        nombre: formData.nombre,
        precio: formData.precio,
        categoria: CategoriaComida[formData.categoria as keyof typeof CategoriaComida],
        enCarta: formData.enCarta,
        imagen: formData.imagen,
        vegetariano: formData.vegetariano,
        habilitado: true,
        menus: formData.menus
      }

      this.foodsService.register(data).subscribe(
        response => {
          alert('Comida registrada con éxito.');
          this.router.navigate(['/admin-comidas']);
        },
        error => {
          console.error(error);
          alert('Ocurrió un error al registrar la comida.');
        }
      );
    }

  }

}
