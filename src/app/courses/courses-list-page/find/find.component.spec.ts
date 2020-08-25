import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindComponent } from './find.component';
import { FormsModule } from '@angular/forms';

describe('FindComponent', () => {
  let component: FindComponent;
  let fixture: ComponentFixture<FindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindComponent ],
      imports: [ FormsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
