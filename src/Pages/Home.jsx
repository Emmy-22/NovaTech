import Header from '../Components/Header'
import HeroSection from '../Home/HeroSection'
import Shop from '../Home/Shop'
import FAQ from './FAQ'
import Testimonial from './Testimonial'
import Footer from '../Components/Footer'

const Home = ({ Favourites, toggleFavourite, addToCart, cartItems }) => {
  const totalItems = cartItems.length;

  return (
    <div>
      <Header  showMenu={true} cartCount={cartItems.length}  Favourites={Favourites}/>
      <HeroSection />
      <Shop
        Favourites={Favourites}
        toggleFavourite={toggleFavourite}
        addToCart={addToCart}
      />
      <Testimonial />
      <FAQ />
      
    </div>
  );
};

export default Home;