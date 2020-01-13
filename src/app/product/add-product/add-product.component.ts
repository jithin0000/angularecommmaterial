import { Component, OnInit } from '@angular/core';
import {CreateProduct} from '../../redux/actions/product.action';
import {Store} from '@ngrx/store';
import {AppState} from '../../Models/AppState';
import {AngularFireStorage} from '@angular/fire/storage';
import {LOAD_CATEGORIES} from '../../redux/actions/category.action';
import {Observable} from 'rxjs';
import {Category} from '../../Models/Category';
import {finalize, pluck} from 'rxjs/operators';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/Models/Product';
import { Photo } from 'src/app/Models/Photo';
import { FormBuilder, Validators } from '@angular/forms';
import { AppToastService } from 'src/app/app-toast.service';
import { Location } from '@angular/common';

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
  product: Product = { productId: 2673}

  constructor(
    private store: Store<AppState>,
    private storage: AngularFireStorage,
    private fb: FormBuilder,
    private toastService: AppToastService,
    private location: Location

  ) {  }



  ngOnInit() {
    this.categoryList$ = this.store.select(state => state.categories.data);
    this.store.dispatch(new LOAD_CATEGORIES());


    this.store.select(state=> state.products).subscribe(
      res => {
        console.log(res)
        if (res.added) {
          this.toastService.show("product added successfully");

          this.location.back()
        }}
    )

    // this.initFileUploader();

  }


  productForm = this.fb.group({
    name: ["", Validators.required],
    price: [0, Validators.required],
    description: ["", Validators.required],
    stock: [0, Validators.required],
    size: [0, Validators.required],
    color: ["", Validators.required],
    discount: [0, Validators.required],
    categoryId: [0, Validators.required],
  })
  
  
  
  public get name()  {
    return this.productForm.get('name')
  }
  public get price()  {
    return this.productForm.get('price')
  }
  public get description()  {
    return this.productForm.get('description')
  }
  public get stock()  {
    return this.productForm.get('stock')
  }
  public get size()  {
    return this.productForm.get('size')
  }
  
  public get color()  {
    return this.productForm.get('color')
  }
  public get discount()  {
    return this.productForm.get('discount')
  }
  public get categoryId()  {
    return this.productForm.get('categoryId')
  }
  initFileUploader() {
    this.uploader = new FileUploader({
      url: `http://localhost:5000/api/imageupload/product/${this.product.productId}/upload`,
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
    if (this.productForm.valid  ) {
      
      this.store.dispatch(new CreateProduct(this.productForm.value))

    }
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
