import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { FoodsService } from '../../../app/services/foods.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-admin-comidas',
  imports: [RouterModule, AdminNavbarComponent, CommonModule],
  providers: [FoodsService],
  templateUrl: './admin-comidas.component.html',
  styleUrl: '../../../styles.css'
})
export class AdminComidasComponent {
  comidas: any[] = [];

  constructor(private foodsService: FoodsService) {}

  ngOnInit() {
    this.foodsService.getItems().subscribe(data => {this.comidas = data});
  }
}
