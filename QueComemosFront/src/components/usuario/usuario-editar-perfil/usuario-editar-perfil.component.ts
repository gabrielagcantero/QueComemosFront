import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { UsuarioNavbarComponent } from '../usuario-navbar/usuario-navbar.component';

@Component({
  selector: 'app-usuario-editar-perfil',
  imports: [RouterModule, UsuarioNavbarComponent],
  templateUrl: './usuario-editar-perfil.component.html',
  standalone: true,
  styleUrl: '../../../styles.css'
})
export class UsuarioEditarPerfilComponent {

}
