import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../Models/AppState';
import {RegisterUser} from '../../redux/actions/authAction';
import {AppToastService} from '../../app-toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private toastService: AppToastService,
  ) {
  }

  ngOnInit() {

    this.store.select(state => state.auth)
      .subscribe(res => console.log(res));

    this.store.select(state => state.auth).subscribe(res => {
      if (res.registered) {

        this.toastService.show('SuccessFully registered ')
        this.router.navigate(['/login']);

      }
    });

  }


  onSubmit(register) {
    this.store.dispatch(new RegisterUser(register.value));

  }


}
