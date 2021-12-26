import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookFireComponent } from './add-book-fire.component';

describe('AddBookFireComponent', () => {
  let component: AddBookFireComponent;
  let fixture: ComponentFixture<AddBookFireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBookFireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
