import "./CartItem.scss";

export function CartItem(props) {
  return (
    <div className="cart-item">
      <div className="item-name">{props.product.name}</div>
      <div className="item-price">{props.product.price}$</div>
    </div>
  );
}
