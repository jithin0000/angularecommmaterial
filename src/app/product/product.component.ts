import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/Product';
import { Category } from '../Models/Category';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState} from '../Models/AppState';
import {Observable} from 'rxjs';
import {CreateProduct, DeleteProduct, LOAD_PRODUCTS} from '../redux/actions/product.action';
import {LOAD_CATEGORIES} from '../redux/actions/category.action';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  imageUrl = '';
  productList$: Observable<Product[]>;
  categoryList$: Observable<Category[]>;

  constructor(
    private store: Store<AppState>,
    private storage: AngularFireStorage,
    ) { }

  ngOnInit() {
    this.productList$ = this.store.select(state => state.products.data);
    this.categoryList$ = this.store.select(state => state.categories.data);

    this.store.dispatch(new LOAD_PRODUCTS());
    this.store.dispatch(new LOAD_CATEGORIES());
  }



  onSubmit(product) {
    const formdata = {
      ...product.value,

      imageurl: this.imageUrl
    };

    this.store.dispatch(new CreateProduct(formdata));
  }




  deleteProduct(id) {
    this.store.dispatch(new DeleteProduct(id));
  }

  uploadImage(productImageUrl) {

    const image = productImageUrl.files[0];
    const filePath = 'fileapth' + Date.now();
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
