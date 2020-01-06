import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Category } from './Models/Category';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {BaseService} from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService<Category> {

  constructor( http: HttpClient) {
    super(http, '/Categories');
  }


}
