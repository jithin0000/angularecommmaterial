import { Routes, RouterModule } from "@angular/router";
import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthguardGuard } from '../authguard.guard';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';


const appRoutes: Routes = [
    {
        path:'product',children:[
            { path: '', component: ProductComponent },
            { path: 'detail/:id', component: ProductdetailsComponent },
            { path: 'update/:id', component: UpdateproductsComponent },
            { path: 'add', component: AddProductComponent, canActivate: [AuthguardGuard] },
        ]
    }

]

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [RouterModule]
})

export class ProductRoutingModule { }