import { GET_PRODUCTS } from "./actionTypes";

const products = require("../../../products.json");

export function getProducts() {
  return { type: GET_PRODUCTS, payload: { products } };
}
