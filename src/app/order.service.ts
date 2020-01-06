import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Order} from './Models/Order';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url = 'http://localhost:50308/api/orders/';

  constructor(private http: HttpClient) { }

  token = localStorage.getItem('token');

  header = new HttpHeaders({
    Authorization: 'Bearer ' +  this.token
  });

  createOrder(body: Order) {
    return this.http.post<Order>(this.url, body, {headers: this.header}).pipe(
      catchError(this.handleError)
    );
  }

  getallOrder() {
    return this.http.get<Order[]>(this.url, {headers: this.header}).pipe(
      catchError(this.handleError)
    );
  }

  deleteOrder(id) {
    return this.http.delete(this.url + id, {headers: this.header}).pipe(
      catchError(this.handleError)
    );

  }
  getOrderbyid(id: number) {
    return this.http.get<Order>(this.url + id + '/', {headers: this.header}).pipe(
      catchError(this.handleError)
    );
  }
  updateOrder(id, body) {
    return this.http.put(this.url + id + '/', body, {headers: this.header}).pipe(
      catchError(this.handleError)
    );
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
