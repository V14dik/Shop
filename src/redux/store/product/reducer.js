import { GET_PRODUCTS } from "./actionTypes";

const initialState = {
  products: {},
};

export function productReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_PRODUCTS:
      return { ...state, ...payload };
    default:
      return state;
  }
}
