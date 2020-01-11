import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
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


import {reducers} from './redux/reducers';
import {EffectsModule} from '@ngrx/effects';
import {effects} from './redux/effects';
import { ProfileComponent } from './profile/profile.component';
import { ToastComponent } from './toast/toast.component';
import { NgbToastModule} from '@ng-bootstrap/ng-bootstrap';

import { NgxImageZoomModule } from 'ngx-image-zoom';
import { DialogComponent } from './dialog/dialog.component';
import {ErrorHandlerInterceptor} from './httpInterceptors/ErrorHandlerInterceptor';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoleDialogComponent } from './role-dialog/role-dialog.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { MaterialModule } from './material/material.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';



// @ts-ignore
@NgModule({
  entryComponents: [DialogComponent, RoleDialogComponent],

  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ViewcartComponent,
    AdmindashboardComponent,
    SidebarComponent,
    DashComponent,
    AddressComponent,
    PaymentComponent,
    CartComponent,
    OrderComponent,
    ProfileComponent,
    ToastComponent,
    DialogComponent,
    UserComponent,
    RoleDialogComponent,
    PageNotFoundComponent,


  ],


  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireAuthModule,
    NgxPaginationModule,
    NgxPayPalModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    NgbToastModule,
    NgxImageZoomModule.forRoot(),
    ReactiveFormsModule,
    CategoryModule,
    ProductModule,
    AuthModule,
    AppRoutingModule,


  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
