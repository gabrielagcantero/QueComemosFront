import { Component, OnInit } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AuthService } from '../../../app/services/auth.service';

@Component({
  selector: 'app-usuario-home',
  imports: [RouterModule],
  templateUrl: './usuario-home.component.html',
  standalone: true,
  styleUrl: '../../../styles.css'
})
export class UsuarioHomeComponent implements OnInit {
  email: string | null = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      this.email = currentUser.email;
    }
  }
}
