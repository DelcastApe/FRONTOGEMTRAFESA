import { Component, OnInit } from '@angular/core';
import { RutaService } from '../../services/ruta.service';

@Component({
  selector: 'app-admin-crear-ruta',
  templateUrl: './admin-crear-ruta.component.html',
  styleUrls: ['./admin-crear-ruta.component.scss']
})
export class AdminCrearRutaComponent implements OnInit {
  nuevaRuta = { origen: '', destino: '', tieneEscalas: false };
  origenes: string[] = [];
  destinos: string[] = [];
  rutas: any[] = [];
  rutasFiltradas: any[] = [];
  origenFiltro: string = '';
  destinoFiltro: string = '';

  constructor(private rutaService: RutaService) {}

  ngOnInit(): void {
    this.obtenerOrígenes();
    this.obtenerRutas();  // Para mostrar las rutas existentes
  }

  obtenerOrígenes(): void {
    this.rutaService.getOrígenes().subscribe(
      (origenes) => {
        this.origenes = Array.from(origenes);
      },
      (error) => {
        console.error('Error al obtener los orígenes:', error);
      }
    );
  }

  obtenerDestinos(): void {
    if (this.nuevaRuta.origen) {
      this.rutaService.getDestinosPorOrigen(this.nuevaRuta.origen).subscribe(
        (destinos) => {
          this.destinos = Array.from(destinos);
        },
        (error) => {
          console.error('Error al obtener los destinos:', error);
        }
      );
    }
  }

  filtrarRutas(): void {
    // Filtrar rutas según origen y destino
    this.rutasFiltradas = this.rutas.filter(
      (ruta) =>
        (this.origenFiltro ? ruta.origen === this.origenFiltro : true) &&
        (this.destinoFiltro ? ruta.destino === this.destinoFiltro : true)
    );
  }

  crearRuta(): void {
    this.rutaService.createRuta(this.nuevaRuta).subscribe(
      (nuevaRuta) => {
        this.rutas.push(nuevaRuta);
        this.rutasFiltradas.push(nuevaRuta); // También agregarla a las rutas filtradas
        this.nuevaRuta = { origen: '', destino: '', tieneEscalas: false };
      },
      (error) => {
        console.error('Error al crear la ruta:', error);
      }
    );
  }

  eliminarRuta(id: number): void {
    this.rutaService.deleteRuta(id).subscribe(
      () => {
        this.rutas = this.rutas.filter((ruta) => ruta.id !== id);
        this.rutasFiltradas = this.rutasFiltradas.filter((ruta) => ruta.id !== id);
      },
      (error) => {
        console.error('Error al eliminar la ruta:', error);
      }
    );
  }

  editarRuta(ruta: any): void {
    this.nuevaRuta = { ...ruta };
  }

  obtenerRutas(): void {
    this.rutaService.getRutas().subscribe(
      (rutas) => {
        this.rutas = rutas;
        this.rutasFiltradas = rutas;  // Inicialmente mostramos todas las rutas
      },
      (error) => {
        console.error('Error al obtener las rutas:', error);
      }
    );
  }
}


