import { Component, OnInit } from '@angular/core';
import {AddressService} from '../address.service';
import {error} from 'util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(private  addressService: AddressService, private router : Router) { }

  ngOnInit() {
    this.addressService.getallAddress().subscribe(res => {
      console.log(res);
    },
      // tslint:disable-next-line:no-shadowed-variable
      error => console.log(error)
    );
  }

  onSubmit(product) {
    this.addressService.addAddress(product.value).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/payment/' + res.Id] );
      },
      // tslint:disable-next-line:no-shadowed-variable
          error => console.log(error)
    );

  }

}
