import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductComponent } from './product.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';

import { AddProductComponent } from './add-product/add-product.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
    ProductComponent,
    ProductCardComponent,
    UpdateproductsComponent,
    AddProductComponent,
    ProductdetailsComponent
    
  ],
  imports: [
    SharedModule,
    ProductRoutingModule
    
  ],
  exports: [
      ProductCardComponent,
      ProductComponent, 
     UpdateproductsComponent,
     ProductdetailsComponent,
     AddProductComponent,

    ]
})
export class ProductModule { }
