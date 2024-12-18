import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import { AuthService } from '../../../app/services/auth.service';
import { UsuarioNavbarComponent } from '../usuario-navbar/usuario-navbar.component';

@Component({
  selector: 'app-usuario-home',
  imports: [RouterModule, UsuarioNavbarComponent],
  templateUrl: './usuario-home.component.html',
  standalone: true,
  styleUrl: '../../../styles.css'
})
export class UsuarioHomeComponent implements OnInit {
  email: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      this.email = currentUser.email;
    }
  }
}
