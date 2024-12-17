import { Component } from '@angular/core';
import { AuthService } from '../../app/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: '../../styles.css',
})
export class LoginComponent {
  formulario: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      clave: ['', Validators.required],
    });
  }

  login(): void {
    if (this.formulario.valid) {
      const { email, clave } = this.formulario.value;

      this.authService.login({ email, clave }).subscribe({
        next: (response) => {
          console.log('Usuario logueado exitosamente');
          if (response.rol === 'Usuario') {
            this.router.navigate(['/usuario-home']);
          } else if (response.rol === 'Administrador') {
            this.router.navigate(['/admin-home']);
          } else if (response.rol === 'Responsable') {
            this.router.navigate(['/responsable-home']);
          } else {
            console.error('Rol de usuario no reconocido');
          }
        },
        error: (error) => {
          console.error('Error al loguear usuario', error);
        },
      });
    }
  }
}
