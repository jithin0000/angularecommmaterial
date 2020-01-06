import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './Models/Product';
import {BaseService} from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService<Product> {


  constructor( http: HttpClient) {
    super(http, '/Products');
  }



}
