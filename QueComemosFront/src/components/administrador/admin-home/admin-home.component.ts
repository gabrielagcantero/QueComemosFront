import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';

@Component({
  selector: 'app-admin-home',
  imports: [RouterModule, AdminNavbarComponent],
  templateUrl: './admin-home.component.html',
  styleUrl: '../../../styles.css'
})
export class AdminHomeComponent {

}
