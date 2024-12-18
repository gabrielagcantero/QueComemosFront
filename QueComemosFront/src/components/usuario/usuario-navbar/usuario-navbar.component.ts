import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../app/services/auth.service';
import { ReloadService } from '../../../app/services/reload.service';
import { UsuarioFoto } from '../../../app/models/usuario-foto-model';

@Component({
  selector: 'app-usuario-navbar',
  imports: [RouterModule],
  templateUrl: './usuario-navbar.component.html',
  standalone: true,
  styleUrl: '../../../styles.css'
})
export class UsuarioNavbarComponent {
  fotoDePerfil: string = '';

  constructor(private router: Router, private authService: AuthService, private reloadService: ReloadService) { }

  ngOnInit(): void {
    this.cargarFotoDelBack();
    this.reloadService.reload$.subscribe(() => {this.cargarFotoDelBack();});
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  cargarFotoDelBack() : void {
    this.authService.getUsuario().subscribe(
      (usuario: UsuarioFoto) => {
        console.log('Foto del perfil cargada', usuario);
        if (usuario.fotoDePerfil && usuario.fotoDePerfil.trim() !== '') {
          this.fotoDePerfil = usuario.fotoDePerfil;
        } else {
          this.fotoDePerfil = 'assets/user.jpg';
          console.log('No se encontró foto del perfil');
        }
      },
      (error) => {
        console.error('Error al cargar la foto del perfil', error);
        this.fotoDePerfil = 'assets/user.jpg';
      }
    );
  } 
}
