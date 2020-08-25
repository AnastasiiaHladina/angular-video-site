import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreInputComponent } from './genre-input.component';

describe('GenreInputComponent', () => {
  let component: GenreInputComponent;
  let fixture: ComponentFixture<GenreInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreInputComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
