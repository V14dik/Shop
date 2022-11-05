import { Product } from "./Product/Product";
import { store } from "../..";

export function ProductList() {
  const products = store.getState().product.products;
  return (
    <div>
      {Object.keys(products).map((product) => {
        <Product product={product} />;
      })}
    </div>
  );
}
