import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseBreadcrumbsComponent } from './course-breadcrumbs.component';

describe('CourseBreadcrumbsComponent', () => {
  let component: CourseBreadcrumbsComponent;
  let fixture: ComponentFixture<CourseBreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseBreadcrumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
