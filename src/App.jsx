import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import Cart from "./Pages/Cart"
import Checkout from "./Pages/Checkout"
import Admin from "./Pages/Admin"
import Header from "./Components/Header"
import Footer from "./Components/Footer"

const App = () => {
  return (
    <div className="flex flex-col">
      <Routes>
        <Route default element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/admin" element={<Admin />}/>
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
