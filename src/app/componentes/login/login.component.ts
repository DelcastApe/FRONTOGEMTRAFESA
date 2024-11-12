import { Component, OnInit } from '@angular/core';
import { AuthService, LoginDTO } from '../../services/AuthService.service'; // Tu servicio de autenticación
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const credentials: LoginDTO = this.loginForm.value;
      this.authService.login(credentials).subscribe({
        next: (response) => {
          // Guardar el token u otros datos en el almacenamiento local, según sea necesario
          localStorage.setItem('authToken', response.token);
          
          // Alerta de éxito
          Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            text: '¡Bienvenido de nuevo!',
            confirmButtonText: 'Continuar'
          }).then(() => {
            this.router.navigate(['/dashboard']); // Redirigir después de la alerta
          });
        },
        error: () => {
          // Alerta de error
          Swal.fire({
            icon: 'error',
            title: 'Error al iniciar sesión',
            text: 'Verifica tus credenciales e intenta nuevamente',
            confirmButtonText: 'Reintentar'
          });
        }
      });
    } else {
      // Alerta de campos requeridos
      Swal.fire({
        icon: 'warning',
        title: 'Campos requeridos',
        text: 'Por favor, completa todos los campos del formulario.',
        confirmButtonText: 'Entendido'
      });
    }
  }
}
