import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AddressService} from '../address.service';
import {ActivatedRoute} from '@angular/router';
import {Address} from '../Models/Address';
import {UserService} from '../user.service';
import {User} from '../Models/User';
import {async} from '@angular/core/testing';

declare var paypal;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @ViewChild('paypal' ) paypalElement: ElementRef;

  id = 0;
  address: Address;
  user: User;

  cart: {} = {};
   paid = false ;

  constructor(
    private addressService: AddressService, private userService: UserService,
    private  activatedRoute: ActivatedRoute) {
     this.activatedRoute.params.subscribe(res => {
       // tslint:disable-next-line:radix
      this.id = parseInt(res.id);

      this.addressService.getAddressbyid(this.id).subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        res => {
          this.address = res;
        },
        error => console.log(error)
      );
    });

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
                    value: 25
                  }

                }
              ]
            })
        },
        onApprove: async  (data, actions) => {
          const order = await  actions.order.capture();
          this.paid = true;
          console.log(order)
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

}
