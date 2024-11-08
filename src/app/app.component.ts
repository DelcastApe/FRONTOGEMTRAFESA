import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  mostrarNavComponentes= true;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.mostrarNavComponentes = this.router.url !== '/adminRoute';
    })
  }
}
