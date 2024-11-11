import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { itinerario } from "../models/itinerario";

@Injectable({
  providedIn: 'root'
})
export class EntrafesaService {
  private url: string = 'http://localhost:8080/api/v2/itinerarios'; // Endpoint base para itinerarios
  private url1: string = 'http://localhost:8080/api/v2/rutas';      // Endpoint base para rutas

  constructor(private http: HttpClient) { }

  // Obtener todos los orígenes
  getOrigen(): Observable<string[]> {
    return this.http.get<string[]>(`${this.url1}/origenes`);
  }

  // Obtener todos los destinos
  getDestinos(): Observable<string[]> {
    return this.http.get<string[]>(`${this.url1}/destinos`);
  }

  // Buscar itinerarios por origen, destino y fecha de viaje
  buscarItinerario(origen: string, destino: string, fechaViaje: string): Observable<itinerario[]> {
    return this.http.get<itinerario[]>(`${this.url}/filtrar?origen=${origen}&destino=${destino}&fechaViaje=${fechaViaje}`);
  }
}






