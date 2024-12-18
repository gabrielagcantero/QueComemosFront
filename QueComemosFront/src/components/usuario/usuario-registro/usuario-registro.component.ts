import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../app/services/auth.service';
import { RouterModule } from '@angular/router';
import { Usuario } from '../../../app/models/usuario-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario-registro',
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './usuario-registro.component.html',
  standalone: true,
  styleUrl: '../../../styles.css',
})
export class UsuarioRegistroComponent {
  usuario: Usuario = new Usuario();
  formulario: FormGroup;
  registerError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.formulario = this.fb.group({
      apellido: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      dni: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'), // Validación de solo números
          Validators.minLength(7),
          Validators.maxLength(8),
        ],
      ],
      clave: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.usuario.habilitado = true;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.usuario.foto = (reader.result as string) || '';
      };

      reader.readAsDataURL(file); // Leer el archivo como Base64
    }
  }

  register(): void {
    if (this.formulario.valid) {
      const { nombre, apellido, email, dni, clave } = this.formulario.value;

      this.usuario.nombre = nombre;
      this.usuario.apellido = apellido;
      this.usuario.email = email;
      this.usuario.dni = dni;
      this.usuario.clave = clave;

      this.authService.register(this.usuario).subscribe(
        (response: any) => {
          console.log('User registered successfully', response.message);
          this.router.navigate(['']);
        },
        (error: any) => {
          console.log('Error registering user', error);
          if (error.status === 400) {
            this.registerError = 'El email ya se encuentra registrado';
          } else {
            if (error.status === 500) {
              this.registerError = 'Error al intentar registrar el usuario';
            }
          }
        }
      );
    }
  }
}
