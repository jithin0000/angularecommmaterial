import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { ConnectionService } from 'ng-connection-service';
import {AuthService} from '../auth.service';
import {Store} from '@ngrx/store';
import {AppState} from '../Models/AppState';
import {LoginUser, RegisterUser} from '../redux/actions/authAction';
import {CartUtils} from '../utils/CartUtils';
import {AppToastService} from '../app-toast.service';

import {auth} from 'firebase/app'
import { AngularFireAuth } from '@angular/fire/auth';
import { CreateUser } from '../redux/actions/user.action';

import { generate } from 'generate-password'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    private store: Store<AppState>,
    private router: Router,
    private toastService: AppToastService,
    private afAuth: AngularFireAuth,
    
    ) {
      

    }

  ngOnInit() {

    

    this.store.select(state => state.auth).subscribe(res => {
      console.log(res)
      if (res.authenticated) {
        if (res.data !== null) {
          localStorage.setItem('token', res.data.token);
          if (res.data !== null) {
            CartUtils.getOrCreateCart(this.store);
          }
          this.router.navigate(['/']);

          this.openSnackBar();
        }
      }
    });

  

  }

 


  onSubmit(login) {
    this.store.dispatch(new LoginUser(login.value));
  }

  private openSnackBar() {
    this.toastService.show('Login successful');
  }
}
