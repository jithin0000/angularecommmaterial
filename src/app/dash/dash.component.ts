import {Component, OnInit, ViewChild} from '@angular/core';
import {Category} from '../Models/Category';
import {Product} from '../Models/Product';
import {Observable} from 'rxjs';
import {User} from '../Models/User';
import {Store} from '@ngrx/store';
import {AppState} from '../Models/AppState';
import {LOAD_CATEGORIES} from '../redux/actions/category.action';
import {LOAD_PRODUCTS} from '../redux/actions/product.action';
import {LOAD_USERS} from '../redux/actions/user.action';
import {Chart} from 'chart.js';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  @ViewChild('myChart', {static: true}) private chartRef;
  // @ViewChild('pieChart', {static: true}) private pieChartRef;
  // @ViewChild('aChartRef', {static: true}) private aChartRef;
  // @ViewChild('hBarChart', {static: true}) private hBarChartRef;
  // @ViewChild('radarChart', {static: true}) private rChartRef;
  // @ViewChild('sChart', {static: true}) private sChartRef;


  chart: any;
  piechart: any;
  polarchart: any;
  radarC: any;


  categories$: Observable<Category[]>;
  products$: Observable<Product[]>;
  users$: Observable<User[]>;
  anChart: any;
  hchart: any;
  schart: any;

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.store.dispatch(new LOAD_CATEGORIES());
    this.store.dispatch(new LOAD_PRODUCTS());
    this.store.dispatch(new LOAD_USERS());

    this.categories$ = this.store.select(state => state.categories.data);
    this.products$ = this.store.select(state => state.products.data !== null ? state.products.data.products : null  );
    this.users$ = this.store.select(state => state.users.data);

    this.createBarChart();
    // this.createPieChart();

    // this.createAnotherChart();

    // this.createHBarChart();
    // this.createRadarChart();
    // this.scatterChart();


  }

  private createBarChart() {


    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(70,168,49,0.5)',
          ],
          borderColor: [
            'rgba(70,168,49,0.5)',
          ],
          borderWidth: 1
        }, {
          label: 'Investment',
          data: [22, 1, 12, 5, 12, 23],
          type: 'line',
          backgroundColor: [
            'rgba(70,168,49,0)',
          ],
          borderColor: [
            'rgba(70,168,49,0.5)',
          ],
        }

        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }


  // private createPieChart() {
  //   this.piechart = new Chart(this.pieChartRef.nativeElement, {
  //     type: 'doughnut',
  //     data: {
  //       labels: ['Male', 'Female'],
  //       datasets: [{
  //         label: '# of Votes',
  //         data: [12, 19],
  //         backgroundColor: [
  //           'rgb(130,0,227)',
  //           'rgb(255,125,15)',
  //         ],
  //         borderColor: [
  //           'rgba(255, 99, 132, 0)',
  //           'rgba(255, 206, 86, 0)',
  //         ],
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {}
  //   });
  // }


  // private createHBarChart() {
  //   this.hchart = new Chart(this.hBarChartRef.nativeElement, {
  //     type: 'horizontalBar',
  //     data: {
  //       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //       datasets: [{
  //         label: '# of Votes',
  //         data: [12, 19, 3, 5, 2, 3],
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 1)',
  //           'rgba(54, 162, 235, 1)',
  //           'rgba(255, 206, 86, 1)',
  //           'rgba(75, 192, 192, 1)',
  //           'rgba(153, 102, 255, 1)',
  //           'rgba(255, 159, 64, 1)'
  //         ],
  //         borderColor: [
  //           'rgba(255, 99, 132, 1)',
  //           'rgba(54, 162, 235, 1)',
  //           'rgba(255, 206, 86, 1)',
  //           'rgba(75, 192, 192, 1)',
  //           'rgba(153, 102, 255, 1)',
  //           'rgba(255, 159, 64, 1)'
  //         ],
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         yAxes: [{
  //           ticks: {
  //             beginAtZero: true
  //           }
  //         }]
  //       }
  //     }
  //   });

  // }

  // private createRadarChart() {
  //   this.radarC = new Chart(this.rChartRef.nativeElement, {
  //     type: 'radar',
  //     data: {
  //       labels: [
  //         'Development', 'Tracking', 'Main',
  //         'Design', 'Testing', 'Order'],
  //       datasets: [{
  //         label: '# of Votes',
  //         data: [20, 10, 4, 2],
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 1)',
  //           'rgba(255, 206, 86, 1)',
  //         ],
  //         borderColor: [
  //           'rgba(255, 99, 132, 1)',
  //           'rgba(255, 206, 86, 1)',
  //         ],
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       scale: {
  //         angleLines: {
  //           display: false
  //         },
  //         ticks: {
  //           suggestedMin: 50,
  //           suggestedMax: 100
  //         }
  //       }
  //     }
  //   });
  // }

  // private scatterChart() {
  //   this.schart = new Chart(this.sChartRef.nativeElement, {
  //     type: 'scatter',
  //     data: {
  //       datasets: [{
  //         label: 'Scatter Dataset',
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 1)',
  //           'rgba(54, 162, 235, 1)',
  //         ],
  //         borderColor: [
  //           'rgba(255, 99, 132, 1)',
  //           'rgba(54, 162, 235, 1)',
  //         ],
  //         data: [
  //           {x: 3, y: 93}, {x: 4, y: 85}, {x: 5, y: 91},
  //           {x: 0, y: 67}, {x: 1, y: 88}, {x: 2, y: 77},
  //           {x: 6, y: 71}, {x: 7, y: 78}, {x: 8, y: 93},
  //           {x: 9, y: 80}, {x: 10, y: 82}, {x: 0, y: 75},
  //           {x: 5, y: 80}, {x: 3, y: 90}, {x: 1, y: 72},
  //           {x: 5, y: 75}, {x: 6, y: 68}, {x: 7, y: 98},
  //           {x: 3, y: 82}, {x: 9, y: 94}, {x: 2, y: 79},
  //           {x: 2, y: 95}, {x: 2, y: 86}, {x: 3, y: 67},
  //           {x: 4, y: 60}, {x: 2, y: 80}, {x: 6, y: 92},
  //           {x: 2, y: 81}, {x: 8, y: 79}, {x: 9, y: 83},
  //           {x: 3, y: 75}, {x: 1, y: 80}, {x: 3, y: 71},
  //           {x: 3, y: 89}, {x: 4, y: 92}, {x: 5, y: 85},
  //           {x: 6, y: 92}, {x: 7, y: 78}, {x: 6, y: 95},
  //           {x: 3, y: 81}, {x: 0, y: 64}, {x: 4, y: 85},
  //           {x: 2, y: 83}, {x: 3, y: 96}, {x: 4, y: 77},
  //           {x: 5, y: 89}, {x: 4, y: 89}, {x: 7, y: 84},
  //           {x: 4, y: 92}, {x: 9, y: 98}

  //         ]
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         xAxes: [{
  //           type: 'linear',
  //           position: 'bottom'
  //         }]
  //       }
  //     }
  //   });
  // }

  // private createAnotherChart() {

  //   this.polarchart = new Chart(this.aChartRef.nativeElement, {
  //     type: 'pie',
  //     data: {
  //       labels: ['Order', 'Delivered', 'Not Delivered'],
  //       datasets: [{
  //         label: 'Customer satisfaction',
  //         data: [12,23,55],
  //         backgroundColor: [
  //           'rgb(227,27,119)',
  //           'rgb(255,125,15)',
  //           'rgb(42,255,99)',
  //         ],
  //         borderColor: [
  //           'rgba(255, 99, 132, 0)',
  //           'rgba(255, 206, 86, 0)',
  //           'rgba(255, 206, 86, 0)',
  //         ],
  //         borderWidth: 0.5
  //       }]
  //     },
  //     options: {}
  //   });

  // }
}











