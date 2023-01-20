import Link from "next/link";
import { useSelector } from "react-redux";
import styles from "../styles/Navbar.module.css";
const Navbar = () => {
  // Selecting cart from global state
  const cart = useSelector((state) => state.cart);

  // Getting the count of items
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        {" "}
        <h6 className={styles.logo}>Shopping Cart</h6>
      </Link>
      <ul className={styles.links}>
        <li className={styles.navlink}>
          <Link href="/cart">
            <p>Cart ({getItemsCount()})</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
