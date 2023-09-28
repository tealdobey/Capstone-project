
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Register from "./components/Register";
import Login from "./components/Login";
import SingleProduct from "./components/Singleproduct";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [token, setToken] = useState("");

  const handle_token = localStorage.getItem("handle_token");
  console.log(handle_token);

  const handleLogout = () => {
    localStorage.clear(handle_token);
    window.location.reload();
  };

  return (
    <main>
      <Header />
      <div className="user">

        {handle_token ? (
          <Link to="/logout" onClick={handleLogout}>
            <h2>Logout</h2>
          </Link>
        ) : (
          <Link to="/login">
            <h2>Sign in</h2>
          </Link>
        )}
      </div>
      <Navbar />
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register setToken={setToken} />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart token={token} />} />
        </Routes>
      </section>
      <Footer />
    </main>
  );
}
