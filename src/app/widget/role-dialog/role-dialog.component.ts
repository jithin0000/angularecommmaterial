import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-role-dialog',
  templateUrl: './role-dialog.component.html',
  styleUrls: ['./role-dialog.component.css']
})
export class RoleDialogComponent implements OnInit {

  roels =[]
  form: FormGroup

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
   private fb: FormBuilder,
   private matDialog: MatDialogRef<RoleDialogComponent>,) { 
   this.roels = ["first", "second", "third"]
   }


  ngOnInit() {

    this.form = this.fb.group({
      role: []
    })

  }

  checkAndPush($event){
    console.log($event)
  }

  close(){
    this.matDialog.afterClosed().subscribe(res =>{
      console.log(res)
    })
    this.matDialog.close()
  }

}
