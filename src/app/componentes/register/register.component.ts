import { Component, OnInit } from '@angular/core';
import { AuthService, RegisterDTO } from '../../services/AuthService.service'; // Tu servicio de autenticación
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      dni: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const userData: RegisterDTO = this.registerForm.value;
      this.authService.register(userData).subscribe({
        next: () => {
          // Alerta de éxito
          Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: '¡Tu cuenta ha sido creada!',
            confirmButtonText: 'Continuar'
          }).then(() => {
            this.router.navigate(['/login']); // Redirigir al login después del registro
          });
        },
        error: () => {
          // Alerta de error
          Swal.fire({
            icon: 'error',
            title: 'Error al registrarse',
            text: 'Por favor, intenta nuevamente más tarde',
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
