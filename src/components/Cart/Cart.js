import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CartItem } from "./CartItem/CartItem";
import { changeTotalPrice, cleanCart } from "../../redux/store/cart/actions";
import { Modal } from "../Modal/Modal";
import "./Cart.scss";

export function Cart() {
  const [isModalOpen, setModal] = useState(false);

  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector(({ cart }) => cart);
  const { products } = useSelector(({ product }) => product);

  useEffect(() => {
    dispatch(changeTotalPrice());
  }, [items, dispatch]);

  const onCheckout = () => {
    dispatch(cleanCart());
    setModal(true);
  };

  return (
    <div className="cart">
      <div className="cart-header">Cart</div>
      <ul className="cart-items">
        {Object.keys(items).map((index) => (
          <li key={products[index].name + index}>
            <CartItem
              product={products[index]}
              amount={items[index]}
              index={index}
            />
          </li>
        ))}
      </ul>
      <div className="total-price">Total: {totalPrice}$</div>
      <button className="checkout" onClick={onCheckout}>
        Checkout
      </button>
      <Modal isVisible={isModalOpen} onClose={() => setModal(false)}>
        Thank you for the purchase!
      </Modal>
    </div>
  );
}
