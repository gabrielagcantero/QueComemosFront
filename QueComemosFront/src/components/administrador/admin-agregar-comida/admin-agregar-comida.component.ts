import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';


@Component({
  selector: 'app-admin-agregar-comida',
  imports: [RouterModule, AdminNavbarComponent],
  templateUrl: './admin-agregar-comida.component.html',
  styleUrl: '../../../styles.css'
})
export class AdminAgregarComidaComponent {

}
