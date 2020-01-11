import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

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


import {reducers} from './redux/reducers';
import {EffectsModule} from '@ngrx/effects';
import {effects} from './redux/effects';
import { ProfileComponent } from './profile/profile.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ToastComponent } from './toast/toast.component';
import { NgbToastModule} from '@ng-bootstrap/ng-bootstrap';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';

import { NgxImageZoomModule } from 'ngx-image-zoom';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import { DialogComponent } from './dialog/dialog.component';
import {ErrorHandlerInterceptor} from './httpInterceptors/ErrorHandlerInterceptor';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { ProductCardComponent } from './product/product-card/product-card.component'
import {MatExpansionModule} from '@angular/material/expansion';
import { UserComponent } from './user/user.component';
import { RoleDialogComponent } from './role-dialog/role-dialog.component';

import {MatCheckboxModule} from '@angular/material/checkbox';



// @ts-ignore
@NgModule({
  entryComponents: [DialogComponent, RoleDialogComponent],

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
    ProfileComponent,
    AddProductComponent,
    ToastComponent,
    DialogComponent,
    ProductCardComponent,
    UserComponent,
    RoleDialogComponent,


  ],


  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
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
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatCardModule, MatDialogModule, MatTableModule, MatMenuModule,
    MatButtonModule, MatListModule, MatInputModule, MatDividerModule,
    MatToolbarModule, MatIconModule, MatBadgeModule, MatSidenavModule,
    MatGridListModule, MatPaginatorModule,MatExpansionModule, MatCheckboxModule,
    NgxImageZoomModule.forRoot(),
    ReactiveFormsModule


  ],
  providers: [CookieService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
