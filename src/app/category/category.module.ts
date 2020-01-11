import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryRoutingModule } from './category-routing.module';



@NgModule({
  declarations: [
    CategoryComponent,
    UpdatecategoryComponent
  ],
  imports: [
    SharedModule,
    CategoryRoutingModule
  ],
  exports: [
    CategoryComponent, UpdatecategoryComponent
  ]
})
export class CategoryModule { }
