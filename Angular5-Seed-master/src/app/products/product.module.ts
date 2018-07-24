import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { UpperPipe } from './myUpper.pipe';
import { FilterPipe } from './product-filter.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: 'product', component: ProductComponent},
            {path: 'product/:id', component: ProductDetailComponent}
        ]),
        SharedModule
    ],
    declarations: [
        ProductComponent,
        UpperPipe,
        FilterPipe,
        ProductDetailComponent
    ],
    providers: [
        ProductService
    ]
})

export class ProductModule {

}
