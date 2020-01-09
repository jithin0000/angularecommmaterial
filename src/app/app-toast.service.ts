import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AppToastService {


  constructor(private snackBar: MatSnackBar) {
  }

  public show(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
      horizontalPosition: 'center'
    });
  }


}



