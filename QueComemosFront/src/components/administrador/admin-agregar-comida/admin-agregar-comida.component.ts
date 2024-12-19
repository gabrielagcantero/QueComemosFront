import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import { FoodsService } from '../../../app/services/foods.service';
import { CategoriaComida } from '../../../app/models/comida-model';
import { Comida } from '../../../app/models/comida-model';

@Component({
  selector: 'app-admin-agregar-comida',
  imports: [RouterModule, AdminNavbarComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './admin-agregar-comida.component.html',
  styleUrl: '../../../styles.css'
})
export class AdminAgregarComidaComponent {
  formulario: FormGroup;
  comida: Comida = new Comida();

  constructor(private fb: FormBuilder, private foodsService: FoodsService, private router: Router) {
    // Inicialización del formulario con validadores
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      categoria: ['', Validators.required],
      enCarta: [true],
      imagen: [''],
      vegetariano: [false],
      habilitado: [true],
      menus: [null],
      foto: ['']
    });
  }

  register(): void {
    // Verificar si el formulario es válido
    if (this.formulario.valid) {
      const formData = this.formulario.value;

      const { nombre, precio, categoria, enCarta, vegetariano, habilitado, menus } = this.formulario.value;

      this.comida.nombre = nombre;
      this.comida.precio = precio;
      this.comida.categoria = categoria;
      this.comida.enCarta = enCarta;
      this.comida.vegetariano = vegetariano;
      this.comida.habilitado = habilitado;

      this.foodsService.register(this.comida).subscribe(
        response => {
          alert('Comida registrada con éxito.');
          this.router.navigate(['/admin-comidas']);
        },
        error => {
          console.error(error);
          alert('Ocurrió un error al registrar la comida.');
        }
      );
    } else {
    // Si el formulario no es válido, marcar los campos como tocados para mostrar errores
    this.formulario.markAllAsTouched();
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.comida.imagen = (reader.result as string) || '';
      };

      reader.readAsDataURL(file); // Leer el archivo como Base64
    }
  }

}
