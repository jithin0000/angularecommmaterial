import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../Models/Product';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import {Cart} from '../Models/Cart';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  id = 0;
  details: Product  ;
  Cartcount = 0;

  cart: Cart;
  itemInCart  = false;


  constructor(
    private router: ActivatedRoute,
    private productservice: ProductService,
    private cookieService: CookieService,
    private  cartService: CartService

    ) { }


  ngOnInit() {

    const cart = localStorage.getItem('cart');

    if (cart !== null) {
      // tslint:disable-next-line:radix
      const cartId = parseInt(cart);
      this.cartService.getCartbyid(cartId)
        .subscribe(res => {
          this.cart = res;
        },
          error => { console.log(error); }
        );

    }

    this.router.params.subscribe(res => {
      this.id = res.id;
      this.getbyid(this.id);
    });
  }

  getbyid(id) {
    this.productservice.getproductbyid(id).subscribe(res => {
      this.details = res;
      this.checkItemAlreadyInCart(res);
    });
  }

  private checkItemAlreadyInCart(product: Product) {

    if (this.cart.Products.length === 0) {
      this.itemInCart = false;
      return;
    }

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.cart.Products.length; i++) {

      const item = this.cart.Products[i];

      if (item.ProductId === product.ProductId) {
        this.itemInCart = true;
        break;
      }

      this.itemInCart = false;

    }

  }

  AddtoCart(productId) {

    const body = {
      ProductId : productId
    };

    this.cartService.addToCart(this.cart.CartId, body).subscribe( res => {
      this.cart = res;
      this.checkItemAlreadyInCart(this.details);
    },
      error => {
      console.log(error);
      });

  }


}
