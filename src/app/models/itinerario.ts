export class itinerario {
    origen: string = '';
    destino: string = '';
    fechaViaje: Date = new Date();

    horaSalida: string = ''; // formato "HH:mm:ss"
    horaLlegada: string = ''; // formato "HH:mm:ss"
    bus = {
        cantidadAsientosPorPiso: {
            '1': 0,
            '2': 0
        },
        servicio: ''
    };
    ruta = {
        tieneEscalas: false
    };
    preciosPorPiso: number[] = [];
}
