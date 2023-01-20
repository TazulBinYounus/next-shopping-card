import ProductCard from "components/ProductCard";
import styles from "../styles/Home.module.css";

const productData = [
  {
    id: 1,
    product: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 36.49,
  },
  {
    id: 2,
    product: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpgg",
    price: 21.99,
  },
  {
    id: 3,
    product: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 49.99,
  },
];

const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
        {productData.map((product) => (
          <div className="col-md-4">
            <ProductCard key={product.id} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
