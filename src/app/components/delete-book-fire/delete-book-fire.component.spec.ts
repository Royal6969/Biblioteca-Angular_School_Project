import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBookFireComponent } from './delete-book-fire.component';

describe('DeleteBookFireComponent', () => {
  let component: DeleteBookFireComponent;
  let fixture: ComponentFixture<DeleteBookFireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteBookFireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBookFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
