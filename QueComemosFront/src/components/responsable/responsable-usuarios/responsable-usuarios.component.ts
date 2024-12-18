import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResponsableNavbarComponent } from '../responsable-navbar/responsable-navbar.component';


@Component({
  selector: 'app-responsable-usuarios',
  imports: [RouterModule, ResponsableNavbarComponent],
  templateUrl: './responsable-usuarios.component.html',
  standalone: true,
  styleUrls: ['../../../styles.css']
})
export class ResponsableUsuariosComponent {

}
