import { Component, OnInit } from '@angular/core';
import {CreateProduct} from '../../redux/actions/product.action';
import {Store} from '@ngrx/store';
import {AppState} from '../../Models/AppState';
import {AngularFireStorage} from '@angular/fire/storage';
import {LOAD_CATEGORIES} from '../../redux/actions/category.action';
import {Observable} from 'rxjs';
import {Category} from '../../Models/Category';
import {finalize} from 'rxjs/operators';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/Models/Product';
import { Photo } from 'src/app/Models/Photo';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  response: string;


  categoryList$: Observable<Category[]>;
  imageUrl = '';
  productImages: Photo[] = [];

  constructor(
    private store: Store<AppState>,
    private storage: AngularFireStorage,

  ) { }

  ngOnInit() {
    this.categoryList$ = this.store.select(state => state.categories.data);
    this.store.dispatch(new LOAD_CATEGORIES());

    this.initFileUploader();

  }
  initFileUploader() {
    this.uploader = new FileUploader({
      url: "http://localhost:5000/api/imageupload/product/2673/upload",
      authTokenHeader: 'Bearer '+localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 20 * 1024 * 1024
    });

    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials =false}

    this.uploader.onSuccessItem = (item, imResponse, status, header) => {
      if (imResponse) {

        console.log(imResponse,item)

        // this.productImages = res.photos
      }
    }

    this.uploader.onErrorItem = (item ,response , status) =>{
      console.log(response, status)
    }
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
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
