import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookComponent } from './book.component';
import { ProductComponent } from './products/product.component';
import { UpperPipe } from './products/myUpper.pipe';
import { FilterPipe } from './products/product-filter.pipe';
import { ProductService } from './products/product.service';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { OrderComponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/notfound.component';

@NgModule({
  // All module declare here
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  // All component & pipe will come here
  declarations: [
    AppComponent,
    BookComponent,
    ProductComponent,
    UpperPipe,
    FilterPipe,
    StarComponent,
    ProductDetailComponent,
    OrderComponent,
    HomeComponent,
    NotFoundComponent
  ],
  // First component
  bootstrap: [
    AppComponent
  ],
  // Service declare here
  providers: [
    ProductService
  ]
})

export class AppModule {

}
