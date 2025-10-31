import  { useState, useEffect } from 'react'
import Product from '../Components/Product';



const ProductList = ({ Favourites, toggleFavourite, addToCart }) => {
   const tabs = ["Phones", "Laptops", "Watches"];
     const productsByTab = {
    Phones: [
      { title: "iPhone 17 pro max", price: "$200", image: "/I17.jpg" },
      { title: "iPhone 16 pro max", price: "$180", image: "/1616pm.jpg" },
      { title: "iPhone 11 pro max", price: "$210", image: "/11ppm.jpg" },
      { title: "iPhone 13 pro", price: "$210", image: "/13pm.jpg" },
      { title: "iPhone 15 pro max", price: "$200", image: "/15pm.jpg" },
      { title: "iPhone xs max", price: "$180", image: "/xs max.jpg" },
      { title: "iPhone xr", price: "$210", image: "/xr.jpg" },
      { title: "iPhone 8plus", price: "$210", image: "/8plus.jpg" },
      { title: "iPhone 17 pro", price: "$200", image: "/17pro-1.jpg" },
      { title: "16 pro", price: "$180", image: "/16pro-2.jpg" },
      { title: "iPhone 15 pro", price: "$210", image: "/15promax-3.jpg" },
      { title: "iPhone 6plus", price: "$210", image: "/6s.jpg" }
    ],
    Laptops: [
      { title: "MacBook Air M3", price: "$900", image: "/Air M3.jpg" },
      { title: "MacBook Pro 16-inch", price: "$850", image: "/16Inches.webp" },
      { title: "iMac 24-inch (M3)", price: "$950", image: "/24inches.jpg" },
      { title: "MacBook Pro 14", price: "$950", image: "/MacBook Pro 14.jpg" },
      { title: "MacBook Air", price: "$900", image: "/m1.jpg"},
      { title: "MacBook Pro", price: "$850", image: "/m2.jpg" },
      { title: "iMac", price: "$950", image: "/macbook air.jpg" },
      { title: "MacBook Air M2", price: "$950", image: "/MacBook Air m2.jpg" },
      { title: "MacBook (12-inch)", price: "$900", image: "/m1.jpg"},
      { title: "iMac Pro", price: "$850", image: "/m2.jpg" },
      { title: "Mac Pro (Intel, 2019)", price: "$950", image: "/macbook (12-inch).jpg" },
      { title: "Mac Mini", price: "$950", image: "/mac mini.jpg" }
    ],
    Watches: [
      { title: "Apple Watch Series 9", price: "$350", image: "/series 9.webp" },
      { title: "Apple Watch Ultra 2", price: "$300", image: "/Apple Watch Ultra 2.webp" },
      { title: "Apple Watch SE", price: "$280", image: "/Apple Watch SE.webp" },
      { title: "Apple Watch Series 8", price: "$280", image: "/Apple Watch Series 8.webp" },
      { title: "Apple Watch Series 7", price: "$350", image: "/i1.jpg" },
      { title: "Apple Watch Series 11", price: "$300", image: "/i2.jpg" },
      { title: "Apple Watch Series 6", price: "$280", image: "/i4.jpg" },
      { title: "Apple Watch Series 4", price: "$280", image: "/Apple watch SE.jpg" },
      { title: "Apple Watch Series 3", price: "$350", image: "/1st.jpg" },
      { title: "Apple Watch Series 2", price: "$300", image: "/2nd.jpg" },
      { title: "Apple Watch Series 1", price: "$280", image: "/3rd.jpg" },
      { title: "Apple Watch Series 10", price: "$280", image: "/4th.jpg" }
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
          setCurrentPage(1);
        },
      [activeTab] 
      );

  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = visibleProducts.slice(indexOfFirstProduct, indexOfLastProduct);



  return (
    <div className="min-h-screen bg-[#121212] py-20 px-3 md:px-15 mt-[40px]">

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

<div 
  key={activeTab}
  className="flex flex-col md:flex-row flex-wrap gap-6 lg:gap-5 items-center justify-center animate-slideIn">
  {currentProducts.map((product, index) => (
    <Product
  key={index}
  image={product.image}
  title={product.title}
  price={product.price}
  isFavourite={Favourites.includes(product.title)}
  toggleFavourite={toggleFavourite}
  product={product}
  addToCart={addToCart}
/>
  ))}
  </div>
{/* Pagination Controls */}
<div className="flex items-center justify-center gap-4 mt-10 text-white">
  <button
    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
    disabled={currentPage === 1}
    className={`px-4 py-2 rounded-md ${
      currentPage === 1 ? "bg-gray-600 cursor-not-allowed" : "bg-[#D79B63]"
    }`}
  >
    Previous
  </button>

  <span className="text-sm md:text-base">
    Page {currentPage} of {Math.ceil(visibleProducts.length / productsPerPage)}
  </span>

  <button
    onClick={() =>
      setCurrentPage((prev) =>
        prev < Math.ceil(visibleProducts.length / productsPerPage)
          ? prev + 1
          : prev
      )
    }
    disabled={currentPage === Math.ceil(visibleProducts.length / productsPerPage)}
    className={`px-4 py-2 rounded-md ${
      currentPage === Math.ceil(visibleProducts.length / productsPerPage)
        ? "bg-gray-600 cursor-not-allowed"
        : "bg-[#D79B63]"
    }`}
  >
    Next
  </button>
  </div>
  </div>
  )
}

export default ProductList
