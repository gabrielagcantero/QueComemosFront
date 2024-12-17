import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // Necesario para el enrutamiento
import { GetFoodsService } from './services/foods.service';  // Importamos el servicio

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  providers: [GetFoodsService],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QueComemos';  // Título de la aplicación

  //borrar luego. es para probar que me traiga las comidas
  constructor(private getFoodsService: GetFoodsService) {}

  ngOnInit() {
    this.getFoodsService.getItems();  // Llamamos al método getItems del servicio
  }
  //borrar hasta acá
}
