import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';


@Component({
  selector: 'app-admin-menus',
  imports: [RouterModule, AdminNavbarComponent],
  templateUrl: './admin-menus.component.html',
  styleUrl: '../../../styles.css'
})
export class AdminMenusComponent {

}
