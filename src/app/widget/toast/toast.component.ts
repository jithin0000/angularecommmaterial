import { Component, OnInit } from '@angular/core';
import {AppToastService} from '../../app-toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
