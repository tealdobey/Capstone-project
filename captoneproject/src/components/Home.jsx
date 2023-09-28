
import { useState, useEffect } from "react";

import AddToCart from "./Addtocart";



const Home = () => {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("desc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const location = useNavigate();



  console.log(products);

  TabTitle("OneShop | Home");
 
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products?sort=${sort}`
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    };

    fetchProducts();
  }, [sort]);

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Something went wrong...</div>;
  }

  return (
    <>
      <div className="sort-options">
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" value={sort} onChange={handleSortChange}>
          <option value="asc">Price: High to Low</option>
          <option value="desc">Price: Low to High</option>
        </select>
      </div>

      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search products by title..."
      />

      {filteredProducts.map((product) => (
        <div className="card" key={product.id}>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => location(`/product/${product.id}`)}
          >
            <img src={product.image} alt={product.title} />
          </div>
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <details>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          Rating: {product.rating.rate}/5 <br />
          Total Reviews: {product.rating.count}
          </details>
          <AddToCart productId={product.id} />        
          </div>
      ))}
    </>
  );
};

export default Home;