import { Component, OnInit } from '@angular/core';
import { AdminItineraryService } from 'src/app/services/admin-itinerary.service';
import { itinerario } from 'src/app/models/itinerario';

@Component({
  selector: 'app-admin-crear-itinerario',
  templateUrl: './admin-crear-itinerario.component.html',
  styleUrls: ['./admin-crear-itinerario.component.scss']
})
export class AdminCrearItinerarioComponent {
  itinerarios: itinerario[] = [];
  entrafesaService: any;

  // Modificamos el método para asegurar que solo se usen las claves '1' y '2'
  objectKeys(obj: any): string[] {
    return Object.keys(obj) as ['1', '2'];  // Esto asegura que solo se puede acceder a las claves '1' y '2'
  }

  // Este es el método que hace la petición y asigna los itinerarios
  obtenerItinerarios() {
    this.entrafesaService.obtenerItinerarios().subscribe((itinerarios: itinerario[]) => {
      this.itinerarios = itinerarios;
    });
  }
}



