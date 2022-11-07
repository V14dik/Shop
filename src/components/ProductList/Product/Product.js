import "./Product.scss";
import { addToCart } from "../../../redux/store/actions/cart";
import { useDispatch } from "react-redux";

export function Product(props) {
  const dispatch = useDispatch();
  const onBuyHandler = (index) => {
    dispatch(addToCart(index));
  };
  return (
    <div className="product">
      <img className="product-img" src={props.product.image} alt="Product" />
      <div className="about-product">
        <div className="product-name">{props.product.name}</div>
        <span>{props.product.description}</span>
        <div className="buy-container">
          <div className="product-price">{props.product.price}$</div>
          <button
            onClick={onBuyHandler.bind(this, props.index)}
            className="buy-btn"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
