import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import Header from "../Components/Header";
import Product from "../Components/Product";

const Favourites = ({ cartItems, Favourites, addToCart, toggleFavourite }) => {
  const navigate = useNavigate();

  // All your products (same structure from ProductList)
  const allProducts = [
    // Phones
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
    { title: "iPhone 6plus", price: "$210", image: "/6s.jpg" },

    // Laptops
    { title: "MacBook Air M3", price: "$900", image: "/Air M3.jpg" },
    { title: "MacBook Pro 16-inch", price: "$850", image: "/16Inches.webp" },
    { title: "iMac 24-inch (M3)", price: "$950", image: "/24inches.jpg" },
    { title: "MacBook Pro 14", price: "$950", image: "/MacBook Pro 14.jpg" },
    { title: "MacBook Air", price: "$900", image: "/m1.jpg" },
    { title: "MacBook Pro", price: "$850", image: "/m2.jpg" },
    { title: "iMac", price: "$950", image: "/macbook air.jpg" },
    { title: "MacBook Air M2", price: "$950", image: "/MacBook Air m2.jpg" },
    { title: "MacBook (12-inch)", price: "$900", image: "/m1.jpg" },
    { title: "iMac Pro", price: "$850", image: "/m2.jpg" },
    { title: "Mac Pro (Intel, 2019)", price: "$950", image: "/macbook (12-inch).jpg" },
    { title: "Mac Mini", price: "$950", image: "/mac mini.jpg" },

    // Watches
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
    { title: "Apple Watch Series 10", price: "$280", image: "/4th.jpg" },
  ];

  // Find full product info by title
  const favouriteProducts = allProducts.filter((product) =>
    Favourites.includes(product.title)
  );

  return (
    <div className="bg-[#121212] text-white min-h-screen pt-20 pb-10 px-3 md:px-15 mt-[40px]">
      <Header showMenu={false} cartCount={cartItems.length}  Favourites={Favourites}/>

      <div className="flex items-center justify-between mb-10 relative">
        <FaAngleLeft 
          onClick={() => navigate("/shop")} 
          className="text-4xl rounded-4xl bg-[#1E1E1E] cursor-pointer left-0" 
        />
        <h2 className="text-3xl font-bold flex-1 text-center">Favourites</h2>
      </div>

      <div className="flex flex-wrap gap-6 lg:gap-5 items-center justify-center">
        {favouriteProducts.length === 0 ? (
          <p>No favourites yet ❤</p>
        ) : (
          favouriteProducts.map((product, index) => (
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
          ))
        )}
      </div>
    </div>
  );
};

export default Favourites;