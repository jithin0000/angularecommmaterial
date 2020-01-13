import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {



  selected = 1;
  sideNavItemList: { icon: string, title: string, url: number }[] = [
    { icon: 'dashboard', title: 'dashboard', url: 0},
    { icon: 'recent_actors', title: 'users', url: 1},
    { icon: 'category', title: 'category', url: 2},
    { icon: 'storefront', title: 'products', url: 3},
    { icon: 'local_shipping', title: 'orders & shipping', url: 4},
    { icon: 'invert_colors', title: 'theme', url: 5},
    { icon: 'account_balance', title: 'Tax', url: 6},
    { icon: 'email', title: 'Mail', url: 7},
    { icon: 'settings', title: 'settings', url: 8},
  ];
  component: number;

  constructor() { }

  ngOnInit() {
    this.component = 0;

  }

  onSubmit(event) {
    console.log(event);
    this.selected = event;

  }

  selectComponent(url: number) {
    this.component = url;
  }

}
