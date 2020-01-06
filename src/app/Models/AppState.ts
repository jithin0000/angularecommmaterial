import {ProductState} from '../redux/reducers/product.reducer';
import {CategoryState} from '../redux/reducers/category.reducer';
import {ProductDetailState} from '../redux/reducers/productDetail.reducer';

export interface AppState {

  readonly products: ProductState;
  readonly categories: CategoryState;
  readonly productDetail: ProductDetailState;

}
