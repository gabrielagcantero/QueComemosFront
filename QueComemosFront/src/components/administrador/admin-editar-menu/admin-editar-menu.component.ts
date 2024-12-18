import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';


@Component({
  selector: 'app-admin-editar-menu',
  imports: [RouterModule, AdminNavbarComponent],
  templateUrl: './admin-editar-menu.component.html',
  styleUrl: '../../../styles.css'
})
export class AdminEditarMenuComponent {

}
