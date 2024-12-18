import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';


@Component({
  selector: 'app-admin-estadisticas',
  imports: [RouterModule, AdminNavbarComponent],
  templateUrl: './admin-estadisticas.component.html',
  styleUrl: '../../../styles.css'
})
export class AdminEstadisticasComponent {

}
