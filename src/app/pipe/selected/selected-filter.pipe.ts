import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectedFilter',
})
export class SelectedFilterPipe implements PipeTransform {
  transform(value: any[], filter: boolean): any {
    return value.filter(val => val.selected === filter);
  }
}
