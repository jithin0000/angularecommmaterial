import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CartUtils} from '../utils/CartUtils';
import {Store} from '@ngrx/store';
import {AppState} from '../Models/AppState';
import {Observable} from 'rxjs';
import {Cart} from '../Models/Cart';
import {IsUserAuthenticated} from '../redux/actions/authAction';

import { AngularFireAuth } from '@angular/fire/auth/auth';
import { AuthService } from '../auth.service';
import { User } from '../Models/User';
import { GetUser } from '../redux/actions/userDetailAction';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cart$: Observable<Cart>;
  isAuthenticated: boolean;
  user$: Observable<User>

  constructor(
    private authService: AuthService,
    private store: Store<AppState>,
     private router: Router) {
  }

  ngOnInit() {

    this.store.dispatch(new IsUserAuthenticated());

    this.store.dispatch(new GetUser())

    CartUtils.getOrCreateCart(this.store);

    this.cart$ = this.store.select(state => state.cart.data);
    this.cart$.subscribe(res => {
      console.log(res)
      if (res !== null && res !== undefined) {
        localStorage.setItem('cart', res.cartId.toString());
      }
    });

    this.store.select(state => state.auth).subscribe(res => {
      this.isAuthenticated = res.authenticated;
    });

    this.user$ = this.store.select(state => state.userDetail.data)



  }


  logout() {

    this.authService.logout();

    localStorage.removeItem('token');
    localStorage.removeItem('cart');
    this.router.navigate(['/login']);
    this.store.dispatch(new IsUserAuthenticated());
    
    CartUtils.getOrCreateCart(this.store);



  }

}
