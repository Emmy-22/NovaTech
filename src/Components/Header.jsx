import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaBars, FaHeart, FaShoppingCart, FaTimes } from 'react-icons/fa'


const Header = ({ Favourites, cartCount, showMenu = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <header className='bg-[#191f28] fixed inset-x-0 top-0 z-30 h-20 flex items-center shadow-2xs justify-between px-3 md:px-15'>
      
      <Link to="/home" className='text-white font-bold text-3xl'>NovaTech</Link>

      {/* ✅ Only show nav links if showMenu is true */}
      {showMenu && (
        <div>
          <ul className='hidden lg:flex gap-6 text-[18px] text-white'>
            <li className='transform transition duration-200 hover:scale-105 block'><a href="#home">Home</a></li>
            <li className='transform transition duration-200 hover:scale-105 block'><a href="#shop">Shop</a></li>
            <li className='transform transition duration-200 hover:scale-105 block'><a href="#Testimonial">Testimonial</a></li>
            <li className='transform transition duration-200 hover:scale-105 block'><a href="#FAQ">FAQ</a></li>
          </ul>
        </div>
      )}

      {/* ✅ Only show mobile toggle if showMenu is true */}
      {showMenu && isOpen && (
        <ul className='absolute top-18 left-0 w-full bg-[#191f28] shadow-md flex flex-col lg:hidden
        items-center py-6 gap-6 text-[18px] text-white z-50'>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#shop" onClick={() => setIsOpen(false)}>Shop</a></li>
          <li><a href="#Testimonial" onClick={() => setIsOpen(false)}>Testimonial</a></li>
          <li><a href="#FAQ" onClick={() => setIsOpen(false)}>FAQ</a></li>
        </ul>
      )}

      <div className='text-white flex items-center gap-4'>
        
        <FaHeart
        onClick={() => navigate("/favourite")}
          className={`cursor-pointer text-[25px] transition duration-300 ${ Favourites && Favourites.length > 0 ? "text-red-500" : "text-white"}`}
        />

        <div className='relative' onClick={() => navigate("/cart")}>
          <FaShoppingCart className='cursor-pointer text-[25px]' />
          {cartCount > 0 && (
            <span className='absolute top-3 right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
              {cartCount}
            </span>
          )}
        </div>

        {/* ✅ Only show toggle if showMenu is true */}
        {showMenu && (
          <div
            onClick={() => setIsOpen(!isOpen)}
            className='lg:hidden flex items-center text-[25px] cursor-pointer text-white ml-2 p-1 z-60 border border-[1px]-white'
         >
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header