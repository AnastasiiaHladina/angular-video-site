import { Pipe, PipeTransform } from '@angular/core';
import { compareByCreatedAt } from '../../../helper';

@Pipe({
  name: 'orderByDate',
})
export class OrderByDatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (!value) {
      return;
    }
    return value.sort((date1, date2) => {
      return compareByCreatedAt(date1, date2);
    });
  }

}
