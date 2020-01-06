import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ToastHelper } from 'src/Utils/ToastHelper';
import { ToasthelperService } from '../helper/toasthelper.service';
import { ConnectionService } from 'ng-connection-service';
import {AuthService} from '../auth.service';
import {Store} from '@ngrx/store';
import {AppState} from '../Models/AppState';
import {LoginUser, RegisterUser} from '../redux/actions/authAction';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    private store: Store<AppState>,
    private router: Router,
    private toastHelper: ToasthelperService,
    ) {


    }

  ngOnInit() {

    this.store.select(state => state.auth)
      .subscribe(res => console.log(res));

    this.store.select(state => state.auth).subscribe(res => {
      if (res.authenticated) {
        this.toastHelper.showSuccess('login successfull');
        this.router.navigate(['/']);
      }
    });
  }



  onSubmit(login) {
    this.store.dispatch(new LoginUser(login.value));

  }

}
