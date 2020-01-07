import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {User} from './Models/User';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {environment} from '../environments/environment';
import {BaseService} from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User> {


  constructor( http: HttpClient) {
    super(http, '/Users');
  }

  public getWho() {
    return this.httpClient.get<User>(this.url + '/me', {headers: this.header});
  }

}
