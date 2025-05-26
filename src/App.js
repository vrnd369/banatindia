import React, { useState, useEffect } from "react";
import Loader from "./components/loader";
import logo from "./assets/logo.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Footer from "./components/footer";

import Home from "./pages/home";
import About from "./pages/about";
import Category from "./pages/category";
import Shop from "./pages/shop";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Cart from "./pages/cart";

import "./components/nav.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const incrementQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.reduce((acc, item) => {
        if (item.id === id) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    );
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <nav className="main-navbar">
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/categories">Categories</Link>

          <div className="navbar-logo">
            <img src={logo} alt="Banat Logo" />
          </div>

          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <Link to="/shop">Shop</Link>

          <Link
            to="/cart"
            className="cart-link"
            title="Cart"
            style={{ position: "relative" }}
          >
            <FaShoppingCart size={22} />
            {cart.length > 0 && (
              <span
                className="cart-count"
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cart}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
