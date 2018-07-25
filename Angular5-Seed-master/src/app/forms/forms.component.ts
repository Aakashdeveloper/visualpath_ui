import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Employee } from './employee.model';
import {ProductService} from '../products/product.service';

@Component({
    templateUrl: 'forms.component.html'
})

export class FormsComponent {

    model = new Employee('', '');

    constructor(private _productService: ProductService) {}
    submitForm(form: NgForm) {
        console.log(form.value);
        this._productService.postForm(form.value)
            .subscribe(data => console.log('success'),
                        err => console.log('Error'));
    }
}
