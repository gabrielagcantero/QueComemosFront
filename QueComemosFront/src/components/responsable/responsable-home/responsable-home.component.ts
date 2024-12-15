import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importa RouterModule aquí

@Component({
  selector: 'app-root',
  imports: [RouterModule],  // Importa RouterModule en el componente standalone
  templateUrl: './responsable-home.component.html',
  standalone: true,
  styleUrls: ['../../../styles.css']
})
export class ResponsableHomeComponent {
  // Tu código aquí
}
