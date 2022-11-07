import { ADD_ITEM_TO_CART } from "./actionTypes";
import { store } from "../../..";

export function addToCart(index) {
  const items = { ...store.getState().cart.items };
  if (index in Object.keys(items)) {
    items[index] = +items[index] + 1;
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
