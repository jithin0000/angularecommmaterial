import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../Models/Category';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../Models/AppState';
import {CreateCategory, DeleteCategory, LOAD_CATEGORIES} from '../redux/actions/category.action';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private store: Store<AppState>) { }


  categoryList$: Observable<Category[]>;

  displayedColumns: string[] = ['position', 'name', 'description', 'actions'];
  loader$: Observable<boolean>;

  ngOnInit() {

    this.categoryList$ = this.store.select(state => state.categories.data);

    this.loader$ = this.store.select(state => state.categories.loading);

    this.store.dispatch(new LOAD_CATEGORIES());
  }


  onSubmit(category) {

    this.store.dispatch(new CreateCategory(category.value));
  }

  deleteCategory(id) {
    this.store.dispatch(new DeleteCategory(id));
  }

}
