
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">
        <h2>All Products</h2>
      </Link>


   

      <Link to="/cart">
        <ShoppingCart size={32} />
      </Link>
    </nav>
  );
}