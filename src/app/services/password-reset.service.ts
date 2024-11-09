import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordResetService {

  private apiUrl = 'http://localhost:8080/api/v2/mail'; // Cambia según la URL de tu backend

  constructor(private http: HttpClient) { }

  // Enviar solicitud para resetear la contraseña
  sendResetEmail(email: string): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/sendMail`, email, {
      headers: { 'Content-Type': 'text/plain' } // Configurado como 'text/plain'
    });
  }

  // Verificar validez del token
  checkTokenValidity(token: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/reset/check/${token}`);
  }

  // Resetear la contraseña
  resetPassword(token: string, newPassword: string): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/reset/${token}`, newPassword);
  }
}
