import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  isDropdownOpen = false;
  
  constructor() { }
  
  ngOnInit(): void { }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Cierra el menú cuando se hace clic fuera de él
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const menuButton = document.getElementById('user-menu-button');
    const dropdown = document.querySelector('[role="menu"]');
    
    // Si el clic no fue en el botón del menú ni dentro del dropdown, cerramos el menú
    if (menuButton && dropdown && 
        !menuButton.contains(event.target as Node) && 
        !dropdown.contains(event.target as Node)) {
      this.isDropdownOpen = false;
    }
  }
}