import { Component, OnInit } from '@angular/core';
import { IPayPalConfig,ICreateOrderRequest } from 'ngx-paypal';
import {CartService} from '../cart.service';
import {Product} from '../Models/Product';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {

  cartProductList: Product[];
  totalPrice=0;
  public payPalConfig ? : IPayPalConfig;
  showSuccess: boolean;
  showCancel: boolean;
  showError: boolean;
  constructor(
    private  cartService: CartService
  ) { }



  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    var viewcart = localStorage.getItem('cart')

    // tslint:disable-next-line:radix
    this.cartService.getCartbyid(parseInt(viewcart)).subscribe(res => {
      this.cartProductList = res.Products

      res.Products.forEach(item => {
        this.totalPrice += item.price
      })

    },
      error => { console.log(error)})

    this.initConfig();
  }

  initConfig(){
    // console.log(totalPrice)

    this.payPalConfig = {
      currency: 'GBP',
      clientId: 'sbAbie6H_tPbo1jmrxcidbM_lkdercJBjnTzrn-q4MjM_EPDS2VnEqOVZkYqBRkRad0AvZC2cnIfRc-XHl',
      createOrderOnClient: (data) => < ICreateOrderRequest > {
          intent: 'CAPTURE',
          purchase_units: [{
              amount: {
                  currency_code: 'GBP',
                  value: '9.99',
                  breakdown: {
                      item_total: {
                          currency_code: 'GBP',
                          value: '9.99'
                      }
                  }
              },
              items: [{
                  name: 'Enterprise Subscription',
                  quantity: '1',
                  category: 'DIGITAL_GOODS',
                  unit_amount: {
                      currency_code: 'GBP',
                      value: '9.99',
                  },
              }]
          }]
      },
      advanced: {
          commit: 'true'
      },
      style: {
          label: 'paypal',
          layout: 'vertical'
      },
      onApprove: (data, actions) => {
          console.log('onApprove - transaction was approved, but not authorized', data, actions);
          actions.order.get().then(details => {
              console.log('onApprove - you can get full order details inside onApprove: ', details);
          });

      },
      onClientAuthorization: (data) => {
          console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
          this.showSuccess = true;
      },
      onCancel: (data, actions) => {
          console.log('OnCancel', data, actions);
          this.showCancel = true;

      },
      onError: err => {
          console.log('OnError', err);
          this.showError = true;
      },
      onClick: (data, actions) => {
          console.log('onClick', data, actions);
          this.resetStatus();
      },
  };
}
  resetStatus() {
    throw new Error("Method not implemented.");
  }
  }

