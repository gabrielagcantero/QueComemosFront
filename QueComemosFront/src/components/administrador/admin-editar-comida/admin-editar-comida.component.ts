import { Component } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { FoodsService } from '../../../app/services/foods.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-admin-editar-comida',
  imports: [RouterModule, AdminNavbarComponent, ReactiveFormsModule, CommonModule],
  providers: [FoodsService],
  templateUrl: './admin-editar-comida.component.html',
  styleUrl: '../../../styles.css'
})
export class AdminEditarComidaComponent {
  formulario: FormGroup;
  foodData: any = {};
  id = 0;

  constructor(private fb: FormBuilder, private foodsService: FoodsService, private route: ActivatedRoute, private router: Router) {
    
    this.foodsService.getComidaById(this.route.snapshot.params['id']).subscribe(data => { this.foodData = data; console.log(this.foodData);});

    // Inicialización del formulario con validadores
    this.formulario = this.fb.group({
      nombre: [this.foodData.nombre, Validators.required],
      precio: [this.foodData.precio , [Validators.required, Validators.min(0)]],
      categoria: [this.foodData.categoria, Validators.required],
      enCarta: [this.foodData.enCarta],
      imagen: [this.foodData.imagen, Validators.required],
      vegetariano: [this.foodData.vegetariano],
      habilitado: [this.foodData.habilitado],
      menus: [this.foodData.menus]
    });
  }

  update(): void {
    // Verificar si el formulario es válido
    if (this.formulario.valid) {
      const formData = this.formulario.value;

      const data = {
        id: this.foodData.id,
        nombre: formData.nombre,
        precio: formData.precio,
        categoria: formData.categoria,
        enCarta: formData.enCarta,
        imagen: formData.imagen,
        vegetariano: formData.vegetariano,
        habilitado: true,
        menus: formData.menus
      }

      this.foodsService.update(data).subscribe(
        response => {
          alert('Comida Actualizada con éxito.');
          this.router.navigate(['/admin-comidas']);
        },
        error => {
          console.error(error);
          alert('Ocurrió un error al actualizar la comida.');
        }
      );
    }
  }
}
