import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';


@Component({
  selector: 'app-admin-comidas',
  imports: [RouterModule, AdminNavbarComponent],
  templateUrl: './admin-comidas.component.html',
  styleUrl: '../../../styles.css'
})
export class AdminComidasComponent {

}
