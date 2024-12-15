import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // Ruta de tu archivo de enrutamiento
import { AppComponent } from './app.component';  // Asegúrate de que AppComponent está correctamente importado
import { ResponsableHomeComponent } from '../components/responsable/responsable-home/responsable-home.component';  // Importa el componente de manera correcta
import { ResponsableUsuariosComponent } from '../components/responsable/responsable-usuarios/responsable-usuarios.component';
import {
  ResponsableSugerenciasComponent
} from '../components/responsable/responsable-sugerencias/responsable-sugerencias.component';
import {ResponsableComprasComponent} from '../components/responsable/responsable-compras/responsable-compras.component';
import {ResponsablePagosComponent} from '../components/responsable/responsable-pagos/responsable-pagos.component';
import {
  ResponsableEditarPerfilComponent
} from '../components/responsable/responsable-editar-perfil/responsable-editar-perfil.component';
import {
  ResponsableAgregarPagoComponent
} from '../components/responsable/responsable-agregar-pago/responsable-agregar-pago.component';  // Importa el componente de manera correcta

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,  // Importa directamente los componentes standalones
    ResponsableHomeComponent,
    ResponsableUsuariosComponent,
    ResponsableSugerenciasComponent,
    ResponsableComprasComponent,
    ResponsablePagosComponent,
    ResponsableEditarPerfilComponent,
    ResponsableAgregarPagoComponent
  ],
  bootstrap: [AppComponent]  // Especifica el componente principal
})
export class AppModule { }
