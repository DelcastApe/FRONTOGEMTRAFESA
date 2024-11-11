import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCrearItinerarioComponent } from './admin-crear-itinerario.component';

describe('AdminCrearItinerarioComponent', () => {
  let component: AdminCrearItinerarioComponent;
  let fixture: ComponentFixture<AdminCrearItinerarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCrearItinerarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCrearItinerarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
