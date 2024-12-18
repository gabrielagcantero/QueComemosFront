import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResponsableNavbarComponent } from '../responsable-navbar/responsable-navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, ResponsableNavbarComponent],
  templateUrl: './responsable-home.component.html',
  standalone: true,
  styleUrls: ['../../../styles.css']
})
export class ResponsableHomeComponent {
}
