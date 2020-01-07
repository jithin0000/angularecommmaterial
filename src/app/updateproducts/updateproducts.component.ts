import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { Category } from '../Models/Category';
import { ToasthelperService } from '../helper/toasthelper.service';
import {Observable} from 'rxjs';
import {Product} from '../Models/Product';
import {Store} from '@ngrx/store';
import {AppState} from '../Models/AppState';
import {LoadProductDetail} from '../redux/actions/productDetail.action';
import {UpdateProduct} from '../redux/actions/product.action';
import {LOAD_CATEGORIES} from '../redux/actions/category.action';

@Component({
  selector: 'app-updateproducts',
  templateUrl: './updateproducts.component.html',
  styleUrls: ['./updateproducts.component.css']
})
export class UpdateproductsComponent implements OnInit {
  id = 0;
  product$: Observable<Product>;
  categoryList$: Observable<Category[]>;

  constructor(
    private store: Store<AppState>,
    private route: Router,
    private router: ActivatedRoute,
    private toastHelper: ToasthelperService


    ) { }


  ngOnInit() {
    this.router.params.subscribe(res => {
      // tslint:disable-next-line:radix
      this.id = parseInt(res.id);
      this.store.dispatch(new LoadProductDetail(this.id));
    });

    this.categoryList$ = this.store.select(state => state.categories.data);
    this.product$ = this.store.select(state => state.productDetail.data);

    this.store.dispatch(new LOAD_CATEGORIES());

    this.store.select(state => state.products).subscribe(
      res => {
        console.log(res);
        if (res.updated) {
          this.route.navigate(['/product']);
        }
      }
    );
  }



 onSubmit(upproduct) {

   const body = {...upproduct.value, ProductId: this.id};
   this.store.dispatch(new UpdateProduct(this.id, body));

 }


}
