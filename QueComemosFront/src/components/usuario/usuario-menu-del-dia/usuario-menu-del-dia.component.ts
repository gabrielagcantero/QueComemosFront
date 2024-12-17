import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FoodsService } from '../../../app/services/foods.service';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../../app/services/menu.service';
import { CategoriaComida, Comida } from '../../../app/models/comida-model';

@Component({
  selector: 'app-usuario-menu-del-dia',
  imports: [RouterModule, CommonModule],
  providers: [FoodsService, MenuService],
  templateUrl: './usuario-menu-del-dia.component.html',
  standalone: true,
  styleUrl: '../../../styles.css'
})
export class UsuarioMenuDelDiaComponent {
  entradas: any[] = [];
  principales: any[] = [];
  postres: any[] = [];
  bebidas: any[] = [];
  menuDelDia: any = {};
  menuVeggie: any = {};

  constructor(private foodsService: FoodsService, private menuService: MenuService) {}

  ngOnInit() {
    this.foodsService.getEntradas().subscribe(data => {this.entradas = data});
    this.foodsService.getPrincipales().subscribe(data => {this.principales = data});
    this.foodsService.getPostres().subscribe(data => {this.postres = data});
    this.foodsService.getBebidas().subscribe(data => {this.bebidas = data});
    this.menuService.getMenuDelDia().subscribe(data => {
      this.menuDelDia.precio = data[0]?.precio || 'N/A';
      this.menuDelDia.entrada = data[0]?.comidas.filter((comida: any) => comida.categoria === CategoriaComida.ENTRADA)[0]?.nombre  || 'N/A';
      this.menuDelDia.principal = data[0]?.comidas.filter((comida: any) => comida.categoria === CategoriaComida.PLATO_PRINCIPAL)[0]?.nombre  || 'N/A';
      this.menuDelDia.postre = data[0]?.comidas.filter((comida: any) => comida.categoria === CategoriaComida.POSTRE)[0]?.nombre || 'N/A';
      this.menuDelDia.bebida = data[0]?.comidas.filter((comida: any) => comida.categoria === CategoriaComida.BEBIDA)[0]?.nombre  || 'N/A';
    });
    this.menuService.getMenuVeggie().subscribe(data => {
      this.menuVeggie.precio = data[0]?.precio || 'N/A';
      this.menuVeggie.entrada = data[0]?.comidas.filter((comida: any) => comida.categoria === CategoriaComida.ENTRADA)[0]?.nombre  || 'N/A';
      this.menuVeggie.principal = data[0]?.comidas.filter((comida: any) => comida.categoria === CategoriaComida.PLATO_PRINCIPAL)[0]?.nombre  || 'N/A';
      this.menuVeggie.postre = data[0]?.comidas.filter((comida: any) => comida.categoria === CategoriaComida.POSTRE)[0]?.nombre || 'N/A';
      this.menuVeggie.bebida = data[0]?.comidas.filter((comida: any) => comida.categoria === CategoriaComida.BEBIDA)[0]?.nombre  || 'N/A';
    });
  }
}
