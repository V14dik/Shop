import { ADD_ITEM_TO_CART } from "../actions/actionTypes";

const initialState = {
  items: {},
};

export function cart(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        items: { ...action.payload.items },
      };
    default:
      return state;
  }
}
