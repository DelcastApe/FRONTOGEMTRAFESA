export class itinerario {
  rutaId: number = 0;
  busId: number = 0;
  tieneEscalas: boolean = false;  // Propiedad de escalas
  servicio: string = '';  // Servicio del bus
  horaSalida: string = '';  // Hora de salida
  horaLlegada: string = '';  // Hora de llegada
  disponibilidades: Array<{ fechaViaje: string }> = [];  // Disponibilidad de fechas
  precioPorPiso: Array<{ piso: number, precio: number }> = [];  // Array con precios por piso
  cantidadAsientosPorPiso: { [key: number]: number } = {};  // Mapa de asientos por piso
}
