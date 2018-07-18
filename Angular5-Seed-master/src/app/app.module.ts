import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookComponent } from './book.component';
import { ProductComponent } from './products/product.component';

@NgModule({
  //All module declare here
  imports: [
    BrowserModule,
    FormsModule
  ],
  //All component & pipe will come here
  declarations: [
    AppComponent,
    BookComponent,
    ProductComponent
  ],
  //First component 
  bootstrap: [
    AppComponent
  ],
  //Service declare here
  providers: []
})

export class AppModule {

}
