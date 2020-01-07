import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CartUtils} from '../utils/CartUtils';
import {Store} from '@ngrx/store';
import {AppState} from '../Models/AppState';
import {Observable} from 'rxjs';
import {Cart} from '../Models/Cart';
import {IsUserAuthenticated} from '../redux/actions/authAction';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cart$: Observable<Cart>;
  isAuthenticated: boolean;

  constructor(private store: Store<AppState>, private router: Router) {
  }

  ngOnInit() {

    this.store.dispatch(new IsUserAuthenticated());

    CartUtils.getOrCreateCart(this.store);

    this.cart$ = this.store.select(state => state.cart.data);
    this.cart$.subscribe(res => {
      if (res !== null) {
        localStorage.setItem('cart', res.CartId.toString());
      }
    });

    this.store.select(state => state.auth).subscribe(res => {
      this.isAuthenticated = res.authenticated;
    });
  }


  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.store.dispatch(new IsUserAuthenticated());

  }

}
