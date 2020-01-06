import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AddressService} from '../address.service';
import {ActivatedRoute} from '@angular/router';
import {Address} from '../Models/Address';
import {UserService} from '../user.service';
import {User} from '../Models/User';
import {async} from '@angular/core/testing';
import {CartService} from '../cart.service';
import {Cart} from '../Models/Cart';
import {OrderService} from '../order.service';
import {Order} from '../Models/Order';

declare var paypal;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;

  id = 0;
  address: Address;
  user: User;

  cart: Cart;
   paid = false ;
  private totalPrice = 0;

  constructor(
    private orderService: OrderService,
    private cartService: CartService, private userService: UserService,
    private  activatedRoute: ActivatedRoute) {

    const cart = localStorage.getItem('cart');

    if (cart !== null) {
      // tslint:disable-next-line:radix
      this.cartService.getCartbyid(parseInt(cart)).subscribe(res => {
        this.cart = res;

        res.Products.forEach(item => {
          this.totalPrice += item.price;
        });
      });
    }
  }

  ngOnInit() {

    paypal
      .Buttons({
        createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description:  ' some description ',
                  amount:  {
                    currency_code: 'USD',
                    value:  this.totalPrice
                  }

                }
              ]
            });
        },
        onApprove: async  (data, actions) => {
          const order = await  actions.order.capture();
          this.paid = true;
          console.log(order);

          const cart = localStorage.getItem('cart');

          const  body: Order = {
            OrderNumber : order.id,
            CartId  : parseInt(cart),
            UserId : 2,
            User: null, Cart: null,
            AddresLine1 : order.purchase_units[0].shipping.address.address_line_1,
            AddresLine2 : order.purchase_units[0].shipping.address.address_line_2,
            Area: order.purchase_units[0].shipping.address.admin_area_1,
            PostalCode: order.purchase_units[0].shipping.address.postal_code,
            CountryCode: order.purchase_units[0].shipping.address.country_code,
          };

          this.orderService.createOrder(body).subscribe( res => {
              this.navigate_to_order_homel();
          },
            error => { console.log(error); }

          );
        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);

    const item = localStorage.getItem('cart');
    console.log(JSON.stringify(item));

    // this.userService.getUserbyid(1).subscribe(res => {
    //     this.user = res;
    // },
    //   error => { console.log(error); }
    // );
  }

  private navigate_to_order_homel() {

    localStorage.setItem('cart', null);

  }

}
