import { ADD_ITEM_TO_CART } from "./actionTypes";
import { store } from "../../..";

export function addToCart(index) {
  const items = { ...store.getState().cart.items };
  if (items[index]) {
    items[index]++;
  } else {
    items[index] = 1;
  }
  return {
    type: ADD_ITEM_TO_CART,
    payload: {
      items: items,
    },
  };
}
