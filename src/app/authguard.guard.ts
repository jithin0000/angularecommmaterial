import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {MatDialog} from '@angular/material';
import {AppToastService} from './app-toast.service';
import {ToastComponent} from './toast/toast.component';
import {DialogComponent} from './dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private toast: AppToastService,
    private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean {

    if (next !== null) {

      const roles = next.data.roles as Array<string>;
      console.log(roles)
      if (roles) {
        const match = this.authService.checkRole(roles);
        console.log(match)
        if (match) {
          return true;
        } else {
          this.dialog.open(DialogComponent,{
            role: 'alertdialog',
          });
          // this.router.navigate(['/login']);

        }
      }

    }
    if (this.authService.is_authenticated()) {
      return true;
    }

    this.dialog.open(DialogComponent,{
      role: 'alertdialog',
    });
    this.router.navigate(['/login']);
    return false;
  }

}
