import { ComponentFixture } from '@angular/core/testing';

export const getComponentInstance = <T>(component: ComponentFixture<T>) => component.debugElement.componentInstance;
