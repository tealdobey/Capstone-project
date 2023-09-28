import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function AddToCart({ productId }) {
  let navigate = useNavigate();
  const handleSubmit = () => {
    let items = JSON.parse(localStorage.getItem("cart")) || [];

    let item = items.find((item) => item.productId === productId);

    if (item) {
      item.quantity += 1;
    } else {
      items.push({
        productId: parseInt(productId),
        quantity: 1,
      });
    }
    localStorage.setItem("cart", JSON.stringify(items));
    navigate(`/cart`);
  };
  return <button onClick={handleSubmit}>Add to cart</button>;
}

export default AddToCart