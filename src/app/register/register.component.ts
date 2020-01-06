import { Component, OnInit } from '@angular/core';
import { Register } from '../Models/Register';
import { RegisterService } from '../register.service';
import { ToastrService } from 'ngx-toastr';
import { ToasthelperService } from '../helper/toasthelper.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from '../auth.service';
import {Store} from '@ngrx/store';
import {AppState} from '../Models/AppState';
import {RegisterUser} from '../redux/actions/authAction';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userList:Register[]=[];
  isError=false;
  errorMessage="";

  constructor(
    private store: Store<AppState>,
    private authService:AuthService,
    private router:Router,
    private toasthelperservice:ToasthelperService,



    ) { }

  ngOnInit() {

    this.store.select( store => store.user).subscribe(res => console.log(res))

    this.store.dispatch(new RegisterUser("this is for testing"))

this.GetUsers()
  }


  GetUsers(){
    // this.authServi.GetallUsers().subscribe(res=>{
    //   this.userList=res;
    // })
  }

  onSubmit(register){
    this.authService.registerUser(register.value).subscribe(res=>{
      console.log(res)
      // this.userList.push(res)
      // this.isError=false;
      this.toasthelperservice.showSuccess("Successfully registered")
      this.router.navigate(['/'])


    },
    err=>{
      // this.isError=true;
      // this.errorMessage=err;
      this.toasthelperservice.showError(err.toString())
    }
    )

  }
}
