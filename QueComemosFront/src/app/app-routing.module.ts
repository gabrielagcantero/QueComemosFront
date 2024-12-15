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
} from '../components/responsable/responsable-agregar-pago/responsable-agregar-pago.component';
import {
  UsuarioEditarPerfilComponent
} from '../components/usuario/usuario-editar-perfil/usuario-editar-perfil.component';
import {UsuarioHomeComponent} from '../components/usuario/usuario-home/usuario-home.component';
import {UsuarioLoginComponent} from '../components/usuario/usuario-login/usuario-login.component';
import {UsuarioMenuDelDiaComponent} from '../components/usuario/usuario-menu-del-dia/usuario-menu-del-dia.component';
import {UsuarioRegistroComponent} from '../components/usuario/usuario-registro/usuario-registro.component';
import {UsuarioSugerenciaComponent} from '../components/usuario/usuario-sugerencia/usuario-sugerencia.component'; // Ruta de usuarios

const routes: Routes = [
  { path: 'responsable-home', component: ResponsableHomeComponent },
  { path: 'responsable-usuarios', component: ResponsableUsuariosComponent },
  { path: 'responsable-pagos', component: ResponsablePagosComponent },
  { path: 'responsable-sugerencias', component: ResponsableSugerenciasComponent},
  { path: 'responsable-compras', component: ResponsableComprasComponent },
  { path: 'responsable-editar-perfil', component: ResponsableEditarPerfilComponent },
  { path: 'responsable-agregar-pago', component: ResponsableAgregarPagoComponent },
  { path: 'usuario-editar-perfil', component: UsuarioEditarPerfilComponent },
  { path: 'usuario-home', component: UsuarioHomeComponent },
  { path: '', component: UsuarioLoginComponent },
  { path: 'usuario-menu-del-dia', component: UsuarioMenuDelDiaComponent },
  { path: 'usuario-registro', component: UsuarioRegistroComponent },
  { path: 'usuario-sugerencia', component: UsuarioSugerenciaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
