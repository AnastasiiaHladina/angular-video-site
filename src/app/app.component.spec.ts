import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { getComponentInstance } from '../helper';

describe('AppComponent', () => {
  let fixture;
  let component;

  beforeEach(async(async () => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const appComponentInstance = getComponentInstance(fixture);
    expect(appComponentInstance).toBeTruthy();
  });

  it(`should have as title 'angular-web-school'`, () => {
    const appComponentInstance = getComponentInstance(fixture);
    expect(appComponentInstance.title).toEqual('angular-web-school');
  });
});
