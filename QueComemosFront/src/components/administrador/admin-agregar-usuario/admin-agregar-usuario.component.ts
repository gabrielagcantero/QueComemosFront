import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';


@Component({
  selector: 'app-admin-agregar-usuario',
  imports: [RouterModule, AdminNavbarComponent],
  templateUrl: './admin-agregar-usuario.component.html',
  styleUrl: '../../../styles.css'
})
export class AdminAgregarUsuarioComponent {

}
