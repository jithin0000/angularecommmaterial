import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean {

    if (next !== null) {

      // const roles = next.data.roles as Array<string>;
      // console.log(roles)
      // if (roles) {
      //   const match = this.authService.checkRole(roles);
      //   if (match) {
      //     return true;
      //   } else {
      //     this.router.navigate(['/']);
      //     alert('your have no authority to loggin here');
      //   }
      // }

    }
    if (this.authService.is_authenticated()) {
      return true;
    }

    alert('you need to sign in to go on');
    this.router.navigate(['/login']);
    return false;
  }


}
