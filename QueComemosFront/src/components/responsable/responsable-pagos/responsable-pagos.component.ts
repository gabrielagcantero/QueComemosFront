import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { ResponsableNavbarComponent } from '../responsable-navbar/responsable-navbar.component';


@Component({
  selector: 'app-responsable-pagos',
  imports: [RouterModule, ResponsableNavbarComponent],
  templateUrl: './responsable-pagos.component.html',
  standalone: true,
  styleUrl: '../../../styles.css'
})
export class ResponsablePagosComponent {

}
