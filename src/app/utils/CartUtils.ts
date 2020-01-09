import {CreateCart, GetCart, UpdateCart} from '../redux/actions/cart.action';
import {Store} from '@ngrx/store';
import {AppState} from '../Models/AppState';
import {User} from '../Models/User';
import {Cart} from '../Models/Cart';
import {JwtHelperService} from '@auth0/angular-jwt';

export class CartUtils {

  public static getOrCreateCart( store: Store<AppState>) {
    const cart = localStorage.getItem('cart');

    if (cart != null) {
      // tslint:disable-next-line:radix
      const id = parseInt(cart);

      store.dispatch(new GetCart(id));

    } else {
      let body = {UserId: null};
      if (this.get_user_id() !== null) {
        body = { UserId: this.get_user_id() };
      }
      store.dispatch(new CreateCart(body));
    }

    store.select(state => state.cart).subscribe(res => {
       if ( res !== undefined && res.data !== undefined && res.data !== null) {

         if ( res.data !== undefined && res.data.UserId === null) {

           if (this.get_user_id() !== null) {


             if (res.data.UserId === null) {

               const userId = this.get_user_id();

               res.data.UserId = userId;
               const body: Cart = {
                 CartId : res.data.CartId,
                 UserId : userId,
                 Products : res.data.Products,
                 Total: res.data.Total
               };
               store.dispatch(new UpdateCart(res.data.CartId, body));
             }
             }
         }
       }
     });

  }

  public static get_user_id() {
    const token = localStorage.getItem('token');
    if (token === null || token === undefined) {
      return null;
    }
    const jwtHelper = new JwtHelperService();

    // tslint:disable-next-line:variable-name
    const serialized_token = jwtHelper.decodeToken(token);
    // tslint:disable-next-line:radix
    return parseInt(serialized_token.nameid);
  }
}
