import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as categoryActions from '../actions/category.action';
import {CategoryService} from '../../category.service';
import {catchError, map, switchMap} from 'rxjs/internal/operators';
import {of} from 'rxjs';


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

}
