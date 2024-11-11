import { Component, OnInit } from '@angular/core';
import { EntrafesaService } from '../../services/itinerario.service';
import { itinerario } from '../../models/itinerario';

@Component({
  selector: 'app-itinerario',
  templateUrl: './itinerario.component.html',
  styleUrls: ['./itinerario.component.scss']
})
export class ItinerarioComponent implements OnInit {
  itinerarios: itinerario[] = [];
  origen: string[] = [];
  destino: string[] = [];
  fechaViajeISO: string = '';
  origenSeleccionado: string = '';
  destinoSeleccionado: string = '';
  currentStep: number = 1;
  itinerarioElegido: itinerario | null = null;

  constructor(private entrafesaService: EntrafesaService) {}

  ngOnInit(): void {
    this.obtenerOrigen();
  }

  obtenerOrigen(): void {
    this.entrafesaService.getOrigen().subscribe(
      (data) => this.origen = data,
      (error) => console.error('Error al obtener orígenes:', error)
    );
  }

  obtenerDestinoPorOrigen(): void {
    if (this.origenSeleccionado) {
      this.entrafesaService.getDestinos().subscribe(
        (data) => this.destino = data,
        (error) => console.error('Error al obtener destinos:', error)
      );
    } else {
      this.destino = [];
    }
  }

  buscarItinerarios(): void {
    const fechaFormateada = new Date(this.fechaViajeISO).toISOString().split('T')[0];
  
    this.entrafesaService.buscarItinerario(this.origenSeleccionado, this.destinoSeleccionado, fechaFormateada)
      .subscribe(
        (data) => {
          this.itinerarios = data;
          console.log("Datos recibidos de la API:", this.itinerarios);  // Verifica los datos en la consola
          if (this.itinerarios.length > 0) {
            this.currentStep = 2;
          } else {
            console.log('No se encontraron itinerarios para la fecha seleccionada.');
          }
        },
        (error) => console.error('Error al buscar itinerarios:', error)
      );
  }
  
  
  
  

  elegirItinerario(itinerario: itinerario): void {
    this.itinerarioElegido = itinerario;
    console.log('Itinerario elegido:', itinerario);
  }


// Función para obtener el precio según el nivel
getPrecioPorNivel(itinerario: itinerario, nivel: number): number {
  if (itinerario.precioPorPiso && itinerario.precioPorPiso.length > 0) {
    const precio = itinerario.precioPorPiso.find((p: { piso: number, precio: number }) => p.piso === nivel);
    if (precio) {
      console.log(`Precio encontrado para el nivel ${nivel}: S/${precio.precio}`); // Verifica si el precio se encuentra correctamente
      return precio.precio;
    }
  }
  console.log(`No se encontró precio para el nivel ${nivel}`);  // Depuración si no se encuentra el precio
  return 0;  // Si no encuentra el precio, devuelve 0
}






// Función para obtener los asientos disponibles según el nivel
getAsientosPorNivel(itinerario: itinerario, nivel: number): number {
  if (itinerario.cantidadAsientosPorPiso && itinerario.cantidadAsientosPorPiso[nivel] !== undefined) {
    return itinerario.cantidadAsientosPorPiso[nivel];
  }
  return 0;  // Si cantidadAsientosPorPiso es undefined o no tiene el nivel, devolvemos 0
}

}

