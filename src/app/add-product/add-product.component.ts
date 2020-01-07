import { Component, OnInit } from '@angular/core';
import {CreateProduct} from '../redux/actions/product.action';
import {Store} from '@ngrx/store';
import {AppState} from '../Models/AppState';
import {AngularFireStorage} from '@angular/fire/storage';
import {LOAD_CATEGORIES} from '../redux/actions/category.action';
import {Observable} from 'rxjs';
import {Category} from '../Models/Category';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  categoryList$: Observable<Category[]>;
  imageUrl = '';

  constructor(
    private store: Store<AppState>,
    private storage: AngularFireStorage,

  ) { }

  ngOnInit() {
    this.categoryList$ = this.store.select(state => state.categories.data);
    this.store.dispatch(new LOAD_CATEGORIES());


  }

  onSubmit(product) {
    const formdata = {
      ...product.value,

      imageurl: this.imageUrl
    };

    this.store.dispatch(new CreateProduct(formdata));
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
