import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Models/Product';
import { CategoryService } from '../category.service';
import { Category } from '../Models/Category';
import {Store} from '@ngrx/store';
import {AppState} from '../Models/AppState';
import {FilterProductsByCategory, FilterProductsByName, LOAD_PRODUCTS} from '../redux/actions/product.action';
import {Observable, Subject} from 'rxjs';
import {LOAD_CATEGORIES} from '../redux/actions/category.action';
import {PaginatedResponseDto} from '../Models/PaginatedResponseDto';
import {MatPaginator, PageEvent} from '@angular/material';
import { IsUserAuthenticated } from '../redux/actions/authAction';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {


  productList$: Observable<PaginatedResponseDto>;
  categoryList: Observable<Category[]>;
  loading$: Observable<boolean>;
  pageEvent: PageEvent;
  sortBy: string = "";

  search$ = new Subject<string>();
  

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {


    this.productList$ = this.store.select(state => state.products.data);
    this.categoryList = this.store.select(state => state.categories.data);

    this.loading$ = this.store.select(state => state.products.loading);
    this.loading$.subscribe(res => console.log(res))

   
    this.store.dispatch(new LOAD_PRODUCTS());
    this.store.dispatch(new LOAD_CATEGORIES());

    this.store.dispatch(new FilterProductsByName(this.search$))

  }

  getAll() {
    this.store.dispatch(new LOAD_PRODUCTS());
  }

  filterByCategory(id: number) {
    this.store.dispatch(new FilterProductsByCategory(id));
  }

  select(sortBy: string) {
    console.log('indie this',sortBy)
    this.sortBy = sortBy;
    this.store.dispatch(new LOAD_PRODUCTS(sortBy));
  }


  paginate(event: PageEvent) {
    this.store.dispatch(new LOAD_PRODUCTS(this.sortBy, event.pageIndex + 1, event.pageSize));
  }

  ngOnDestroy(): void {
    this.search$.unsubscribe()
  }
}








