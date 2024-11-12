import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // <-- IMPORTA HttpClientModule AQUÍ
import { NavComponent } from './componentes/nav/nav.component';
import { MenubarComponent } from './componentes/menubar/menubar.component';
import { ItinerarioComponent } from './componentes/itinerario/itinerario.component';
import { AdminCrearRutaComponent } from './componentes/admin-crear-ruta/admin-crear-ruta.component';
import { PasswordResetRequestComponent } from './componentes/password-reset-request/password-reset-request.component';
import { PasswordResetComponent } from './componentes/password-reset/password-reset.component';
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenubarComponent,
    ItinerarioComponent,
    AdminCrearRutaComponent,
    PasswordResetRequestComponent,
    PasswordResetComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule // <-- Agrega el HttpClientModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
