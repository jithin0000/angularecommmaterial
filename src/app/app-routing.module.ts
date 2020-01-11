import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthguardGuard } from './authguard.guard';
import { CategoryComponent } from './category/category.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddressComponent } from './address/address.component';
import {PaymentComponent} from './payment/payment.component';
import {OrderComponent} from './order/order.component';
import {ProfileComponent} from './profile/profile.component';
import {AddProductComponent} from './add-product/add-product.component';



const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'updatecategory/:id', component: UpdatecategoryComponent},
  {path: '', component: HomeComponent },
  {path: 'product', component: ProductComponent},
  {path: 'productdetails/:id', component: ProductdetailsComponent},
  {path: 'updateproducts/:id', component: UpdateproductsComponent},
  {path: 'viewcart', component: ViewcartComponent},
  {path: 'admindashboard',
    component: AdmindashboardComponent,
    data: {roles: ['Admin']}, canActivate: [AuthguardGuard]
    },
  {path: 'address', component: AddressComponent, canActivate: [AuthguardGuard]},
  {path: 'payment', component: PaymentComponent, canActivate: [AuthguardGuard]},
  {path: 'order', component: OrderComponent, canActivate: [AuthguardGuard]},
  {path: 'profile', component: ProfileComponent, data:{roles: ['Member']}, canActivate: [AuthguardGuard]},
  {path: 'add-product', component: AddProductComponent, canActivate: [AuthguardGuard]},
  // { path: "**", component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
