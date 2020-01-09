import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Address} from '../Models/Address';
import {User} from '../Models/User';
import {Cart} from '../Models/Cart';
import {OrderService} from '../order.service';
import {Order} from '../Models/Order';
import {Store} from '@ngrx/store';
import {AppState} from '../Models/AppState';
import {cartSelector} from '../redux/selectors/cartSelector';
import {Observable} from 'rxjs';
import {CartUtils} from '../utils/CartUtils';

declare var paypal;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @ViewChild('paypal', {static: true}) paypalElement: ElementRef;

  id = 0;
  address: Address;
  user: User;

  cart$: Observable<Cart>;
  paid = false;
  private totalPrice = 0;

  constructor(
    private store: Store<AppState>,
    private orderService: OrderService,
    private  router: Router) {

    this.cart$ = this.store.select(cartSelector);

  }

  ngOnInit() {

    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: ' some description ',
                amount: {
                  currency_code: 'USD',
                  value: 1,
                }

              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.paid = true;

          const cart = localStorage.getItem('cart');

          const body: Order = {
            OrderNumber: order.id,
            // tslint:disable-next-line:radix
            CartId: parseInt(cart),
            UserId: CartUtils.get_user_id(),
            User: null, Cart: null,
            AddresLine1: order.purchase_units[0].shipping.address.address_line_1,
            AddresLine2: order.purchase_units[0].shipping.address.address_line_2,
            Area: order.purchase_units[0].shipping.address.admin_area_1,
            PostalCode: order.purchase_units[0].shipping.address.postal_code,
            CountryCode: order.purchase_units[0].shipping.address.country_code,
          };

          this.orderService.createOrder(body).subscribe(res => {
              this.navigate_to_order_homel();
            },
            error => {
              console.log(error);
            }
          );
        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);


  }

  private navigate_to_order_homel() {

    localStorage.removeItem('cart');
    CartUtils.getOrCreateCart(this.store)

    this.router.navigate(['/order']);

  }

}
