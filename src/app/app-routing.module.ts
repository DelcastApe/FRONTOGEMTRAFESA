import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './componentes/nav/nav.component';
import { AdminCrearRutaComponent } from './componentes/admin-crear-ruta/admin-crear-ruta.component';

const routes: Routes = [
  {
    path: 'nav',
    component: NavComponent,
  },
  {
    path: 'adminRoute',
    component: AdminCrearRutaComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
