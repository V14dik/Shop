import {
  ADD_ITEM_TO_CART,
  CHANGE_TOTAL_PRICE,
  CLEAN_CART,
  DELETE_FROM_CART,
} from "./actionTypes";
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

export function changeTotalPrice() {
  const items = { ...store.getState().cart.items };
  const products = { ...store.getState().product.products };
  let newPrice = 0;
  for (let index in items) {
    newPrice += products[index].price * items[index];
  }
  return {
    type: CHANGE_TOTAL_PRICE,
    payload: {
      totalPrice: newPrice,
    },
  };
}

export function cleanCart() {
  return {
    type: CLEAN_CART,
    payload: {
      totalPrice: 0,
      items: {},
    },
  };
}
