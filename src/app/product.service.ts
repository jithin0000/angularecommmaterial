import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Product } from './Models/Product';
import {BaseService} from './base.service';
import {Observable} from 'rxjs';
import {PaginatedResponseDto} from './Models/PaginatedResponseDto';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService<Product> {


  constructor( http: HttpClient) {
    super(http, '/Products');
  }

  getAllBySortedAndFilteredAndPaginated(sortBy: string, pageNumber: number, pageSize: number):
    Observable<PaginatedResponseDto> {

    pageSize = pageSize === undefined ? 10 : pageSize;
    pageNumber = pageNumber === undefined ? 1 : pageNumber;

    console.log('param' + pageNumber + pageSize);

    return this.httpClient.get<PaginatedResponseDto>(this.url, {
      params: new HttpParams().set('sort', sortBy).set('pageSize',
        pageSize.toString()).set('pageNumber', pageNumber.toString()),
    });
  }


}
