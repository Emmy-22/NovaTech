import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Admin from "./Pages/Admin";
import ShopPage from "./Pages/ShopPage";
import Footer from "./Components/Footer";
import Favourite from "./Pages/Favourite";
import "./App.css"


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [Favourites, setFavourites] = useState([]);
  const [cartItems, setCartItems] = useState([]);


  const toggleFavourite = (title) => {
    setFavourites((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

 
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.title === product.title);
      if (existingItem) {
        return prev.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };


  const removeFromCart = (title) => {
    setCartItems((prev) => prev.filter((item) => item.title !== title));
  };

  return (
    <div className="flex flex-col bg-[#121212] text-white min-h-screen">
      <Routes>
        <Route
          path="/home"
          element={
            <Home
              Favourites={Favourites}
              toggleFavourite={toggleFavourite}
              addToCart={addToCart}
              cartItems={cartItems}
            />
          }
        />
        <Route
          path="/shop"
          element={
            <ShopPage
              Favourites={Favourites}
              toggleFavourite={toggleFavourite}
              addToCart={addToCart}
              cartItems={cartItems}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              setCartItems={setCartItems}
              Favourites={Favourites}
            />
          }
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<Admin />} />
        <Route
          path="/favourite"
          element={
            <Favourite
              Favourites={Favourites}
              toggleFavourite={toggleFavourite}
              addToCart={addToCart}
              cartItems={cartItems}
            />
          }
        />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>

      <Footer />

      
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark" 
        toastClassName="toast-custom"
      />
    </div>
  );
};

export default App;