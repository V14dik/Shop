import {
  ADD_ITEM_TO_CART,
  CHANGE_TOTAL_PRICE,
  CLEAN_CART,
  DELETE_FROM_CART,
} from "../actions/actionTypes";

const initialState = {
  items: {},
  totalPrice: 0,
};

export function cart(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        items: { ...action.payload.items },
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        items: { ...action.payload.items },
      };
    case CHANGE_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.payload.totalPrice,
      };
    case CLEAN_CART:
      return {
        ...state,
        totalPrice: action.payload.totalPrice,
        items: action.payload.items,
      };
    default:
      return state;
  }
}
