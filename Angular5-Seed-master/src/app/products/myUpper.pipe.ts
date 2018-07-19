import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'myUpper'
})

export class UpperPipe implements PipeTransform {
    transform(value: string, typeReq: string): string {
        if (typeReq === 'upper') {
            value = value.toUpperCase();
        }else {
            value = value.toLowerCase();
        }
        return value;
    }
}
