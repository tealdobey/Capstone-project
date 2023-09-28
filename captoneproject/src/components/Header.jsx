import { Link } from "react-router-dom";

export default function Header() {

  return (
    <header>
      <Link to="/">
        <h1>OneShop</h1>
      </Link>

      <div className="banner">
        <h3>Shop till you drop</h3>
      </div>
    </header>
  );
}