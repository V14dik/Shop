const products = require("../../../products.json");

const initialState = {
  products: products,
};

export function product(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
