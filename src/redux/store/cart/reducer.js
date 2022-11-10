import {
  ADD_ITEM_TO_CART,
  CHANGE_TOTAL_PRICE,
  CLEAN_CART,
  DELETE_FROM_CART,
} from "./actionTypes";

const initialState = {
  items: {},
  totalPrice: 0,
};

export function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_ITEM_TO_CART:
    case DELETE_FROM_CART:
    case CHANGE_TOTAL_PRICE:
    case CLEAN_CART:
      return { ...state, ...payload };
    default:
      return state;
  }
}
