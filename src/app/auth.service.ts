import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {User} from './Models/User';
import {JwtHelperService} from '@auth0/angular-jwt';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = '';

  private jwtHelper = new JwtHelperService();


  constructor(private http: HttpClient, private afAuth: AngularFireAuth) {

    this.url = environment.url + '/auth';
  }

  token = localStorage.getItem('token');


  public registerUser(user) {
    return this.http.post<User>(this.url + '/register', user);
  }

  public loginUser(user) {
    return this.http.post(this.url + '/login', user);
  }

  public is_authenticated(): boolean {
    return this.token !== null;
  }

  public checkRole(roles) {

    let isMatch = false;

    // tslint:disable-next-line:variable-name

    if (this.token !== null) {


      // tslint:disable-next-line:variable-name
      const user_role = this.jwtHelper.decodeToken(this.token).role as Array<string>;
      console.log(user_role)
      roles.forEach(item => {
        if (item.includes(user_role)) {
          isMatch = true;
          return;
        }
      });
    }

    return isMatch;

  }


  logout(){
    this.afAuth.auth.signOut();
  }


}






