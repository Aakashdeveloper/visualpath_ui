import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
    selector: 'app-prod',
    templateUrl: 'product.component.html'
})

export class ProductComponent implements OnInit {

    title: String = '*****Product List******';
    showTable: Boolean = true;
    showImage: Boolean = false;
    filterText: String;
    products: any[];

    constructor(private _productService: ProductService) {
    }

    ngOnInit(): void {
        this.products = this._productService.getProducts();
    }

    displayImage() {
        this.showImage = !this.showImage;
    }
}
