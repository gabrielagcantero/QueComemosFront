import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../app/services/auth.service';

@Component({
  selector: 'app-usuario-navbar',
  imports: [RouterModule],
  templateUrl: './usuario-navbar.component.html',
  standalone: true,
  styleUrl: '../../../styles.css'
})
export class UsuarioNavbarComponent {
  constructor(private router: Router, private authService: AuthService) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
