import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {

  url = '';

  constructor(private http: HttpClient, private endpoint: string) {
    this.url = environment.url + endpoint;
  }

  public getAll() {
    return this.http.get<T[]>(this.url);
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


}






