import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';
import { Category } from '../Models/Category';
import { Product } from '../Models/Product';
import { RegisterService } from '../register.service';
import { Register } from '../Models/Register';
import {Observable} from 'rxjs';
import {User} from '../Models/User';
import {Store} from '@ngrx/store';
import {AppState} from '../Models/AppState';
import {LOAD_CATEGORIES} from '../redux/actions/category.action';
import {LOAD_PRODUCTS} from '../redux/actions/product.action';
import {LOAD_USERS} from '../redux/actions/user.action';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  categories$: Observable<Category[]>;
  products$: Observable<Product[]>;
  users$: Observable<User[]>;
  constructor(
    private store: Store<AppState>
    ) { }

  ngOnInit() {
    this.store.dispatch(new LOAD_CATEGORIES());
    this.store.dispatch(new LOAD_PRODUCTS());
    this.store.dispatch(new LOAD_USERS());

    this.categories$ = this.store.select(state => state.categories.data);
    this.products$ = this.store.select(state => state.products.data);
    this.users$ = this.store.select(state => state.users.data);

  }


}











