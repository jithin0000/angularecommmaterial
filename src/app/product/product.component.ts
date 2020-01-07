import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/Product';
import { Category } from '../Models/Category';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState} from '../Models/AppState';
import {Observable} from 'rxjs';
import {CreateProduct, DeleteProduct, LOAD_PRODUCTS} from '../redux/actions/product.action';
import {LOAD_CATEGORIES} from '../redux/actions/category.action';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList$: Observable<Product[]>;

  constructor(
    private store: Store<AppState>,
    ) { }

  ngOnInit() {
    this.productList$ = this.store.select(state => state.products.data);

    this.store.dispatch(new LOAD_PRODUCTS());
  }


  deleteProduct(id) {
    this.store.dispatch(new DeleteProduct(id));
  }

}
