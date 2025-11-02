import React from 'react'
import { FaHeart, FaStar } from 'react-icons/fa'
import { toast } from 'react-toastify'

const Product = ({ image, title, price, addToCart, product, isFavourite, toggleFavourite }) => {

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${title} added to cart!`, {
      position: "top-right",
      autoClose: 2000, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <div className="relative bg-[#1e1e1e] rounded-xl p-5 h-[560px] md:h-[400px] shadow-[0_4px_20px_rgba(0,0,0,0.2)] w-full sm:w-[270px]">
      <img src={image} alt={title} className="w-full h-[400px] md:h-[250px] rounded-[5px]" />
      
      <div 
        onClick={() => toggleFavourite(title)}
        className="absolute top-2 right-2 bg-[#D79B63] text-white p-2 rounded-4xl cursor-pointer"
      >
        <FaHeart
          className={`transition duration-300 ${isFavourite ? "text-red-500" : "text-white"}`}
        />
      </div>

      <div className="flex gap-1 text-[#D79B63] mt-3 mb-3 items-center ">
        {[...Array(5)].map((_, i) => <FaStar key={i} />)}
        <span className='text-white'>5.0</span>
      </div>

      <div className="flex justify-between mb-3">
        <h1 className="text-white font-semibold">{title}</h1>
        <p className="font-semibold text-white">{price}</p>
      </div>

      <button 
        onClick={handleAddToCart}
        className="text-white rounded-[5px] px-4 py-1 bg-[#D79B63] hover:bg-[#E8AF78] transition duration-300"
      >
        Add to Cart
      </button>
    </div>
  )
}

export default Product