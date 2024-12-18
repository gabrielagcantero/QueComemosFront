import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';


@Component({
  selector: 'app-admin-sugerencia',
  imports: [RouterModule, AdminNavbarComponent],
  templateUrl: './admin-sugerencia.component.html',
  styleUrl: '../../../styles.css'
})
export class AdminSugerenciaComponent {

}
