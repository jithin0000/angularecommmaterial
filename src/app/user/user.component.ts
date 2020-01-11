import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { UserRole } from '../Models/UserRole.model';
import { MatDialog } from '@angular/material';
import { RoleDialogComponent } from '../role-dialog/role-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userRoles: UserRole[] =[];

  constructor(
    private adminService: AdminService,
    private dialog : MatDialog,
    ) { }

  ngOnInit() {

    this.adminService.getUserWithRoles()
    .subscribe(res => {
      console.log(res)
      this.userRoles = res
    },
    error => console.log(error)
    )
  }

  editRole(user: UserRole){
    this.dialog.open(RoleDialogComponent,{
      data: { username: user.userName , roles : user.roles},
      width: '400px'
    })
  }

}
