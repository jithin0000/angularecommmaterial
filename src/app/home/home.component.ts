import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Models/Product';
import { CategoryService } from '../category.service';
import { Category } from '../Models/Category';
import {Store} from '@ngrx/store';
import {AppState} from '../Models/AppState';
import {FilterProductsByCategory, FilterProductsByName, LOAD_PRODUCTS} from '../redux/actions/product.action';
import {Observable} from 'rxjs';
import {LOAD_CATEGORIES} from '../redux/actions/category.action';
import {PaginatedResponseDto} from '../Models/PaginatedResponseDto';
import {MatPaginator, PageEvent} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  productList$: Observable<PaginatedResponseDto>;

  categoryList: Observable<Category[]>;
   loading$: Observable<boolean>;
  pageEvent: PageEvent;
   sortBy: string = "";

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {

    this.productList$ = this.store.select(state => state.products.data);
    this.categoryList = this.store.select(state => state.categories.data);

    this.loading$ = this.store.select(state => state.products.loading);


    this.store.dispatch(new LOAD_PRODUCTS());
    this.store.dispatch(new LOAD_CATEGORIES());


  }

  getAll() {
    this.store.dispatch(new LOAD_PRODUCTS());
  }

  filterByCategory(id: number) {
    this.store.dispatch(new FilterProductsByCategory(id));
  }

  search(productName) {
    if (productName !== '') {
    this.store.dispatch(new FilterProductsByName(productName));
    } else {
      this.store.dispatch(new LOAD_PRODUCTS());
    }
  }

  select(sortBy: string) {
    this.sortBy = sortBy;
    this.store.dispatch(new LOAD_PRODUCTS(sortBy));
  }


  paginate(event: PageEvent) {
    console.log(event.pageSize)

    this.store.dispatch(new LOAD_PRODUCTS(this.sortBy, event.pageIndex + 1, event.pageSize));

  }
}








