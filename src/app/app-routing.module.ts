import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthguardGuard } from './authguard.guard';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderComponent } from './order/order.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'viewcart', component: ViewcartComponent },
  {
    path: 'admindashboard',
    component: AdmindashboardComponent,
    data: { roles: ['Admin'] }, canActivate: [AuthguardGuard]
  },
  { path: 'address', component: AddressComponent, canActivate: [AuthguardGuard] },
  { path: 'payment', component: PaymentComponent, canActivate: [AuthguardGuard] },
  { path: 'order', component: OrderComponent, canActivate: [AuthguardGuard] },
  { path: 'profile', component: ProfileComponent, data: { roles: ['Member'] }, canActivate: [AuthguardGuard] },
  { path:'auth', loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)},
  { path: 'category', loadChildren: ()=> import('./category/category-routing.module').then(m => m.CategoryRoutingModule)  },
  { path: 'product', loadChildren: ()=> import('./product/product-routing.module').then(m => m.ProductRoutingModule)  },

  { path: "**", component: PageNotFoundComponent },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
