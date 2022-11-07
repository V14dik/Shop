import { combineReducers } from "redux";
import { product } from "./product";
import { cart } from "./cart";

export const rootReducer = combineReducers({
  product: product,
  cart: cart,
});
