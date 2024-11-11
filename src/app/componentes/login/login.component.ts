import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/AuthService.service'; // Tu servicio de autenticación

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    // Inicialización del formulario con validaciones
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],   // Valida el correo electrónico
      password: ['', [Validators.required, Validators.minLength(6)]]  // Valida la contraseña
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;  // Obtiene los datos del formulario
      this.authService.login(formData).subscribe({
        next: (response) => {
          // Lógica después de una autenticación exitosa
          console.log('Login exitoso', response);
        },
        error: (error) => {
          console.error('Error en login', error);
        }
      });
    }
  }
}
