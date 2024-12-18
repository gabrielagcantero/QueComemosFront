import {Component, OnInit} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {FoodsService} from '../../../app/services/foods.service';
import {MenuService} from '../../../app/services/menu.service';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-admin-agregar-menu',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './admin-agregar-menu.component.html',
  styleUrl: '../../../styles.css'
})
export class AdminAgregarMenuComponent implements OnInit {
  entradas: any[] = [];
  principales: any[] = [];
  bebidas: any[] = [];
  postres: any[] = [];

  // Estructura del menú
  menu = {
    nombre: '',
    precio: 0,
    entradaId: '',
    platoPrincipalId: '',
    bebidaId: '',
    postreId: '',
    esVegetariano: false,
    fecha: ''
  };

  constructor(
    private foodsService: FoodsService,
    private menuService: MenuService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.foodsService.getEntradas().subscribe(data => this.entradas = data);
    this.foodsService.getPrincipales().subscribe(data => this.principales = data);
    this.foodsService.getBebidas().subscribe(data => this.bebidas = data);
    this.foodsService.getPostres().subscribe(data => this.postres = data);
  }

  submitForm(): void {
    const menuData = {
      nombre: this.menu.nombre,
      precio: this.menu.precio,
      comidas: [
        {id: this.menu.entradaId},
        {id: this.menu.platoPrincipalId},
        {id: this.menu.bebidaId},
        {id: this.menu.postreId}
      ],
      esVegetariano: this.menu.esVegetariano,
      fecha: this.menu.fecha
    };

    this.menuService.register(menuData).subscribe(
      (response: any) => {
        alert(response); // Ahora la respuesta será el texto "Menú registrado con éxito."
        this.router.navigate(['/admin-menus']);
      },
      error => {
        console.error(error);
        alert('Ocurrió un error al registrar el menú.');
      }
    );
  }
}
