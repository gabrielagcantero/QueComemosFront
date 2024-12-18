import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {Router, RouterLink, RouterModule} from '@angular/router';
import { FoodsService } from '../../../app/services/foods.service';
import { MenuService } from '../../../app/services/menu.service';
import { CommonModule } from '@angular/common';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';

@Component({
  selector: 'app-admin-agregar-menu',
  imports: [RouterModule, ReactiveFormsModule, AdminNavbarComponent, CommonModule],
  templateUrl: './admin-agregar-menu.component.html',
  standalone: true,
  styleUrl: '../../../styles.css'
})
export class AdminAgregarMenuComponent implements OnInit {
  formulario: FormGroup;
  entradas: any[] = [];
  principales: any[] = [];
  bebidas: any[] = [];
  postres: any[] = [];

  constructor(
    private fb: FormBuilder,
    private foodsService: FoodsService,
    private menuService: MenuService,
    private router: Router
  ) {
    // Inicialización del formulario con validadores
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      entradaId: ['', Validators.required],
      platoPrincipalId: ['', Validators.required],
      bebidaId: ['', Validators.required],
      postreId: ['', Validators.required],
      esVegetariano: [false], // Checkbox no requiere validación
      fecha: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Carga de datos desde el servicio
    this.foodsService.getEntradas().subscribe(data => this.entradas = data);
    this.foodsService.getPrincipales().subscribe(data => this.principales = data);
    this.foodsService.getBebidas().subscribe(data => this.bebidas = data);
    this.foodsService.getPostres().subscribe(data => this.postres = data);
  }

  submitForm(): void {
    // Verificar si el formulario es válido
    if (this.formulario.valid) {
      const formData = this.formulario.value;

      // Estructurar los datos para el backend
      const menuData = {
        nombre: formData.nombre,
        precio: formData.precio,
        comidas: [
          { id: formData.entradaId },
          { id: formData.platoPrincipalId },
          { id: formData.bebidaId },
          { id: formData.postreId }
        ],
        esVegetariano: formData.esVegetariano,
        fecha: formData.fecha
      };

      // Enviar los datos al backend
      this.menuService.register(menuData).subscribe(
        response => {
          alert('Menú registrado con éxito.');
          this.router.navigate(['/admin-menus']);
        },
        error => {
          console.error(error);
          alert('Ocurrió un error al registrar el menú.');
        }
      );
    } else {
      // Si el formulario no es válido, marcar los campos como tocados para mostrar errores
      this.formulario.markAllAsTouched();
    }
  }
}
