import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // <-- IMPORTA HttpClientModule AQUÍ
import { NavComponent } from './componentes/nav/nav.component';
import { MenubarComponent } from './componentes/menubar/menubar.component';
import { ItinerarioComponent } from './componentes/itinerario/itinerario.component';
import { AdminCrearRutaComponent } from './componentes/admin-crear-ruta/admin-crear-ruta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenubarComponent,
    ItinerarioComponent,
    AdminCrearRutaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule // <-- Agrega el HttpClientModule aquí
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
