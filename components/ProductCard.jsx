import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart.slice";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  // style="width: 18rem;"
  return (
    <div>
      <div className="card">
        {/* <Image
          className="card-img-top"
          src={product.image}
          alt="Card image cap"
          width="200"
          height="200"
        /> */}
        <div className="card-body">
          <h5 className="card-title">{product.product}</h5>
          <p className="card-text">{product.category}</p>
          <p>$ {product.price}</p>

          <button
            className="btn btn-primary"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
