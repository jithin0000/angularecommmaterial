import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Cart} from './Models/Cart';
import {BaseService} from './base.service';
import {AddToCartResponse} from './Models/AddToCartResponse';

@Injectable({
  providedIn: 'root'
})
export class CartService extends BaseService<Cart>{


  constructor( http: HttpClient) {
    super(http, '/carts');
  }

  header = new HttpHeaders({
    Authorization: 'Bearer ' + this.token
  });

  addToCart(id, body) {
    return this.httpClient.post<AddToCartResponse>(this.url  + '/add/' + id , body, {headers: this.header});
  }

  deleteCarts(id) {
    return this.httpClient.delete(this.url + id, {headers: this.header});
  }

}
