import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPrestamoFireComponent } from './crear-prestamo-fire.component';

describe('CrearPrestamoFireComponent', () => {
  let component: CrearPrestamoFireComponent;
  let fixture: ComponentFixture<CrearPrestamoFireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPrestamoFireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPrestamoFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
