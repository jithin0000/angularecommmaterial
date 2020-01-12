import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Product } from './Models/Product';
import {BaseService} from './base.service';
import {Observable, Subject} from 'rxjs';
import {PaginatedResponseDto} from './Models/PaginatedResponseDto';
import { debounceTime, tap, distinctUntilChanged, switchMap } from 'rxjs/operators';

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

  filterPaginatedProductByname(name: Observable<string>){

    
    return name.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap( n => this.searchByNameService(n))
    )
  }
  searchByNameService(name: string) {
    return this.httpClient.get<PaginatedResponseDto>(this.url, {
      params: new HttpParams().set('search', name)
    })
  }



}
