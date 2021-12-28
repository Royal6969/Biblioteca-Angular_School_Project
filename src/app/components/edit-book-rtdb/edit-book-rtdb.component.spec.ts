import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookRtdbComponent } from './edit-book-rtdb.component';

describe('EditBookRtdbComponent', () => {
  let component: EditBookRtdbComponent;
  let fixture: ComponentFixture<EditBookRtdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBookRtdbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBookRtdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
