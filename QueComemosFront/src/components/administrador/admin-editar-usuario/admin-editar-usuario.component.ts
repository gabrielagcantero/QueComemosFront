import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';


@Component({
  selector: 'app-admin-editar-usuario',
  imports: [RouterModule, AdminNavbarComponent],
  templateUrl: './admin-editar-usuario.component.html',
  styleUrl: '../../../styles.css'
})
export class AdminEditarUsuarioComponent {

}
