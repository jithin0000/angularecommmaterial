import {ProductEffect} from './product.effect';
import {CategoryEffects} from './category.effect';
import {AuthEffect} from './auth.effect';
import {UserEffect} from './user.effect';
import {CartEffect} from './cart.effect';
import {UserDetailEffect} from './UserDetailEffect';

export const effects: any[] = [ProductEffect, UserDetailEffect, CategoryEffects, AuthEffect, UserEffect, CartEffect];

// export * from './product.effect';
// export * from './category.effect';
// export * from './auth.effect';
