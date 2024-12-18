import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { UsuarioNavbarComponent } from '../usuario-navbar/usuario-navbar.component';


@Component({
  selector: 'app-usuario-sugerencia',
  imports: [RouterModule, UsuarioNavbarComponent],
  templateUrl: './usuario-sugerencia.component.html',
  standalone: true,
  styleUrl: '../../../styles.css'
})
export class UsuarioSugerenciaComponent {

}
