import "./Cart.scss";
import { CartItem } from "./CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { changeTotalPrice, cleanCart } from "../../redux/store/actions/cart";
import { Modal } from "../Modal/Modal";

export function Cart() {
  const [isModalOpen, setModal] = useState(false);
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
      <button
        className="checkout"
        onClick={() => {
          dispatch(cleanCart());
          setModal(true);
        }}
      >
        Checkout
      </button>
      <Modal
        isVisible={isModalOpen}
        onClose={() => {
          setModal(false);
        }}
      >
        Thank you for the purchase!
      </Modal>
    </div>
  );
}
