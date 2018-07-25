import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { OrderComponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/notfound.component';
import { ProductModule } from './products/product.module';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  // All module declare here
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'order', component: OrderComponent},
      {path: 'admin', component: FormsComponent},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', component: NotFoundComponent}
    ]),
    ProductModule
  ],
  // All component & pipe will come here
  declarations: [
    AppComponent,
    OrderComponent,
    HomeComponent,
    NotFoundComponent,
    FormsComponent
  ],
  // First component
  bootstrap: [
    AppComponent
  ],
  // Service declare here
  providers: []
})

export class AppModule {

}
