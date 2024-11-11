import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface LoginDTO {
  email: string;
  password: string;
}

export interface LoginResponseDTO {
  token: string;
  // Agrega otros campos según tu IniciarSesionRespuestaDTO
}

export interface RegisterDTO {
  nombres: string;
  apellidos: string;
  email: string;
  password: string;
  telefono: string;
  dni: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private apiUrl = 'http://localhost:8080/api/v2'; // Cambia según la URL de tu backend

  constructor(private http: HttpClient) { }

  login(credentials: LoginDTO): Observable<LoginResponseDTO> {
    return this.http.post<LoginResponseDTO>(`${this.apiUrl}/login`, credentials);
  }

  register(userData: RegisterDTO): Observable<any> {
    return this.http.post(`${this.apiUrl}/cliente`, userData);
  }
}