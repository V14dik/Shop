import { Product } from "./Product/Product";
import { store } from "../..";
import "./ProductList.scss";

export function ProductList() {
  const products = store.getState().product.products;
  return (
    <div className="products">
      {Object.keys(products).map((index) => {
        return (
          <Product
            key={products[index].name + index}
            product={products[index]}
          />
        );
      })}
    </div>
  );
}
