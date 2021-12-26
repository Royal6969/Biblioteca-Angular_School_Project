import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookRtdbComponent } from './add-book-rtdb.component';

describe('AddBookRtdbComponent', () => {
  let component: AddBookRtdbComponent;
  let fixture: ComponentFixture<AddBookRtdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBookRtdbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookRtdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
