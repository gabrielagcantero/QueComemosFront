import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResponsableNavbarComponent } from '../responsable-navbar/responsable-navbar.component';


@Component({
  selector: 'app-responsable-compras',
  imports: [RouterModule, ResponsableNavbarComponent],
  templateUrl: './responsable-compras.component.html',
  standalone: true,
  styleUrl: '../../../styles.css'
})
export class ResponsableComprasComponent {

}
