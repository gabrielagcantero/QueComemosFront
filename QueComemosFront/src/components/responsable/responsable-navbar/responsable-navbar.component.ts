import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../app/services/auth.service';

@Component({
  selector: 'app-responsable-navbar',
  imports: [RouterModule],
  templateUrl: './responsable-navbar.component.html',
  standalone: true,
  styleUrl: '../../../styles.css'
})
export class ResponsableNavbarComponent {
  constructor(private router: Router, private authService: AuthService) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
