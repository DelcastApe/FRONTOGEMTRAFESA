import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  mostrarNavComponentes = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event: Event) => event instanceof NavigationEnd)
      )
      .subscribe((event: Event) => {
        const navigationEndEvent = event as NavigationEnd;
        const excludedRoutes = ['/adminRoute'];
        const isRequestPasswordReset = navigationEndEvent.url.includes('request-password-reset');
        const isResetPasswordToken = navigationEndEvent.url.includes('reset-password/');

        this.mostrarNavComponentes = !excludedRoutes.some(route => navigationEndEvent.url.includes(route)) 
          && !isRequestPasswordReset
          && !isResetPasswordToken;
      });
  }
}
