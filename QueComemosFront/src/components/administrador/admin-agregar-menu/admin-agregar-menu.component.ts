import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';


@Component({
  selector: 'app-admin-agregar-menu',
  imports: [RouterModule, AdminNavbarComponent],
  templateUrl: './admin-agregar-menu.component.html',
  styleUrl: '../../../styles.css'
})
export class AdminAgregarMenuComponent {

}
