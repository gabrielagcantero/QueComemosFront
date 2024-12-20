import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComprasService } from '../../../app/services/compras.service';
import { ResponsableNavbarComponent } from '../responsable-navbar/responsable-navbar.component';
import { ReloadService } from '../../../app/services/reload.service';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../../app/models/usuario-model';
import { AuthService } from '../../../app/services/auth.service';


@Component({
  selector: 'app-responsable-compras',
  imports: [RouterModule, ResponsableNavbarComponent, CommonModule],
  providers: [ComprasService, AuthService],
  templateUrl: './responsable-compras.component.html',
  standalone: true,
  styleUrl: '../../../styles.css'
})
export class ResponsableComprasComponent {
  compras: any[] = [];
  
  constructor(private comprasService: ComprasService, private authService: AuthService, private reloadService: ReloadService) {}

  ngOnInit() {
    this.cargarCompras();
    this.reloadService.reload$.subscribe(() => {
      this.cargarCompras();
    });
  }

  cargarCompras() {
    this.comprasService.getItems().subscribe(data => {
      this.compras = data;
      this.compras.forEach(compra => {
        compra.cliente = compra.cliente.nombre + ' ' + compra.cliente.apellido;
        compra.fecha = compra.fecha.substring(0, 10);
      });
    });
  }
}
