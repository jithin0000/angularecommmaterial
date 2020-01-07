import {ProductState} from '../redux/reducers/product.reducer';
import {CategoryState} from '../redux/reducers/category.reducer';
import {ProductDetailState} from '../redux/reducers/productDetail.reducer';
import {CategoryDetailState} from '../redux/reducers/categoryDetail.reducer';
import {AuthState} from '../redux/reducers/authReducer';
import {UserState} from '../redux/reducers/user.reducer';
import {CartState} from '../redux/reducers/cart.reducer';

export interface AppState {

  readonly products: ProductState;
  readonly categories: CategoryState;
  readonly productDetail: ProductDetailState;
  readonly categoryDetail: CategoryDetailState;
  readonly auth: AuthState;
  readonly users: UserState;
  readonly cart: CartState;

}
