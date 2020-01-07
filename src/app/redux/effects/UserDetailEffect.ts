import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as authActions from '../actions/userDetailAction';
import {catchError, map, switchMap} from 'rxjs/internal/operators';
import {of} from 'rxjs';
import {UserService} from '../../user.service';


// @ts-ignore
@Injectable()
export class UserDetailEffect {

  constructor(private actions$: Actions, private userService: UserService,
              ) {}

  @Effect()
  getUser$ = this.actions$.pipe(
    ofType(authActions.GET_USER),
    switchMap(() => {
      return this.userService.getWho().pipe(
        map(product => new authActions.GetUserSuccess(product)),
        catchError(err => of(new authActions.GetUserFailure(err)))
      );
    })
  );




}
