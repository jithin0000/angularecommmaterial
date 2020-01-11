import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const appRoutes: Routes = [
    {
        path:'auth',children:[
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
        ]
    }

]

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [RouterModule]
})

export class AuthRoutingModule { }