import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { NavComponent } from './componentes/nav/nav.component';
import { MenubarComponent } from './componentes/menubar/menubar.component';
import { ItinerarioComponent } from './componentes/itinerario/itinerario.component';
import { AdminCrearRutaComponent } from './componentes/admin-crear-ruta/admin-crear-ruta.component';
import { AdminCrearItinerarioComponent } from './componentes/admin-crear-itinerario/admin-crear-itinerario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenubarComponent,
    ItinerarioComponent,
    AdminCrearRutaComponent,
    AdminCrearItinerarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
