import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterProduct'
})

export class FilterPipe implements PipeTransform {
    transform(value: any[], filterBy: string) {
        filterBy = filterBy ? filterBy.toLowerCase() : null;
        return filterBy ? value.filter((product: any[]) =>
            product.productName.toLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
