import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asyncFirebase'
})
export class AsyncFirebasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value){
      const newList = [];
      for (const key in value) {
        newList.push({ id: key, ...value[key]})
      }
      return newList
    }
    return value
  }

}
