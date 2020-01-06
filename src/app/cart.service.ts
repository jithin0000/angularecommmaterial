import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Cart} from './Models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url = 'http://localhost:50308/api/carts/';

  token = localStorage.getItem('token');

  constructor(private http: HttpClient) { }

  header = new HttpHeaders({
    Authorization: 'Bearer ' + this.token
  });

  createCart(body) {
    return this.http.post<Cart>(this.url, body);
  }

  getallCart() {
    return this.http.get<Cart[]>(this.url, {headers: this.header});
  }

  getCartbyid(id) {
    return this.http.get<Cart>(this.url + id);
  }

  updateCart(id, body) {
    return this.http.put<Cart>(this.url + id + '/', body, {headers: this.header});
  }


  addToCart(id, body) {
    return this.http.post<Cart>(this.url  + 'add/' + id , body, {headers: this.header});
  }

  deleteCarts(id) {
    return this.http.delete(this.url + id, {headers: this.header});
  }

}
