import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../Models/AppState';
import {LoadCategoryDetail} from '../../redux/actions/categoryDetailAction';
import {Observable} from 'rxjs';
import {Category} from '../../Models/Category';
import { UpdateCategory } from 'src/app/redux/actions/category.action';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent implements OnInit {

  id = 0;
  category$: Observable<Category>;
  constructor(
    private store: Store<AppState>,
    private router: ActivatedRoute,
    private route: Router) { }

  ngOnInit() {
    this.router.params.subscribe(res => {
      this.id = + res.id;
      this.store.dispatch(new LoadCategoryDetail(this.id));

    });


    this.category$ = this.store.select(state => state.categoryDetail.data);
  }


  onUpdate(catUpdate) {

    const body = { ...catUpdate.value, CategoryId: this.id};
    this.store.dispatch(new UpdateCategory(this.id, body));
    this.route.navigate(['/category']);
  }


}




