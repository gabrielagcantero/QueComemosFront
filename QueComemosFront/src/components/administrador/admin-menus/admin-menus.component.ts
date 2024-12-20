import { Component, OnInit } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../../app/services/menu.service';


@Component({
  selector: 'app-admin-menus',
  imports: [RouterModule, AdminNavbarComponent, CommonModule],
  providers: [MenuService],
  templateUrl: './admin-menus.component.html',
  styleUrl: '../../../styles.css'
})
export class AdminMenusComponent implements OnInit {
  menues: any[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getItems().subscribe(
      (data) => {
        this.menues = data;
        console.log('Menús obtenidos', this.menues);
       },
       (error) => {
        console.error('Error al obtener los menús', error);
      }
    );
  }

  hasCategory(menu: any, category: string): boolean {
    return menu.comidas.some((comida: any) => comida.categoria === category);
  }

}
