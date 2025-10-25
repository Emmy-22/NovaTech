import React, { useState } from 'react'
import { FaBars, FaHeart, FaShoppingCart, FaTimes, FaUser } from 'react-icons/fa'

const Header = ({ isFavourite, cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='bg-[#191f28] fixed inset-x-0 top-0 z-30 h-20 lg:h-20 flex items-center shadow-2xs justify-between px-3 md:px-15'>
      
      <h1 className='text-white font-bold text-3xl'>NovaTech</h1>

      <div>
      <ul className='hidden lg:flex gap-6 text-[18px] text-white'>
        <li className='transform transition duration-200 hover:scale-105 block'><a href="#home">Home</a></li>
        <li className='transform transition duration-200 hover:scale-105 block'><a href="#shop">Shop</a></li>
        <li className='transform transition duration-200 hover:scale-105 block'><a href="#Testimonial">Testimonial</a></li>
        <li className='transform transition duration-200 hover:scale-105 block'><a href="#FAQ">FAQ</a></li>
      </ul>
        </div>

      {/* Click-away backdrop for mobile menu */}
      {isOpen && (
        <div 
        className='fixed inset-0 z-40 lg:hidden'
        onClick={() => setIsOpen(false)} 
        aria-hidden='true'
        />
      )} 

      {isOpen && (
      <ul className='absolute top-18 left-0 w-full bg-[#191f28] shadow-md flex flex-col lg:hidden
			items-center py-6 gap-6 text-[18px] text-white text- z-50'>


        <li className='transform transition duration-200 hover:scale-105 block'><a href="#home" onClick={() =>setIsOpen(false)}>Home</a></li>

        <li className='transform transition duration-200 hover:scale-105'><a href="#shop" onClick={() =>setIsOpen(false)}>Shop</a></li>

        <li className='transform transition duration-200 hover:scale-105'><a href="#Testimonial" onClick={() =>setIsOpen(false)}>Testimonial</a></li>

        <li className='transform transition duration-200 hover:scale-105'><a href="#FAQ" onClick={() =>setIsOpen(false)}>FAQ</a></li>
      </ul>
      )} 
      
      <div className='text-white flex items-center gap-4'>
        <FaHeart className={`cursor-pointer text-[25px] transition duration-300 
        ${isFavourite ? "text-red-500" : "text-white"}`}/>

        <div className='relative'>
        <FaShoppingCart className='cursor-pointer text-[25px]'/>
        { cartCount > 0 && (
        <span className='absolute top-3 right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>{cartCount}</span>
        )}
        </div>
        <div onClick={() => setIsOpen(!isOpen)}
      className='lg:hidden flex items-center text-[25px] cursor-pointer text-white ml-4 p-1 border border-3-white z-60'>
        {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  )
}

export default Header
