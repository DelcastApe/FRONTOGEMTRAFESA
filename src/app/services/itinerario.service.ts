import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { itinerario } from "../models/itinerario";

@Injectable({
  providedIn: 'root'
})
export class EntrafesaService {
  private url: string = 'http://localhost:8080/api/v2/api/itinerarios';
  private url1: string = 'http://localhost:8080/api/v2/api/rutas'; 

  constructor(private http: HttpClient) { }

  // API para filtrar itinerarios desde el backend
  buscarItinerario(origen: string, destino: string, fechaViaje: string): Observable<itinerario[]> {
    return this.http.get<itinerario[]>(`${this.url}/filtrar?origen=${origen}&destino=${destino}&fechaViaje=${fechaViaje}`);
  }

  getOrigen(): Observable<string[]> {
    return this.http.get<string[]>(`${this.url1}/origenes`);
  }

  // Nuevo método para obtener destinos filtrados por origen
  getDestinosPorOrigen(origen: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.url1}/destinos/${origen}`);
}
}


