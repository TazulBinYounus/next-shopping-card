import Link from "next/link";
import Image from "next/image";
import styles from "../styles/CategoryCard.module.css";

const CategoryCard = ({ image, name }) => {
  return (
    <div className={styles.card}>
      <Link href={`/category/${name.toLowerCase()}`}>
        <div className={styles.info}>
          <h3>{name}</h3>
          <p>$ 100</p>
          <button
            onClick={() => dispatch(addToCart(product))}
            className={styles.button}
          >
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  );
};
export default CategoryCard;
