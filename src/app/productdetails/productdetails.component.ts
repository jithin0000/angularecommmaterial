import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../Models/Product';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import {Cart} from '../Models/Cart';
import {CartService} from '../cart.service';
import {Store} from '@ngrx/store';
import {AppState} from '../Models/AppState';
import {LoadProductDetail} from '../redux/actions/productDetail.action';
import {Observable} from 'rxjs';
import {AddToCart} from '../redux/actions/cart.action';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  product$: Observable<Product>;
  inCart: boolean;
  private product: Product;
  private cart$: Observable<Cart>;

  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>
    ) { }


  ngOnInit() {


    this.router.params.subscribe(res => {
      // tslint:disable-next-line:radix
      const id = parseInt(res.id);
      this.store.dispatch(new LoadProductDetail(id));
    });

    this.product$ = this.store.select(state => state.productDetail.data);
    this.cart$  = this.store.select(state => state.cart.data);




  }


  addToCart(ProductId: number) {
    const cart = localStorage.getItem('cart');

    // tslint:disable-next-line:radix
    this.store.dispatch(new AddToCart(parseInt(cart), {ProductId}));

  }
}
