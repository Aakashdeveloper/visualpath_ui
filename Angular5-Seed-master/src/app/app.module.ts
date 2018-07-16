import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookComponent } from './book.component';

@NgModule({
  //All module declare here
  imports: [
    BrowserModule
  ],
  //All component & pipe will come here
  declarations: [
    AppComponent,
    BookComponent
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
