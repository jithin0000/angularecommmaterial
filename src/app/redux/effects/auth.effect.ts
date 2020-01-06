import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as authActions from '../actions/authAction';
import {catchError, map, switchMap} from 'rxjs/internal/operators';
import {of} from 'rxjs';
import {AuthService} from '../../auth.service';
import {LoginRequest} from '../../Models/LoginRequest';
import {User} from '../../Models/User';


// @ts-ignore
@Injectable()
export class AuthEffect {

  constructor(private actions$: Actions, private authService: AuthService) {}

  @Effect()
  loadProduct$ = this.actions$.pipe(
    ofType(authActions.REGISTER_USER),
    switchMap((payload: {user: User}) => {
      return this.authService.registerUser(payload.user).pipe(
        map(user => new authActions.RegisterUserSuccess(user)),
        catchError(err => of(new authActions.RegisterUserFailure(err)))
      );
    })
  );

  @Effect()
  createProduct$ = this.actions$.pipe(
    ofType(authActions.LOGIN_USER),
    switchMap((payload: {payload: LoginRequest}) => {
      return this.authService.loginUser(payload.payload).pipe(
        map(product => new authActions.LoginUserSuccess(product)),
        catchError(err => of(new authActions.LoginUserFailure(err)))
      );
    })
  );





}
