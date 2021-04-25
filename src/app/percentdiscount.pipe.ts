import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentdiscount'
})
export class PercentdiscountPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    return value*0.15 +" %";
  }

}
