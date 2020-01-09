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
    return this.http.get<T[]>(this.url, {headers: this.header});
  }

  getById(id: number) {
    return this.http.get<T>(`${this.url}/${id}`);
  }

  create(body: T) {
    return this.http.post<T>(this.url, body);
  }

  deleteById(id: number) {
    return this.http.delete<T>(`${this.url}/${id}`);
  }

  update(id: number, body: T) {
    return this.http.put<T>(`${this.url}/${id}`, body);
  }

}






