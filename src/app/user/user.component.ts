import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { UserRole } from '../Models/UserRole.model';
import { MatDialog } from '@angular/material';
import { RoleDialogComponent } from '../widget/role-dialog/role-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userRoles: UserRole[] =[];
  roles = ["Admin", "Member"]

  constructor(
    private adminService: AdminService,
    public dialog : MatDialog,
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



      data: { username: user.userName , userRole : user.roles, roles: this.roles},
      width: '400px'
    })
  }

}
