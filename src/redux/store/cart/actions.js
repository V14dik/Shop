import {
  ADD_ITEM_TO_CART,
  CHANGE_TOTAL_PRICE,
  CLEAN_CART,
  DELETE_FROM_CART,
} from "./actionTypes";
import { store } from "../../..";

export function addToCart(index) {
  const { items } = store.getState().cart;
  const newItems = { ...items, [index]: (items[index] || 0) + 1 };

  return {
    type: ADD_ITEM_TO_CART,
    payload: { items: newItems },
  };
}

export function deleteFromCart(index) {
  const { items } = store.getState().cart;

  const newItems = Object.fromEntries(
    Object.entries(items).filter(([key]) => key !== index)
  );

  return {
    type: DELETE_FROM_CART,
    payload: { items: newItems },
  };
}

export function changeTotalPrice() {
  const { items } = store.getState().cart;
  const { products } = store.getState().product;

  const totalPrice = Object.entries(items).reduce(
    (sum, [key, value]) => (sum += products[key].price * value),
    0
  );

  return {
    type: CHANGE_TOTAL_PRICE,
    payload: { totalPrice },
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
