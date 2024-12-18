import { Component, OnInit } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { FoodsService } from '../../../app/services/foods.service';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../../app/services/menu.service';
import { CategoriaComida, Comida } from '../../../app/models/comida-model';
import { UsuarioNavbarComponent } from '../usuario-navbar/usuario-navbar.component';


@Component({
  selector: 'app-usuario-menu-del-dia',
  imports: [RouterModule, CommonModule, UsuarioNavbarComponent, FormsModule], // Agrega FormsModule
  providers: [FoodsService, MenuService],
  templateUrl: './usuario-menu-del-dia.component.html',
  standalone: true,
  styleUrl: '../../../styles.css'
})
export class UsuarioMenuDelDiaComponent implements OnInit {
  entradas: any[] = [];
  principales: any[] = [];
  postres: any[] = [];
  bebidas: any[] = [];
  menuDelDia: any = {};
  menuVeggie: any = {};
  total: number = 0;

  constructor(private foodsService: FoodsService, private menuService: MenuService) {}

  ngOnInit() {
    this.foodsService.getEntradas().subscribe(data => {this.entradas = data});
    this.foodsService.getPrincipales().subscribe(data => {this.principales = data});
    this.foodsService.getPostres().subscribe(data => {this.postres = data});
    this.foodsService.getBebidas().subscribe(data => {this.bebidas = data});
    this.menuService.getMenuDelDia().subscribe(data => {
      this.menuDelDia.precio = data[0]?.precio || 0;
      this.menuDelDia.entrada = data[0]?.comidas.filter((comida: any) => comida.categoria === CategoriaComida.ENTRADA)[0]?.nombre  || 'N/A';
      this.menuDelDia.principal = data[0]?.comidas.filter((comida: any) => comida.categoria === CategoriaComida.PLATO_PRINCIPAL)[0]?.nombre  || 'N/A';
      this.menuDelDia.postre = data[0]?.comidas.filter((comida: any) => comida.categoria === CategoriaComida.POSTRE)[0]?.nombre || 'N/A';
      this.menuDelDia.bebida = data[0]?.comidas.filter((comida: any) => comida.categoria === CategoriaComida.BEBIDA)[0]?.nombre  || 'N/A';
    });
    this.menuService.getMenuVeggie().subscribe(data => {
      this.menuVeggie.precio = data[0]?.precio || 0;
      this.menuVeggie.entrada = data[0]?.comidas.filter((comida: any) => comida.categoria === CategoriaComida.ENTRADA)[0]?.nombre  || 'N/A';
      this.menuVeggie.principal = data[0]?.comidas.filter((comida: any) => comida.categoria === CategoriaComida.PLATO_PRINCIPAL)[0]?.nombre  || 'N/A';
      this.menuVeggie.postre = data[0]?.comidas.filter((comida: any) => comida.categoria === CategoriaComida.POSTRE)[0]?.nombre || 'N/A';
      this.menuVeggie.bebida = data[0]?.comidas.filter((comida: any) => comida.categoria === CategoriaComida.BEBIDA)[0]?.nombre  || 'N/A';
    });
  }

  updateTotal() {
    this.total = 0;
    this.total += (this.menuDelDia.selectedQuantity || 0) * this.menuDelDia.precio;
    this.total += (this.menuVeggie.selectedQuantity || 0) * this.menuVeggie.precio;
    this.entradas.forEach(entrada => {
      this.total += (entrada.selectedQuantity || 0) * entrada.precio;
    });
    this.principales.forEach(principal => {
      this.total += (principal.selectedQuantity || 0) * principal.precio;
    });
    this.postres.forEach(postre => {
      this.total += (postre.selectedQuantity || 0) * postre.precio;
    });
    this.bebidas.forEach(bebida => {
      this.total += (bebida.selectedQuantity || 0) * bebida.precio;
    });
  }

}
