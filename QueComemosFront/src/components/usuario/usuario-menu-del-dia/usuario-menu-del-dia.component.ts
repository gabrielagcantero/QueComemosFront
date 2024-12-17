import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { GetFoodsService } from '../../../app/services/foods.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario-menu-del-dia',
  imports: [RouterModule, CommonModule],
  providers: [GetFoodsService],
  templateUrl: './usuario-menu-del-dia.component.html',
  standalone: true,
  styleUrl: '../../../styles.css'
})
export class UsuarioMenuDelDiaComponent {
  entradas: any[] = [];
  principales: any[] = [];
  postres: any[] = [];
  bebidas: any[] = [];

  constructor(private getFoodsService: GetFoodsService) {}

  ngOnInit() {
    this.getFoodsService.getEntradas().subscribe(data => {this.entradas = data});
    this.getFoodsService.getPrincipales().subscribe(data => {this.principales = data});
    this.getFoodsService.getPostres().subscribe(data => {this.postres = data});
    this.getFoodsService.getBebidas().subscribe(data => {this.bebidas = data});
  }
}
