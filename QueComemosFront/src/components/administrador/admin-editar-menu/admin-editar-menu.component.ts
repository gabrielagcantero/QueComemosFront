import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { FoodsService } from '../../../app/services/foods.service';
import { MenuService } from '../../../app/services/menu.service';
import { CommonModule } from '@angular/common';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';

@Component({
  selector: 'app-admin-editar-menu',
  imports: [RouterModule, ReactiveFormsModule, AdminNavbarComponent, CommonModule],
  templateUrl: './admin-editar-menu.component.html',
  styleUrl: '../../../styles.css'
})
export class AdminEditarMenuComponent implements OnInit {
  formulario: FormGroup;
  entradas: any[] = [];
  principales: any[] = [];
  bebidas: any[] = [];
  postres: any[] = [];
  menuId!: number; // ID del menú a editar

  constructor(
    private fb: FormBuilder,
    private foodsService: FoodsService,
    private menuService: MenuService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Inicialización del formulario con validadores
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      entradaId: [null],
      platoPrincipalId: [null],
      bebidaId: [null],
      postreId: [null],
      esVegetariano: [false], // Checkbox no requiere validación
      fecha: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Obtener el ID del menú desde la URL
    this.menuId = Number(this.route.snapshot.paramMap.get('id'));

    // Cargar los datos existentes del menú
    this.loadMenuData();

    // Cargar las opciones (entradas, principales, bebidas, postres)
    this.foodsService.getEntradas().subscribe(data => (this.entradas = data));
    this.foodsService.getPrincipales().subscribe(data => (this.principales = data));
    this.foodsService.getBebidas().subscribe(data => (this.bebidas = data));
    this.foodsService.getPostres().subscribe(data => (this.postres = data));
  }

  // Método para cargar los datos del menú a editar
  loadMenuData(): void {
    this.menuService.getMenuByIdEdit(this.menuId).subscribe(
      (menu) => {
        // Rellenar el formulario con los datos existentes
        this.formulario.patchValue({
          nombre: menu.nombre,
          precio: menu.precio,
          entradaId: menu.comidas.find((c: any) => c.categoria === 'ENTRADA')?.id,
          platoPrincipalId: menu.comidas.find((c: any) => c.categoria === 'PLATO_PRINCIPAL')?.id,
          bebidaId: menu.comidas.find((c: any) => c.categoria === 'BEBIDA')?.id,
          postreId: menu.comidas.find((c: any) => c.categoria === 'POSTRE')?.id,
          esVegetariano: menu.esVegetariano,
          fecha: menu.fecha
        });
      },
      (error) => {
        console.error('Error al cargar el menú:', error);
        alert('Error al cargar el menú.');
      }
    );
  }

  // Método para enviar el formulario y editar el menú
  submitForm(): void {
    console.log(this.formulario.valid);
    if (this.formulario.valid) {
      const formData = this.formulario.value;

      const comidas = [];

      if (formData.entradaId != null) {
        comidas.push({ id: formData.entradaId });
      }
      if (formData.platoPrincipalId != null) {
        comidas.push({ id: formData.platoPrincipalId });
      }
      if (formData.bebidaId != null) {
        comidas.push({ id: formData.bebidaId });
      }
      if (formData.postreId != null) {
        comidas.push({ id: formData.postreId });
      }

      // Estructurar los datos para el backend
      const menuData = {
        id: this.menuId, // ID del menú a actualizar
        nombre: formData.nombre,
        precio: formData.precio,
        comidas: comidas, // Solo se agregan comidas válidas
        esVegetariano: formData.esVegetariano,
        fecha: formData.fecha,
        habilitado: true
      };


      // Enviar los datos al backend
      this.menuService.update(menuData).subscribe(
        (response) => {
          alert('Menú actualizado con éxito.');
          this.router.navigate(['/admin-menus']);
        },
        (error) => {
          console.error(error);
          alert('Ocurrió un error al actualizar el menú.');
        }
      );
    } else {
      // Si el formulario no es válido, marcar los campos como tocados para mostrar errores
      this.formulario.markAllAsTouched();
    }
  }
}
