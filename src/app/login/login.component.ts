import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { ConnectionService } from 'ng-connection-service';
import {AuthService} from '../auth.service';
import {Store} from '@ngrx/store';
import {AppState} from '../Models/AppState';
import {LoginUser, RegisterUser} from '../redux/actions/authAction';
import {CartUtils} from '../utils/CartUtils';
import {UpdateCart} from '../redux/actions/cart.action';
import {AppToastService} from '../app-toast.service';
import {MatSnackBar} from '@angular/material';

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
    private snackBar: MatSnackBar
    ) {


    }

  ngOnInit() {

    this.store.select(state => state.auth).subscribe(res => {
      if (res.authenticated) {
        localStorage.setItem('token', res.data.token);
        if (res.data !== null) {
          CartUtils.getOrCreateCart(this.store);
        }
        this.router.navigate(['/']);

        this.openSnackBar();
      }
    });


  }



  onSubmit(login) {
    this.store.dispatch(new LoginUser(login.value));
  }

  private openSnackBar() {
    this.snackBar.open('Login Successful', '', {
      duration: 2000,
      horizontalPosition: 'center'
    });
  }
}
