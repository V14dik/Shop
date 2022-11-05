import { combineReducers } from "redux";
import { product } from "./product";
import { card } from "./card";

export const rootReducer = combineReducers({
  product: product,
  card: card,
});
