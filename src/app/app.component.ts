import {Component, OnChanges, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './Models/AppState';
import {Observable} from 'rxjs';
import {Cart} from './Models/Cart';
import {CreateCart, GetCart} from './redux/actions/cart.action';
import {CartUtils} from './utils/CartUtils';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  cart$: Observable<Cart>;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(
    private store: Store<AppState>,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {



    CartUtils.getOrCreateCart( this.store);

    this.cart$ = this.store.select(state => state.cart.data);
    this.cart$.subscribe(res => {
      if (res !== null && res !== undefined) {

        localStorage.setItem('cart', res.cartId.toString());
      }
    });


  }



}
