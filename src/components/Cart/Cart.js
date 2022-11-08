import "./Cart.scss";
import { CartItem } from "./CartItem/CartItem";
import { useSelector } from "react-redux";

export function Cart() {
  const { items } = useSelector(({ cart }) => cart);
  const { products } = useSelector(({ product }) => product);
  return (
    <div className="cart">
      <div className="cart-header">Cart</div>
      <ul className="cart-items">
        {Object.keys(items).map((index) => {
          return (
            <li key={products[index].name + index}>
              <CartItem
                product={products[index]}
                amount={items[index]}
                index={index}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
