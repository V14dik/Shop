import { useDispatch } from "react-redux";

import { addToCart } from "../../../redux/store/cart/actions";
import "./Product.scss";

export function Product({ product, index }) {
  const { image, name, description, price } = product;

  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(addToCart(index));
  };

  return (
    <div className="product">
      <img className="product-img" src={image} alt="Product" />
      <div className="about-product">
        <div className="product-name">{name}</div>
        <span>{description}</span>
        <div className="buy-container">
          <div className="product-price">{price}$</div>
          <button onClick={addHandler} className="buy-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
