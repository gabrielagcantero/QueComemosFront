import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponsableHomeComponent } from '../components/responsable/responsable-home/responsable-home.component';  // Ruta de inicio
import { ResponsableUsuariosComponent } from '../components/responsable/responsable-usuarios/responsable-usuarios.component';
import {ResponsablePagosComponent} from '../components/responsable/responsable-pagos/responsable-pagos.component';
import {
  ResponsableSugerenciasComponent
} from '../components/responsable/responsable-sugerencias/responsable-sugerencias.component';
import {ResponsableComprasComponent} from '../components/responsable/responsable-compras/responsable-compras.component';
import {
  ResponsableEditarPerfilComponent
} from '../components/responsable/responsable-editar-perfil/responsable-editar-perfil.component';
import {
  ResponsableAgregarPagoComponent
} from '../components/responsable/responsable-agregar-pago/responsable-agregar-pago.component'; // Ruta de usuarios

const routes: Routes = [
  { path: '', component: ResponsableHomeComponent },
  { path: 'responsable-usuarios', component: ResponsableUsuariosComponent },
  { path: 'responsable-pagos', component: ResponsablePagosComponent },
  { path: 'responsable-sugerencias', component: ResponsableSugerenciasComponent},
  { path: 'responsable-compras', component: ResponsableComprasComponent },
  { path: 'responsable-editar-perfil', component: ResponsableEditarPerfilComponent },
  { path: 'responsable-agregar-pago', component: ResponsableAgregarPagoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
