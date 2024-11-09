import { Component, OnInit } from '@angular/core';
import { PasswordResetService } from 'src/app/services/password-reset.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  newPassword: string = '';
  token: string | null = '';  // Cambio a null para manejar el caso en el que falte el token
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private passwordResetService: PasswordResetService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get('token');
    if (!this.token) {
      this.errorMessage = 'El enlace de restablecimiento no es válido.';
      return;
    }

    this.passwordResetService.checkTokenValidity(this.token).subscribe({
      next: (valid) => {
        if (!valid) {
          this.errorMessage = 'El token es inválido o ha expirado.';
        }
      },
      error: () => {
        this.errorMessage = 'Hubo un problema al verificar el token. Intenta nuevamente.';
      }
    });
  }

  resetPassword() {
    if (!this.newPassword) {
      this.errorMessage = 'Por favor, ingresa una nueva contraseña.';
      return;
    }

    // Ejemplo de validación de contraseña: mínimo 8 caracteres
    if (this.newPassword.length < 8) {
      this.errorMessage = 'La contraseña debe tener al menos 8 caracteres.';
      return;
    }

    if (this.token) {
      this.passwordResetService.resetPassword(this.token, this.newPassword).subscribe({
        next: () => {
          this.successMessage = 'Contraseña restablecida con éxito.';
          setTimeout(() => {
            this.successMessage = ''; // Limpia el mensaje de éxito
            this.router.navigate(['/login']);
          }, 2000);
        },
        error: () => {
          this.errorMessage = 'Hubo un problema al restablecer la contraseña. Intenta nuevamente.';
        }
      });
    } else {
      this.errorMessage = 'El token de restablecimiento es inválido o ha expirado.';
    }
  }
}
