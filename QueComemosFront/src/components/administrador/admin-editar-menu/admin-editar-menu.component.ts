import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MenuService} from '../../../app/services/menu.service';
import {FoodsService} from '../../../app/services/foods.service';


@Component({
  selector: 'app-admin-editar-menu',
  imports: [RouterModule, AdminNavbarComponent, ReactiveFormsModule],
  templateUrl: './admin-editar-menu.component.html',
  styleUrl: '../../../styles.css'
})
export class AdminEditarMenuComponent implements OnInit {
  menuForm!: FormGroup; // Formulario reactivo
  menuId!: number; // ID del menú a editar
  entradas: any[] = [];
  principales: any[] = [];
  postres: any[] = [];
  bebidas: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private menuService: MenuService,
    private foodsService: FoodsService
  ) {}

  ngOnInit(): void {
    // Obtener el ID del menú desde la URL
    this.menuId = Number(this.route.snapshot.paramMap.get('id'));

    // Inicializar el formulario
    this.menuForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      vegetariano: [false],
      fecha: ['', Validators.required],
      entrada: ['', Validators.required],
      principal: ['', Validators.required],
      postre: ['', Validators.required],
      bebida: ['', Validators.required],
    });

    // Cargar datos del menú
    this.menuService.getMenuById(this.menuId).subscribe(menu => {
      this.menuForm.patchValue({
        nombre: menu.nombre,
        precio: menu.precio,
        vegetariano: menu.vegetariano,
        fecha: menu.fecha,
        entrada: menu.comidas.find((c: any) => c.categoria === 'ENTRADA')?.id || '',
        principal: menu.comidas.find((c: any) => c.categoria === 'PLATO_PRINCIPAL')?.id || '',
        postre: menu.comidas.find((c: any) => c.categoria === 'POSTRE')?.id || '',
        bebida: menu.comidas.find((c: any) => c.categoria === 'BEBIDA')?.id || '',
      });
    });

    // Cargar opciones de comida
    this.loadFoodOptions();
  }

  loadFoodOptions(): void {
    this.foodsService.getEntradas().subscribe(data => this.entradas = data);
    this.foodsService.getPrincipales().subscribe(data => this.principales = data);
    this.foodsService.getPostres().subscribe(data => this.postres = data);
    this.foodsService.getBebidas().subscribe(data => this.bebidas = data);
  }

  onSubmit(): void {
    if (this.menuForm.valid) {
      const updatedMenu = {
        id: this.menuId,
        ...this.menuForm.value,
      };

      // Ajustar estructura de comidas para el backend
      updatedMenu.comidas = [
        { id: this.menuForm.value.entrada },
        { id: this.menuForm.value.principal },
        { id: this.menuForm.value.postre },
        { id: this.menuForm.value.bebida },
      ];

      delete updatedMenu.entrada;
      delete updatedMenu.principal;
      delete updatedMenu.postre;
      delete updatedMenu.bebida;

      this.menuService.updateMenu(updatedMenu).subscribe({
        next: () => {
          alert('Menú actualizado con éxito.');
          this.router.navigate(['/admin-menus']);
        },
        error: (err) => {
          alert('Error al actualizar el menú: ' + err);
        }
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/admin-menus']);
  }
}
