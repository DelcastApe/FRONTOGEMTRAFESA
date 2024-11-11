import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mostrarNavComponentes = true;
  currentRoute: string = '';  // Para almacenar la ruta actual

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event: Event) => event instanceof NavigationEnd)
      )
      .subscribe((event: Event) => {
        const navigationEndEvent = event as NavigationEnd;
        this.currentRoute = navigationEndEvent.url;  // Actualizamos la ruta actual

        const excludedRoutes = ['/adminRoute'];
        const isRequestPasswordReset = navigationEndEvent.url.includes('request-password-reset');
        const isResetPasswordToken = navigationEndEvent.url.includes('reset-password/');

        // Actualiza la visibilidad de los componentes de navegación
        this.mostrarNavComponentes = !excludedRoutes.some(route => navigationEndEvent.url.includes(route)) 
          && !isRequestPasswordReset
          && !isResetPasswordToken
          && !this.isLoginOrRegister();  // Verifica si es login o register
      });
  }

  // Función para verificar si la ruta es login o register
  isLoginOrRegister(): boolean {
    return this.currentRoute === '/login' || this.currentRoute === '/register';
  }
}
