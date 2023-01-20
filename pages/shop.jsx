import ProductCard from "../components/ProductCard";
// import styles from "../styles/ProductCard.module.css";
import { getProducts } from "./api/products/index";

const ShopPage = ({ products }) => {
  return (
    <div>
      <h1>All Results</h1>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}
