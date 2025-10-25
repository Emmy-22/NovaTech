import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Product from '../Components/Product';
import { FaGreaterThan } from 'react-icons/fa';


const Shop = ({ favourites, toggleFavourite, addToCart }) => {
     const tabs = ["Phones", "Laptops", "Watches"];

    const productsByTab = {
    Phones: [
      { title: "iPhone 17 pro max", price: "$200", image: "/I17.jpg" },
      { title: "iPhone 16 pro max", price: "$180", image: "/1616pm.jpg" },
      { title: "iPhone 11 pro max", price: "$210", image: "/111111.jpg" },
      { title: "iPhone 15 pro", price: "$210", image: "/15pm.jpg" }
    ],
    Laptops: [
      { title: "MacBook Air M3", price: "$900", image: "/Air M3.jpg" },
      { title: "MacBook Pro 16-inch", price: "$850", image: "/16Inches.webp" },
      { title: "iMac 24-inch (M3)", price: "$950", image: "/24inches.jpg" },
      { title: "MacBook Pro 14", price: "$950", image: "/MacBook Pro 14.jpg" }
    ],
    Watches: [
      { title: "Apple Watch Series 9", price: "$350", image: "/series 9.webp" },
      { title: "Apple Watch Ultra 2", price: "$300", image: "/Apple Watch Ultra 2.webp" },
      { title: "Apple Watch SE", price: "$280", image: "/Apple Watch SE.webp" },
      { title: "Apple Watch Series 8", price: "$280", image: "/Apple Watch Series 8.webp" }
    ],
  };    

      const [activeTab, setActiveTab] = useState("Phones");
      const [visibleProducts, setVisibleProducts] = useState(productsByTab["Phones"]);

      useEffect(() => {
        const shuffled = [...productsByTab[activeTab]];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setVisibleProducts(shuffled);
      },
    [activeTab]
    );

  return (
    <div id="shop" className="min-h-screen bg-[#121212] py-20 px-3 md:px-15">

    <div className='flex md:justify-between justify-center items-center'>
    <div className="flex items-center gap-4 justify-center md:justify-start overflow-x-auto pb-10">
  {tabs.map((tab) => {
    const isActive = tab === activeTab;
    return (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`py-2 px-4 rounded-md font-semibold text-sm md:text-base transition duration-300 whitespace-nowrap
          ${isActive
            ? "bg-[#D79B63] text-white shadow-[0_2px_10px_rgba(215,155,99,0.4)]"
            : "bg-[#1E1E1E] text-[#C7C7C7] hover:bg-[#2A2A2A]"
          }`}
      >
        {tab.toUpperCase()}
      </button>
    );
  })}
</div>
<Link to="/shop" className='hidden md:inline-flex text-white text-xl items-center leading-none'>See all collection <FaGreaterThan className='pl-2 text-xl relative top-[2px]'/></Link>
</div>

  <div 
  key={activeTab}
  className="flex flex-col md:flex-row flex-wrap gap-6 lg:gap-5 items-center justify-center animate-slideIn">
  {visibleProducts.map((product, index) => (
    <Product
  key={index}
  image={product.image}
  title={product.title}
  price={product.price}
  isFavourite={favourites.includes(product.title)}
  toggleFavourite={toggleFavourite}
  product={product}
  addToCart={addToCart}
/>
  ))}
  </div>
  <div className='flex md:hidden justify-end mt-5'>
    <Link to="/shop" className='md:hidden inline-flex text-white text-xl leading-none mt-10'>See all collection <FaGreaterThan className='pl-2 text-xl relative top-[2px]'/></Link>
  </div>
</div>
  )
}

export default Shop
