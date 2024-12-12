import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResponsableHomeComponent } from '../components/responsable-home/responsable-home.component.spec';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ResponsableHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'QueComemosFront';
}
