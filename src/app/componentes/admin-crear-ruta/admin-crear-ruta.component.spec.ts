import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCrearRutaComponent } from './admin-crear-ruta.component';

describe('AdminCrearRutaComponent', () => {
  let component: AdminCrearRutaComponent;
  let fixture: ComponentFixture<AdminCrearRutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCrearRutaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCrearRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
