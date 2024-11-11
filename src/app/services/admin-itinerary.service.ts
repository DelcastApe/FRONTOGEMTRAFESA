import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Itinerario } from 'src/app/models/itinerario';

@Injectable({
  providedIn: 'root'
})
export class AdminItineraryService {
  private baseUrl = 'http://localhost:8080/api/v2/api/itinerarios/todos';

  constructor(private http: HttpClient) {}

 // getItinerarios(): Observable<Itinerario[]> {
   // return this.http.get<Itinerario[]>(this.baseUrl);
  //}
}


