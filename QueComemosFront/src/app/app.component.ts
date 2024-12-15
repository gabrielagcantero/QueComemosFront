import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // Necesario para el enrutamiento

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QueComemos';  // Título de la aplicación
}
