import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {User} from './Models/User';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = '';

  token = localStorage.getItem('token');

  header = new HttpHeaders({
    Authorization: 'Bearer ' +  this.token
  });

  constructor(private http: HttpClient) {
    this.url = environment.url + '/users';
  }

  getUser() {
    return this.http.get<User>(this.url + '/me',  { headers: this.header });
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      if (error.status == 400) {
        return throwError(
          'invalid request '
        );


      } else if (error.status == 0) {
        return throwError(
          'server not found '
        );
      }
      return throwError(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
