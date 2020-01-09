import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../Models/AppState';
import {GetUser} from '../redux/actions/userDetailAction';
import {Observable} from 'rxjs';
import {User} from '../Models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   user$: Observable<User>;
  loading$: Observable<boolean>;


  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new GetUser());

    this.user$ = this.store.select(state => state.userDetail.data);
    this.loading$ = this.store.select(state => state.userDetail.loading);

    this.store.select(state => state.userDetail).subscribe(res => {
      if (res !== undefined) {
        console.log(res);
      }
    });

  }

}
