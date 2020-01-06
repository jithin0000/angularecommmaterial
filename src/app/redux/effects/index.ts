import {ProductEffect} from './product.effect';
import {CategoryEffects} from './category.effect';
import {AuthEffect} from './auth.effect';

export const effects: any[] = [ProductEffect, CategoryEffects, AuthEffect];

export * from './product.effect';
export * from './category.effect';
export * from './auth.effect';
