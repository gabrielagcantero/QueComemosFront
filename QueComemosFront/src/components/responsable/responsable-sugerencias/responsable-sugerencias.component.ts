import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { ResponsableNavbarComponent } from '../responsable-navbar/responsable-navbar.component';


@Component({
  selector: 'app-responsable-sugerencias',
  imports: [RouterModule, ResponsableNavbarComponent],
  templateUrl: './responsable-sugerencias.component.html',
  standalone: true,
  styleUrl: '../../../styles.css'
})
export class ResponsableSugerenciasComponent {

}
