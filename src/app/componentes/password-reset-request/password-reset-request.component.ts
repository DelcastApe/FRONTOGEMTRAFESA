import { Component } from '@angular/core';
import { PasswordResetService } from 'src/app/services/password-reset.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-reset-request',
  templateUrl: './password-reset-request.component.html',
  styleUrls: ['./password-reset-request.component.scss']  // Cambié el CSS a SCSS, como el diseño previo
})
export class PasswordResetRequestComponent {

  email: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private passwordResetService: PasswordResetService, private router: Router) { }

  sendResetEmail() {
    this.passwordResetService.sendResetEmail(this.email).subscribe({
      next: () => {
        this.successMessage = 'Se ha enviado un correo para recuperar tu contraseña.';
        this.errorMessage = ''; // Limpiar mensaje de error si es exitoso
      },
      error: (err) => {
        this.errorMessage = 'Hubo un problema al enviar el correo. Intenta nuevamente.';
        this.successMessage = ''; // Limpiar mensaje de éxito si hay error
      }
    });
  }
}
