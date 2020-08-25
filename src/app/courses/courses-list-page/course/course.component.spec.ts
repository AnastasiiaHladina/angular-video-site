import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { Course } from '../../../enitities';
import { getComponentInstance } from '../../../../helper';

@Component({
  template: `<app-course [course]="course"></app-course>`,
})
class TestHostComponent {
  course: Course = {
    id: 'some id',
    name: 'Test course',
    date: new Date(),
    description: 'Description for test course',
    duration: 60,
  };
}

describe('CourseComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent, TestHostComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
