import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../app/services/auth.service';
import { RouterModule } from '@angular/router';
import { Usuario } from '../../../app/models/usuario-model'; // Importa la clase


@Component({
  selector: 'app-usuario-registro',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './usuario-registro.component.html',
  standalone: true,
  styleUrl: '../../../styles.css'
})
export class UsuarioRegistroComponent {
  usuario: Usuario = new Usuario(); // Crear esta interfaz o clase
  formulario: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.formulario = this.fb.group({
      apellido: ['', Validators.required],
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dni: ['', Validators.required],
      clave: ['', Validators.required]
    });
    this.usuario.habilitado = true;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.usuario.foto = reader.result as string || '';
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
          console.error('Error registering user', error.error.error);
        }
      );
    }
  }
}
