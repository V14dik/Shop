import { useDispatch } from "react-redux";

import { deleteFromCart } from "../../../redux/store/cart/actions";
import "./CartItem.scss";

export function CartItem({ product, amount, index }) {
  const { name, price } = product;

  const dispatch = useDispatch();
  const onDeleteHandler = () => {
    dispatch(deleteFromCart(index));
  };

  return (
    <div className="cart-item">
      <div className="item-name">{name}</div>
      <div className="item-price">
        {price}$ x {amount}
      </div>
      <div onClick={onDeleteHandler} className="delete" />
    </div>
  );
}
