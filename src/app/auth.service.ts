import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   url = '';

constructor(private http: HttpClient) {

    this.url = environment.url + '/auth';
  }

  public  registerUser(user) {
  return this.http.post(this.url + '/register', user);
  }

  public loginUser(user) {
  return this.http.post(this.url + '/login', user);
  }

  public is_authenticated(): boolean {
    const token = localStorage.getItem('token');
    console.log(token)
    return token !== null;
  }



}





