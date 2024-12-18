import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { ResponsableNavbarComponent } from '../responsable-navbar/responsable-navbar.component';


@Component({
  selector: 'app-responsable-agregar-pago',
  imports: [RouterModule, ResponsableNavbarComponent],
  templateUrl: './responsable-agregar-pago.component.html',
  standalone: true,
  styleUrl: '../../../styles.css'
})
export class ResponsableAgregarPagoComponent {

}
