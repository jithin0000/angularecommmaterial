import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { Category } from '../Models/Category';
import {Observable} from 'rxjs';
import {Product} from '../Models/Product';
import {Store} from '@ngrx/store';
import {AppState} from '../Models/AppState';
import {LoadProductDetail} from '../redux/actions/productDetail.action';
import {UpdateProduct} from '../redux/actions/product.action';
import {LOAD_CATEGORIES} from '../redux/actions/category.action';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-updateproducts',
  templateUrl: './updateproducts.component.html',
  styleUrls: ['./updateproducts.component.css']
})
export class UpdateproductsComponent implements OnInit {
  id = 0;
  product$: Observable<Product>;
  categoryList$: Observable<Category[]>;
  imageUrl = ""

  constructor(
    private store: Store<AppState>,
    private route: Router,
    private router: ActivatedRoute,
    private storage: AngularFireStorage,



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

 uploadImage(productImageUrl) {

  const image = productImageUrl.files[0];
  const filePath = 'fileapth/' + Date.now();
  const fileRef = this.storage.ref(filePath);

  const task = this.storage.upload(filePath, image);

  task.snapshotChanges().pipe(
    finalize(() => fileRef.getDownloadURL().subscribe(
      res => this.imageUrl = res
    ))
  )
    .subscribe();

}


}
