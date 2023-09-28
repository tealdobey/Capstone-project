import { useState, useEffect } from "react";
import { OneProduct } from "../API/Oneproduct";

import AddToCart from "./Addtocart";

export default function SingleProduct() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    TabTitle("OneShop | " + product.title);

    const singleProduct = async () => {
      try {
        const data = await OneProduct(id);
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    singleProduct();
  }, [product.title, id]);

  if (loading) {
    return <div className="loading"></div>;
  }
  if (error) {
    return <div className="error">Error</div>;
  }

  return (
    <div className="card" key={product.id}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      Rating: {product.rating.rate}/5 <br />
      Total Reviews: {product.rating.count}
      <AddToCart productId={id} />

    </div>
  );
}