import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
import { ListaEmpresasComponent } from './lista-empresas/lista-empresas.component';
import { ListaRolesComponent } from './lista-roles/lista-roles.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { UsuarioDetallesComponent } from './usuario-detalles/usuario-detalles.component';

const routes: Routes = [
  {path : 'usuarios', component: ListaUsuariosComponent},
  {path:'', redirectTo:'usuarios',pathMatch:'full'},
  {path:'registrar-usuario', component: RegistrarUsuarioComponent},
  {path: 'actualizar-usuario/:cedula', component: ActualizarUsuarioComponent},
  {path: 'listar-empresas', component: ListaEmpresasComponent},
  {path: 'listar-roles', component: ListaRolesComponent},
  {path: 'usuario-detalles/:cedula', component: UsuarioDetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
