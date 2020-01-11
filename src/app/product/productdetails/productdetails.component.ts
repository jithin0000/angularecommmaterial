import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../Models/Product';
import {Cart} from '../../Models/Cart';
import {Store} from '@ngrx/store';
import {AppState} from '../../Models/AppState';
import {LoadProductDetail} from '../../redux/actions/productDetail.action';
import {Observable} from 'rxjs';
import {AddToCart} from '../../redux/actions/cart.action';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  product$: Observable<Product>;
  inCart: boolean;
  private cart$: Observable<Cart>;
  loading$: Observable<boolean>;

  private productId = 0;

  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>,
    private dialog: MatDialog
    ) { }


  ngOnInit() {


    this.router.params.subscribe(res => {
      // tslint:disable-next-line:radix
      const id = parseInt(res.id);
      this.store.dispatch(new LoadProductDetail(id));
    });

    this.product$ = this.store.select(state => state.productDetail.data);
    this.cart$  = this.store.select(state => state.cart.data);

    this.product$.subscribe(res => {

      if (res !== null) {
        this.productId = res.productId;
        this.cart$.subscribe(c => {
          if ( c!== undefined && c !== null ) {
            if (c.products.length > 0) {

              c.products.forEach(item => {
                if (item.productId === this.productId) {
                  this.inCart = true;
                  return;
                }else {
                  this.inCart = false;
                }
              });
            }
            return;
          }
        });
      }
    });



    this.loading$ = this.store.select(state => state.productDetail.loading);

    this.store.select(state => state.cart)
      .subscribe(res => {
        if (res !== null) {
          this.inCart = res.added;
        }
      });


  }


  addToCart(productId: number) {
    const cart = localStorage.getItem('cart');

    this.store.dispatch(new AddToCart(parseInt(cart), {productId}));

  }

  private openDialog() {
    this.dialog.open(ProductdetailsComponent, {
      width: '250px',
      data: {
        name: 'item added '
      }
    });
  }
}
