import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './componentes/nav/nav.component';
import { AdminCrearRutaComponent } from './componentes/admin-crear-ruta/admin-crear-ruta.component';
import { PasswordResetRequestComponent } from './componentes/password-reset-request/password-reset-request.component';
import { PasswordResetComponent } from './componentes/password-reset/password-reset.component';

const routes: Routes = [
  // Ruta para el componente de navegación
  {
    path: 'nav',
    component: NavComponent,
  },
  // Ruta para el componente de creación de rutas para el administrador
  {
    path: 'adminRoute',
    component: AdminCrearRutaComponent,
  },
  // Ruta para solicitar la recuperación de contraseña (donde el usuario ingresa su correo)
  {
    path: 'request-password-reset',
    component: PasswordResetRequestComponent,
  },
  // Ruta para restablecer la contraseña con el token proporcionado
  {
    path: 'reset-password/:token',  // El token es un parámetro dinámico en la URL
    component: PasswordResetComponent,
  },
  // Redirección por defecto al componente nav
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Registra las rutas
  exports: [RouterModule],  // Exporta el módulo para ser utilizado en toda la app
})
export class AppRoutingModule {}
