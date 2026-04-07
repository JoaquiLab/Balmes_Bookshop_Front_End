import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textOverflow',
})
export class TextOverflowPipe implements PipeTransform {
  transform(value: string, maxLenght: number) {
    const valueLenght = value.length;
    if (valueLenght > maxLenght) {
      const fixedValue = value.substring(0, maxLenght - 3) + '...';
      // const finalString = fixedString + '...';
      return fixedValue;
    }
    return value;
  }
}
