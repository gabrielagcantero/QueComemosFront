import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { ResponsableNavbarComponent } from '../responsable-navbar/responsable-navbar.component';


@Component({
  selector: 'app-responsable-editar-perfil',
  imports: [RouterModule, ResponsableNavbarComponent],
  templateUrl: './responsable-editar-perfil.component.html',
  standalone: true,
  styleUrl: '../../../styles.css'
})
export class ResponsableEditarPerfilComponent {

}
