import {Component, OnChanges, OnInit} from '@angular/core';
import {ConnectionService} from 'ng-connection-service';
import {CartService} from './cart.service';
import {AuthService} from './auth.service';
import {UserService} from './user.service';

import { JwtHelperService } from  '@auth0/angular-jwt';
import {discardPeriodicTasks} from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Eco';
  isConnected = true;

  userId = 0;
  jwtHelper = new JwtHelperService();

  /**
   *
   */
  // tslint:disable-next-line:no-shadowed-variable
  constructor(
    private  authService: AuthService,
    private userService: UserService,
    // tslint:disable-next-line:no-shadowed-variable
    private connectionService: ConnectionService,
    private  cartService: CartService
  ) {
  }

  ngOnInit(): void {

    const cart = localStorage.getItem('cart');

    // if (cart == null) {
    //   this.cartService.createCart({}).subscribe(res =>{
    //     console.log(res)
    //     localStorage.setItem('cart',res.CartId.toString())
    //   },
    //     error => {console.log(error)})
    //
    // } else {
    //   // this.cartService.updateCart(parseInt(cart), )
    //
    //   this.cartService.getCartbyid(parseInt(cart))
    //     .subscribe(res => {
    //
    //       console.log(res)
    //
    //       if (res.UserId == null){
    //         console.log("in this")
    //         const token = localStorage.getItem('token');
    //         const data = this.jwtHelper.decodeToken(token)
    //
    //
    //         res.UserId = parseInt(data['nameid'])
    //         this.cartService.updateCart(res.CartId, res).subscribe(c => console.log(c));
    //       }
    //     })
    //
    //
    // }

  }

}
