import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { FoodsService } from '../../../app/services/foods.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-admin-editar-comida',
  imports: [RouterModule, AdminNavbarComponent, ReactiveFormsModule, CommonModule],
  providers: [FoodsService],
  templateUrl: './admin-editar-comida.component.html',
  styleUrl: '../../../styles.css'
})
export class AdminEditarComidaComponent {
  formulario: FormGroup;
  foodData: any[] = [];

  constructor(private fb: FormBuilder, private foodsService: FoodsService, private route: ActivatedRoute) {
    
    this.foodsService.getComidaById(this.route.snapshot.params['id']).subscribe(data => { this.foodData = data;});

    // Inicialización del formulario con validadores
    this.formulario = this.fb.group({
      nombre: [this.foodData[0]?.nombre, Validators.required],
      precio: [this.foodData[0]?.precio , [Validators.required, Validators.min(0)]],
      categoria: [this.foodData[0]?.categoria, Validators.required],
      enCarta: [this.foodData[0]?.enCarta],
      imagen: [this.foodData[0]?.imagen, Validators.required],
      vegetariano: [this.foodData[0]?.vegetariano],
      habilitado: [this.foodData[0]?.habilitado],
      menus: [this.foodData[0]?.menus]
    });

  }
}
