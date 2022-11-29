import {Pipe, PipeTransform} from "@angular/core";

/**
 * Filter for cart to map products from a dictionary to an iterable array.
 */
@Pipe({name: 'mapProductArray'})
export class MapProductsArray implements PipeTransform {
  transform(value: any) : any {
    let arr = [];
    for (let key in value) {
      arr.push(value[key]);
    }
    return arr;
  }
}
