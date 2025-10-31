import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
<div
  className="
    relative flex items-center justify-center md:mt-10 md:justify-between px-3 md:px-15 h-screen text-white 
    md:bg-gradient-to-br from-[#0b0b0b] via-[#121212] to-[191f28]                      
    bg-[url('/pic.jpg')] 
    bg-cover bg-no-repeat 
   "
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/80 md:bg-transparent"></div>

  <div className='hidden md:flex order-2 justify-center mt-[20px] md:w-[60%]'>
    <img src="/pic.jpg" alt="Image" className='max-h-[300px] max-w-md object-cover rounded-2xl shadow-[0_0_30px_rgba(215,155,99,0.3)] w-full'/>
  </div>

  {/* Content */}
  <div className="relative z-10 text-center md:text-left order-1 md:w-[60%]">
    <h1 className="text-5xl md:text-7xl font-extrabold  text-white mb-6 md:mb-4 font-[Playfair_Display]">
      Stay ahead with gadgets that fit your life.
    </h1>
    <p className="text-lg md:text-xl max-w-xl mx-auto md:mx-0 text-gray-100 md:text-[#c7c7c7] mb-12 md:mb-10 font-[Poppins]">
      Shop the latest Apple products and accessories, delivered fast and backed by trust. That's how we do things at NovaTech.
    </p>

    <Link to="/shop" className="px-15 py-4 md:py-5 rounded-lg font-semibold text-[#0B0B0B] bg-[#D79B63] hover:bg-[#E8AF78] transition duration-300 ">
    Explore Now
    </Link>
  </div>
</div>
  )
 }

export default HeroSection


