import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './navbar/navbar.component';
import { CookieService } from 'ngx-cookie-service';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {NgxPaginationModule} from 'ngx-pagination';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashComponent } from './dash/dash.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { StoreModule } from '@ngrx/store';


import { reducers } from './redux/reducers/index'
import {EffectsModule} from '@ngrx/effects';
import {effects} from './redux/effects';


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    CategoryComponent,
    UpdatecategoryComponent,
    ProductComponent,
    ProductdetailsComponent,
    UpdateproductsComponent,
    NavbarComponent,
    ViewcartComponent,
    AdmindashboardComponent,
    SidebarComponent,
    DashComponent,
    AddressComponent,
    PaymentComponent,
    CartComponent,
    OrderComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    NgxPaginationModule,
    NgxPayPalModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects)



  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
