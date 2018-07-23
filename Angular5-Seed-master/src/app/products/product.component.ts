import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
    selector: 'app-prod',
    templateUrl: 'product.component.html',
    // styles: ['thead{color:green}', 'h3{color:red}'],
    styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

    title: String = '*****Product List******';
    showTable: Boolean = true;
    showImage: Boolean = false;
    errorMessage: String;
    imageWidth: Number =  50;
    filterText: String;
    products: any[];

    constructor(private _productService: ProductService) {
    }

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe((data) => this.products = data,
                        (err) => this.errorMessage = err);
    }

    displayImage() {
        this.showImage = !this.showImage;
    }

    onDataRecieve(message: string): void {
        this.title = '***Product list>>>>>>>  ' + message;
    }
}
