import { Pipe, PipeTransform } from '@angular/core';
import { Moment } from 'moment';

@Pipe({
  name: 'momentDate'
})
export class MomentDatePipe implements PipeTransform {

  transform(value: Moment, ...args: unknown[]): unknown {
    return null;
  }

}
