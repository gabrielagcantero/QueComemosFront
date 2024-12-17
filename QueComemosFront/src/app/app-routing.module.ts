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
import {UsuarioLoginComponent} from '../components/login/login.component';
import {UsuarioMenuDelDiaComponent} from '../components/usuario/usuario-menu-del-dia/usuario-menu-del-dia.component';
import {UsuarioRegistroComponent} from '../components/usuario/usuario-registro/usuario-registro.component';
import {UsuarioSugerenciaComponent} from '../components/usuario/usuario-sugerencia/usuario-sugerencia.component';
import {
  AdminAgregarComidaComponent
} from '../components/administrador/admin-agregar-comida/admin-agregar-comida.component';
import {AdminAgregarMenuComponent} from '../components/administrador/admin-agregar-menu/admin-agregar-menu.component';
import {
  AdminAgregarUsuarioComponent
} from '../components/administrador/admin-agregar-usuario/admin-agregar-usuario.component';
import {AdminComidasComponent} from '../components/administrador/admin-comidas/admin-comidas.component';
import {
  AdminEditarComidaComponent
} from '../components/administrador/admin-editar-comida/admin-editar-comida.component';
import {AdminEditarMenuComponent} from '../components/administrador/admin-editar-menu/admin-editar-menu.component';
import {
  AdminEditarUsuarioComponent
} from '../components/administrador/admin-editar-usuario/admin-editar-usuario.component';
import {AdminEstadisticasComponent} from '../components/administrador/admin-estadisticas/admin-estadisticas.component';
import {AdminHomeComponent} from '../components/administrador/admin-home/admin-home.component';
import {AdminMenusComponent} from '../components/administrador/admin-menus/admin-menus.component';
import {AdminSugerenciaComponent} from '../components/administrador/admin-sugerencia/admin-sugerencia.component';
import {AdminUsuariosComponent} from '../components/administrador/admin-usuarios/admin-usuarios.component'; // Ruta de usuarios

const routes: Routes = [
  //INICIO RESPONSABLE
  { path: 'responsable-home', component: ResponsableHomeComponent },
  { path: 'responsable-usuarios', component: ResponsableUsuariosComponent },
  { path: 'responsable-pagos', component: ResponsablePagosComponent },
  { path: 'responsable-sugerencias', component: ResponsableSugerenciasComponent},
  { path: 'responsable-compras', component: ResponsableComprasComponent },
  { path: 'responsable-editar-perfil', component: ResponsableEditarPerfilComponent },
  { path: 'responsable-agregar-pago', component: ResponsableAgregarPagoComponent },
  //FIN RESPONSABLE

  //INICIO USUARIOS
  { path: 'usuario-editar-perfil', component: UsuarioEditarPerfilComponent },
  { path: 'usuario-home', component: UsuarioHomeComponent },
  { path: '', component: UsuarioLoginComponent },
  { path: 'usuario-menu-del-dia', component: UsuarioMenuDelDiaComponent },
  { path: 'usuario-registro', component: UsuarioRegistroComponent },
  { path: 'usuario-sugerencia', component: UsuarioSugerenciaComponent },
  //FIN USUARIOS

  //INICIO ADMIN
  { path: 'admin-agregar-comida', component: AdminAgregarComidaComponent },
  { path: 'admin-agregar-menu', component: AdminAgregarMenuComponent },
  { path: 'admin-agergar-usuario', component: AdminAgregarUsuarioComponent },
  { path: 'admin-comidas', component: AdminComidasComponent },
  { path: 'admin-editar-comida', component: AdminEditarComidaComponent },
  { path: 'admin-editar-menu', component: AdminEditarMenuComponent },
  { path: 'admin-editar-usuario', component: AdminEditarUsuarioComponent },
  { path: 'admin-estadisticas', component: AdminEstadisticasComponent },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'admin-menus', component: AdminMenusComponent },
  { path: 'admin-sugerencia', component: AdminSugerenciaComponent },
  { path: 'admin-usuarios', component: AdminUsuariosComponent },
  //FIN ADMIN
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
