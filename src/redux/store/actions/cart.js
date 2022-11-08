import { ADD_ITEM_TO_CART, DELETE_FROM_CART } from "./actionTypes";
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

export function deleteFromCart(index) {
  const items = { ...store.getState().cart.items };
  delete items[index];
  return {
    type: DELETE_FROM_CART,
    payload: {
      items: items,
    },
  };
}
