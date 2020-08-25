import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../enitities';
import { includesStr } from '../../../helper';

@Pipe({
  name: 'filterByTitle',
})
export class SearchByTitlePipe implements PipeTransform {

  transform(value: any, searchText: any): any {
    if ((!searchText && !value) || !searchText.length) { return value; }
    return value.filter((el: Course) => {
      return includesStr(el.name, searchText);
    });
  }
}
