import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importa RouterModule aquí

@Component({
  selector: 'app-responsable-usuarios',
  imports: [RouterModule],  // Importa RouterModule en el componente standalone
  templateUrl: './responsable-usuarios.component.html',
  standalone: true,
  styleUrls: ['../../../styles.css']
})
export class ResponsableUsuariosComponent {
  // Tu código aquí
}
