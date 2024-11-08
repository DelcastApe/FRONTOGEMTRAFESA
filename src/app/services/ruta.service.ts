import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RutaService {
  private apiUrl = 'http://localhost:8080/api/v2/api/rutas';  // Cambia si tu backend tiene una URL diferente

  constructor(private http: HttpClient) { }

  // Obtener todas las rutas
  getRutas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  // Obtener los orígenes disponibles
  getOrígenes(): Observable<Set<string>> {
    return this.http.get<Set<string>>(`${this.apiUrl}/origenes`);
  }

  // Obtener los destinos disponibles por origen
  getDestinosPorOrigen(origen: string): Observable<Set<string>> {
    return this.http.get<Set<string>>(`${this.apiUrl}/destinos/${origen}`);
  }

  // Eliminar una ruta por ID
  deleteRuta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar/${id}`);
  }

  // Crear una nueva ruta
  createRuta(ruta: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/crear`, ruta);
  }

  // Actualizar una ruta existente
  updateRuta(ruta: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/actualizar`, ruta);
  }
}