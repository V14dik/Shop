import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Product } from "./Product/Product";
import { getProducts } from "../../redux/store/product/actions";
import "./ProductList.scss";

export function ProductList() {
  const { products } = useSelector(({ product }) => product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="products">
      {Object.keys(products).map((index) => (
        <Product
          key={products[index].name + index}
          product={products[index]}
          index={index}
        />
      ))}
    </div>
  );
}
