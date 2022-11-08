import "./CartItem.scss";
import { deleteFromCart } from "../../../redux/store/actions/cart";
import { useDispatch } from "react-redux";

export function CartItem(props) {
  const dispatch = useDispatch();

  const onDeleteHandler = () => {
    dispatch(deleteFromCart(props.index));
  };

  return (
    <div className="cart-item">
      <div className="item-name">{props.product.name}</div>
      <div className="item-price">
        {props.product.price}$ x {props.amount}
      </div>
      <div onClick={onDeleteHandler} className="delete"></div>
    </div>
  );
}
