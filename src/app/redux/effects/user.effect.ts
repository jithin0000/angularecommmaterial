import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import * as userActions from '../actions/user.action';

import {UserService} from '../../user.service';
import {catchError, map, switchMap} from 'rxjs/internal/operators';
import {of} from 'rxjs';
import {User} from '../../Models/User';


// @ts-ignore
@Injectable()
export class UserEffect {

  constructor(private actions$: Actions, private userService: UserService) {}

  @Effect()
  loadUser$ = this.actions$.pipe(
    ofType(userActions.LOAD_USER),
    switchMap(() => {
      return this.userService.getAll().pipe(
        map(user => new userActions.LOAD_USERS_SUCCESS(user)),
        catchError(err => of(new userActions.LOAD_USERS_FAIL(err)))
      );
    })
  );

  @Effect()
  createUser$ = this.actions$.pipe(
    ofType(userActions.CREATE_USER),
    switchMap((payload: {payload: User}) => {
      return this.userService.create(payload.payload).pipe(
        map(user => new userActions.CreateUserSuccess(user)),
        catchError(err => of(new userActions.CreateUserFailure(err)))
      );
    })
  );


  @Effect()
  deleteUser = this.actions$.pipe(
    ofType(userActions.DELETE_USER),
    switchMap((payload: {id: number}) => {
      return this.userService.deleteById(payload.id).pipe(
        map(user => new userActions.DeleteUserSuccess(user.id)),
        catchError(err => of(new userActions.DeleteUserFailure(err)))
      );
    })
  );



  @Effect()
  updateUser = this.actions$.pipe(
    ofType(userActions.UPDATE_USER),
    switchMap((payload: {id: number, body: User}) => {
      return this.userService.update(payload.id, payload.body).pipe(
        map(user => new userActions.UpdateUserSuccess(user)),
        catchError(err => of(new userActions.UpdateUserFailure(err)))
      );
    })
  );




}
