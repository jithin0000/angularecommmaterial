import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {

  url = '';

  token = localStorage.getItem('token');

  header = new HttpHeaders({
    Authorization: 'Bearer ' +  this.token,
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient, private endpoint: string) {
    this.url = environment.url + endpoint;
  }

  public get httpClient() {
    return this.http;
  }

  public get serverUrl() {
    return this.url;
  }

  public get headers() {
    return this.header;
  }

  public getAll() {
    return this.http.get<T[]>(this.url, {headers: this.header}).pipe(
      catchError(this.handleError)
    );
  }

  getById(id: number) {
    return this.http.get<T>(`${this.url}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  create(body: T) {
    return this.http.post<T>(this.url, body).pipe(
      catchError(this.handleError)
    );
  }

  deleteById(id: number) {
    return this.http.delete<T>(`${this.url}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  update(id: number, body: T) {
    return this.http.put<T>(`${this.url}/${id}`, body).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {

    if (error.error instanceof ErrorEvent) {
      console.log('client side event');
      console.log(error.error.message);
      console.log(error.message);
      console.log(error.status);
    } else {
      console.log('backend error', error.status);
      console.log('backend error', error.message);

      console.log('error man ', error.error.toString());
    }

    return throwError('something bad happened try again later');

  }
}






