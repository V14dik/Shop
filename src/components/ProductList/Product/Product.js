import "./Product.scss";

export function Product(props) {
  return (
    <div className="product">
      <img className="product-img" src={props.product.image} alt="Product" />
      <div className="about-product">
        <div className="product-name">{props.product.name}</div>
        <span>{props.product.description}</span>
        <div className="buy-container">
          <div className="product-price">{props.product.price}$</div>
          <button className="buy-btn">Buy</button>
        </div>
      </div>
    </div>
  );
}
