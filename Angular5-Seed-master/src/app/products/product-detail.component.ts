import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    name: String;
    description: String;
    image: String;

    constructor(private _route: ActivatedRoute) {}

    ngOnInit(): void {
        this._route
            .queryParams
            .subscribe((params) => {
                this.name = params['name'];
                this.description = params['desc'];
                this.image = params['image'];
            });
    }
}
