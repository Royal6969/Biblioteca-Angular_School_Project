import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesV2Component } from './clientes-v2.component';

describe('ClientesV2Component', () => {
  let component: ClientesV2Component;
  let fixture: ComponentFixture<ClientesV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
