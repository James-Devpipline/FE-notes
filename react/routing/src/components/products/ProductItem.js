import { Link } from "react-router-dom";

export default function ProductItem(props) {
  return (
    <div className="product-item">
      <div className="banner-img-wrapper">
        <Link to={`/products/${props.product.id}`}>
          <img
            src={props.product.banner_img}
            height={150}
            width={150}
            alt="product main banner"
          />
        </Link>
      </div>

      <h3>
        {props.product.title} | price: ${props.product.price?.toFixed(2)}
      </h3>
      <p>{props.product.description}</p>
    </div>
  );
}
