import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookFireComponent } from './edit-book-fire.component';

describe('EditBookFireComponent', () => {
  let component: EditBookFireComponent;
  let fixture: ComponentFixture<EditBookFireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBookFireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBookFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
