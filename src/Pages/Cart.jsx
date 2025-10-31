// Cart.jsx
import Header from "../Components/Header";
import { FaTrash } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = ({ Favourites, cartItems, setCartItems, removeFromCart }) => {
  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

const increaseQuantity = (title) => {
  setCartItems((prev) => 
  prev.map((item) => 
    item.title === title
  ? { ...item, quantity: item.quantity + 1 }
  : item
  )
  )
};

const decreaseQuantity = (title) => {
  setCartItems((prev) => 
  prev.map((item) => 
    item.title === title && item.quantity > 1
  ? { ...item, quantity: item.quantity - 1 }
  : item
  )
  );
};

 const navigate = useNavigate();

  const delivery = 3;
  const taxes = 2;
  const discount = 38;
  const service = 1;
  const total = subtotal + delivery + taxes - discount + service;

  return (
    <div className="bg-[#121212] text-white min-h-screen pt-20 pb-10 px-3 md:px-15 mt-[40px]">
      <Header showMenu={false} cartCount={cartItems.length}  Favourites={Favourites}/>

      <div className="flex items-center justify-between mb-10 relative">
      <FaAngleLeft 
      onClick={() => navigate("/shop")} className="text-4xl rounded-4xl bg-[#1E1E1E] cursor-pointer left-0" />

      <h2 className="text-3xl font-bold flex-1 text-center">Shopping Cart</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Section: Cart Items */}
        <div className="flex-1 space-y-4 overflow-y-auto">
          {cartItems.length === 0 ? (
            <p>Your cart is empty 🛒</p>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-[#1E1E1E] p-4 rounded-md"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-30 h-30 object-cover rounded-md"
                    
                  />
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-400">{item.price}</p>
                    <div className="flex gap-2 items-center">
                    <button 
                      onClick={() => decreaseQuantity(item.title)} 
                      className="border border-gray-400 text-white px-2 py-[2px] rounded hover:bg-gray-800 transition"
                    >
                      -
                    </button>
                    
                    <span className="text-lg">{item.quantity}</span>

                    <button 
                      onClick={() => increaseQuantity(item.title)} 
                      className="border border-gray-400 text-white px-2 py-[2px] rounded hover:bg-gray-800 transition"
                    >
                      +
                    </button>
                  </div>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.title)}
                  className="text-red-400 hover:text-red-600"
                >
                  <FaTrash />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Right Section: Order Summary */}
        <div className="bg-[#1E1E1E] p-6 rounded-md w-full md:w-1/3 md:h-[350px] md:sticky md:top-30">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal Product</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Price Delivery</span>
              <span>${delivery}</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes</span>
              <span>${taxes}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Discount</span>
              <span>-${discount}</span>
            </div>
            <div className="flex justify-between">
              <span>Service Charge</span>
              <span>${service}</span>
            </div>
            <hr className="my-2 border-gray-700" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={() => window.location.href = "/checkout"}
            className="w-full bg-[#D79B63] mt-4 py-2 rounded-md font-semibold text-black hover:bg-[#e0a974] transition"
          >
            Checkout →
          </button>
        </div>
      </div>

     
    </div>
  );
};

export default Cart;