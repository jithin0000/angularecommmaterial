import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ToastHelper } from 'src/Utils/ToastHelper';
import { ToasthelperService } from '../helper/toasthelper.service';
import { ConnectionService } from 'ng-connection-service';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    private authService: AuthService,
    private router: Router,
    private toasthelperservice: ToasthelperService,
    ) {


    }

  ngOnInit() {
  }



  onSubmit(login) {
    this.authService.loginUser(login.value).subscribe(res => {
      localStorage.setItem('token', res['token']);

      this.router.navigate(['/']);
      // this.toast.success("Logged in Success")
      this.toasthelperservice.showSuccess('logged in successfuly');
    },
    //  err=>this.toast.error("error encoutered"+err.message)

    err => this.toasthelperservice.showError(err.message)
    );
  }

}
