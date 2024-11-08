import { Component, OnInit } from '@angular/core';
import { EntrafesaService } from '../../services/itinerario.service';
import { itinerario } from '../../models/itinerario';

@Component({
  selector: 'app-itinerario',
  templateUrl: './itinerario.component.html',
  styleUrls: ['./itinerario.component.scss']
})
export class ItinerarioComponent implements OnInit {
  itinerarios: itinerario[] = []; // Array para guardar los resultados
  origen: string[] = [];          // Lista de orígenes
  destino: string[] = [];         // Lista de destinos
  fechaViajeISO: string = '';     // Formato ISO para la fecha seleccionada

  origenSeleccionado: string = '';  // Para almacenar el origen seleccionado
  destinoSeleccionado: string = ''; // Para almacenar el destino seleccionado
  currentStep: number = 1;         // Control de pasos
  itinerarioElegido: itinerario | null = null; // Almacena el itinerario elegido

  constructor(private entrafesaService: EntrafesaService) {}

  ngOnInit(): void {
    this.obtenerOrigen();
    this.obtenerDestinoPorOrigen();
  }

  obtenerOrigen(): void {
    this.entrafesaService.getOrigen().subscribe(
      (data) => this.origen = data,
      (error) => console.error('Error al obtener orígenes: ', error)
    );
  }

  obtenerDestinoPorOrigen(): void {
    if (this.origenSeleccionado) {
        this.entrafesaService.getDestinosPorOrigen(this.origenSeleccionado).subscribe(
            (data) => this.destino = data,
            (error) => console.error('Error al obtener destinos: ', error)
        );
    } else {
        this.destino = []; // Reiniciar si no hay origen seleccionado
    }
}

  buscarItinerarios(): void {
    const fechaFormateada = new Date(this.fechaViajeISO).toISOString().split('T')[0];

    this.entrafesaService.buscarItinerario(this.origenSeleccionado, this.destinoSeleccionado, fechaFormateada)
      .subscribe(
        (data) => {
          this.itinerarios = data;
          if (this.itinerarios.length > 0) {
            this.currentStep = 2;  // Avanza al paso 2 para mostrar los horarios
          }
        },
        (error) => console.error('Error al buscar itinerarios: ', error)
      );
  }

  elegirItinerario(itinerario: itinerario): void {
    this.itinerarioElegido = itinerario;
    console.log('Itinerario elegido:', itinerario);
  }





























  /*buscar(): void {
    if (this.origen && this.destino && this.fechaViaje) {
      // Llamada al servicio para buscar itinerarios
      this.entrafesaService
        .buscarItinerario(this.origen, this.destino, this.fechaViaje)
        .subscribe(
          (data: itinerario[]) => {
            this.itinerarios = data; // Asignar los datos al array
          },
          (error) => {
            console.error('Error al buscar itinerarios:', error); // Manejo de errores
          }
        );
    } else {
      console.warn('Todos los campos del formulario son obligatorios.');
    }
  }*/
}
