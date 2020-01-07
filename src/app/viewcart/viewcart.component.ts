import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Cart} from '../Models/Cart';
import {Store} from '@ngrx/store';
import {AppState} from '../Models/AppState';
import {CartUtils} from '../utils/CartUtils';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {

  cart$: Observable<Cart>;

  constructor(private store: Store<AppState>) {
  }


  ngOnInit() {

    CartUtils.getOrCreateCart(this.store);

    this.cart$ = this.store.select(state => state.cart.data);

  }

}















