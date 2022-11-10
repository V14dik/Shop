import { combineReducers } from "@reduxjs/toolkit";

import { cartReducer } from "./cart/reducer";
import { productReducer } from "./product/reducer";

export const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
});
