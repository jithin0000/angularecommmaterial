import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {CategoryService} from '../../category.service';
import {catchError, map, switchMap} from 'rxjs/internal/operators';
import {of} from 'rxjs';
import * as categoryDetailActions from '../actions/categoryDetailAction';
import * as categoryActions from '../actions/category.action';
import {Category} from '../../Models/Category';


// @ts-ignore
@Injectable()
export class CategoryEffects {

  constructor(private actions$: Actions, private categoryService: CategoryService) {}

  @Effect()
  loadCategory$ = this.actions$.pipe(
    ofType(categoryActions.LOAD_CATEGORY),
    switchMap(() => {
      return this.categoryService.getAll().pipe(
        map(category => new categoryActions.LOAD_CATEGORIES_SUCCESS(category)),
        catchError(err => of(new categoryActions.LOAD_CATEGORIES_FAIL(err)))
      );
    })
  );

  @Effect()
  createCategory = this.actions$.pipe(
    ofType(categoryActions.CREATE_CATEGORY),
    switchMap((payload) => {
      return this.categoryService.create(payload['payload']).pipe(
        map(category => new categoryActions.CreateCategorySuccess(category)),
        catchError(err => of(new categoryActions.CreateCategoryFailure(err)))
      );
    })
  );


  @Effect()
  deleteCategory = this.actions$.pipe(
    ofType(categoryActions.DELETE_CATEGORY),
    switchMap((payload) => {
      return this.categoryService.deleteById(payload['id']).pipe(
        map(category => new categoryActions.DeleteCategorySuccess(category.categoryId)),
        catchError(err => of(new categoryActions.DeleteCategoryFailure(err)))
      );
    })
  );


  @Effect()
  loadCategoryDetail$ = this.actions$.pipe(
    ofType(categoryDetailActions.LOAD_CATEGORY_DETAIL),
    switchMap((payload) => {
      return this.categoryService.getById(payload["categoryId"]).pipe(
        map(product => new categoryDetailActions.LoadCategoryDetailSuccess(product)),
        catchError(err => of(new categoryDetailActions.LoadCategoryDetailFailure(err)))
      );
    })
  );

  @Effect()
  updateCategory = this.actions$.pipe(
    ofType(categoryActions.UPDATE_CATEGORY),
    switchMap((payload:{id: number , body: Category}) => {
      return this.categoryService.update(payload.id, payload.body).pipe(
        map(category => new categoryActions.UpdateCategorySuccess(category)),
        catchError(err => of(new categoryActions.UpdateCategoryFailure(err)))
      );
    })
  );


}
