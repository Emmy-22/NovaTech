import Footer from "../Components/Footer"
import Header from "../Components/Header"
import ProductList from "../Components/ProductList"

const ShopPage = ({ Favourites, toggleFavourite, addToCart, cartItems }) => {
  return (
    <div>
      <Header 
      showMenu={false} cartCount={cartItems.length}  Favourites={Favourites}
      />
      <ProductList 
      Favourites={Favourites} 
      toggleFavourite={toggleFavourite} 
      addToCart={addToCart}
      />
    </div>
  );
};

export default ShopPage;