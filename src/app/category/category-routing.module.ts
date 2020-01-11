import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { CategoryComponent } from './category.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';


const appRoutes: Routes = [
    {
        path:'category',children:[
            { path: 'update/:id', component: UpdatecategoryComponent },
            { path: '', component: CategoryComponent },
        ]
    }

]

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [RouterModule]
})

export class CategoryRoutingModule { }