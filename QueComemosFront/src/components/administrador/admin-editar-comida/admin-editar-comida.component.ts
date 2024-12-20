import { Component } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { FoodsService } from '../../../app/services/foods.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Comida } from '../../../app/models/comida-model';

@Component({
  selector: 'app-admin-editar-comida',
  imports: [RouterModule, AdminNavbarComponent, ReactiveFormsModule, CommonModule],
  providers: [FoodsService],
  templateUrl: './admin-editar-comida.component.html',
  styleUrl: '../../../styles.css'
})
export class AdminEditarComidaComponent {
  formulario!: FormGroup;
  foodData: any = {};
  id = 0;
  comida: Comida = new Comida();
  fileSelected = false; // Variable para rastrear si se seleccionó un archivo



  constructor(private fb: FormBuilder, private foodsService: FoodsService, private route: ActivatedRoute, private router: Router) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      precio: [0, [Validators.required, Validators.min(0)]],
      categoria: ['', Validators.required],
      enCarta: [false],
      imagen: [''],
      vegetariano: [false],
      habilitado: [false],
      menus: [[]],
    });

    this.foodsService.getComidaById(this.route.snapshot.params['id']).subscribe(data => {
      this.foodData = data;

      // Inicialización del formulario con los datos obtenidos
      this.formulario.patchValue({
        nombre: this.foodData.nombre,
        precio: this.foodData.precio,
        categoria: this.foodData.categoria,
        enCarta: this.foodData.enCarta,
        vegetariano: this.foodData.vegetariano,
        habilitado: this.foodData.habilitado,
        menus: this.foodData.menus,
      });
    });
  }

  update(): void {
    // Verificar si el formulario es válido
    if (this.formulario.valid) {
      const formData = this.formulario.value;

      const { id, nombre, precio, categoria, enCarta, vegetariano, habilitado, menus } = this.formulario.value;

      this.comida.id = this.foodData.id;
      this.comida.nombre = nombre;
      this.comida.precio = precio;
      this.comida.categoria = categoria;
      this.comida.enCarta = enCarta;
      this.comida.vegetariano = vegetariano;
      this.comida.habilitado = habilitado;

      // Si no se seleccionó un archivo, usar la imagen original
      if (!this.fileSelected) {
        this.comida.imagen = this.foodData.imagen;
      }

      this.foodsService.update(this.comida).subscribe(
        response => {
          alert('Comida Actualizada con éxito.');
          this.router.navigate(['/admin-comidas']);
        },
        error => {
          console.error(error);
          alert('Ocurrió un error al actualizar la comida.');
        }
      );
    } else {
      // Imprimir errores de validación en consola
      Object.keys(this.formulario.controls).forEach(key => {
        const controlErrors = this.formulario.get(key)?.errors;
        if (controlErrors) {
          console.log(`Control: ${key}, Errores:`, controlErrors);
        }
      });
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
  
      reader.onload = () => {
        this.comida.imagen = reader.result as string;
        this.fileSelected = true; // Marcar que se seleccionó un archivo
      };
  
      reader.readAsDataURL(file); // Leer el archivo como Base64
    } else {
      this.comida.imagen = this.foodData.imagen;
    }
  }
}
