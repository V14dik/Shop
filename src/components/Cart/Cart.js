import "./Cart.scss";
import { CartItem } from "./CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { changeTotalPrice } from "../../redux/store/actions/cart";

export function Cart() {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector(({ cart }) => cart);
  const { products } = useSelector(({ product }) => product);

  useEffect(() => {
    dispatch(changeTotalPrice());
  }, [items, dispatch]);

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
      <div className="total-price">Total: {totalPrice}$</div>
      <button className="checkout">Checkout</button>
    </div>
  );
}
