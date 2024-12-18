import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';


@Component({
  selector: 'app-admin-usuarios',
  imports: [RouterModule, AdminNavbarComponent],
  templateUrl: './admin-usuarios.component.html',
  styleUrl: '../../../styles.css'
})
export class AdminUsuariosComponent {

}
