import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserRole } from '../Models/UserRole.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  public getUserWithRoles(){
    return this.httpClient.get<UserRole[]>(environment.url +"/admin/"+"getUserRoles")
  }
}
